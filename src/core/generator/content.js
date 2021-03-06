import _ from 'lodash';
import { copyTemplate, safeIncrement, linkTemplate, getTemplateTextTypes, cloneCrude } from '../utils/template-utils';
import { getElementFont } from './typography';
import { getElementColor, transferSurface, transferColors } from './color';

export const basicStages = [
  {
    type: 'content',
    key: 'content.text', 
    label: 'Text',
    generate: generateContent,
    satisfied: f => {
      return !!f._dominant;
    }
  },
]

export const advancedStages = [];
export const optionalStages = [];

export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]

// The purpose of generateContent is to focus the user on content
function generateContent(flyer, { userInput }) {
  const copy = copyTemplate(flyer);
  copy._textTypes = userInput ? userInput.text : copy._textTypes;
  copy.keywords = userInput ? userInput.keywords : (copy.keywords || '');
  mimicTemplateLayout(copy, flyer); 

  return [copy];
}

export function mimicTemplateLayout(flyer, template) {
  const f = groupTextContent(getTemplateTextTypes(flyer));
  const t = groupTextContent(getTemplateTextTypes(template));
  
  const originalImageBgs = _.map(flyer._all, item => 
    (item.background && item.background.img) ? cloneCrude(item.background) : null
  ).filter(i => i)

  f.all.forEach(s => s._match = null);
  const groupTypes = template._groups.map(g => g.type);
  const contentStats = getContentStats();
  template._score = template._score || 0;

  // Match specifics. Note: We are assuming no duplicate specifics.
  t.specifics.forEach(text => {
    text._match = _.find(f.specifics, ({type}) => type === text.type);
    text._match && (text._match._match = text);
  })

  // Match generics. WIP HACK
  t.generics.forEach((text, i) => {
    text._match = f.generics[i];
    text._match && (text._match._match = text);
  })

  // Find buddies for unmatched specifics
  _.filter(f.specifics, t => !t._match).forEach(text => {
    const matched = _.filter(f.all, t => t._match);
    const buddies = contentStats[text.type].validBuddyTypes;
    const buddy = _.find(buddies, buddy => _.some(matched, t => t.type === buddy));
    if(buddy) {
      text._match = _.find(matched, t => t.type === buddy)._match;
      // No need to do the reverse match since it's matched with the buddy.
      // text._match._match = text;
      template._score -= 75;
    }
    template._score += 100
  })

  // Create new elements for all unmatched
  _.filter(f.all, t => !t._match).forEach((text, i) => {
    const info = contentStats[text.type]
    const groupType = info.groupTypes.header === 1 
      ? 'header' : (info.groupTypes.footer === 1 ? 'footer' : 'body')
    // const groupType = 'body';
    
    const elementType = info.orderedElementTypes[0];
    text._match = { elementId: `generic-${i}`, groupType, elementType };
    template._score += 100;
    // if we've added a new group, we're clearly in unchartered territory.
    if(!_.includes(groupTypes, groupType)) {
      template._score += 100;
    }
  })

  // Every content is now matched to an element.
  // Combine into elements and groups.
  // Sort elements.
  const groups = _.mapValues(_.groupBy(f.all, t => t._match.groupType), texts => {
    const elements = _.values(_.groupBy(texts, t => t._match.elementType))
    const sorted = _.sortBy(elements, texts => {
      const text = _.find(texts, t => t.elementIndex !== undefined);
      return text
        ? text.elementIndex
        : _.meanBy(texts, t => contentStats[t.type].avgElementIndex) // where do these textTypes normally land?
    })
    return sorted;
  })

  // Sort text and compute element shapes
  _.forEach(groups, (elements, groupType) => {
    groups[groupType] = elements.map(texts => {
      const sorted = _.sortBy(texts, t => {
        const { avgLineIndex, avgListIndex } = contentStats[t.type];
        return avgLineIndex + avgListIndex * .1;
      })

      const el = _.find(texts, t => t._match.element);

      const shape = el
        ? getElementShape(el._match.element)
        : getAverageElementShape(sorted[0]._match.elementType)

      const lines = convertTextsToShape(sorted, shape);
      return {
        type: sorted[0]._match.elementType,
        lines,
      };
    })
  })

  // inject new elements & groups
  flyer.id = template.id;
  flyer.title = template.title;
  transferSurface(flyer, template);
  transferSurface(flyer.content, template.content);
  _.forEach(groups, (elements, groupType) => {
    if(!flyer.content[groupType]) {
      flyer.content[groupType] = buildDefaultGroup(flyer, groupType);
    }
    const tGroup = template.content[groupType];
    const fGroup = flyer.content[groupType];

    if(tGroup) {
      transferSurface(fGroup, tGroup);
    }

    fGroup.elements = elements.map(el => {
      const fElement = _.find(fGroup.elements, ({type}) => type === el.type)
        || buildDefaultElement(flyer, fGroup, el.type);
      const gElement = tGroup && _.find(tGroup.elements, ({type}) => type === el.type);
      if(gElement) {
        transferSurface(fElement, gElement, 'nearlight');
      }

      fElement.lines = el.lines;
      return fElement;
    })
  })

  // Add missing template image
  _.forEach(groups, (_elements, groupType) => {
    const fGroup = flyer.content[groupType];
    const tGroup = template.content[groupType]

    // Note: We're assuming only one image per group...
    const tImage = tGroup.elements.find(el => el.type === 'image');
    if(tImage) {
      const fImage = fGroup.elements.find(el => el.type === 'image');

      const copy = cloneCrude(tImage);
      if(fImage) {
        copy.background.img = fImage.background.img
      }

      if(tImage._computed.isFirst) {
        fGroup.elements.unshift(copy);
      } else if(tImage._computed.isLast) {
        fGroup.elements.push(copy);
      } else {
        // TODO: HACK WIP Where to put this?
        fGroup.elements.splice(tImage._computed.index, 0, copy);
      }
    }
  })

  // Delete groups that don't exist anymore
  const extraneousGroups = _.difference(flyer._groups.map(g => g.type), Object.keys(groups), ['body']);
  extraneousGroups.forEach(g => {
    delete flyer.content[g];
  })

  linkTemplate(flyer);
  transferColors(flyer, template, originalImageBgs);
}

function buildDefaultGroup(template, groupType) {
  const body = template.content.body;
  return {
    type: groupType,
    _parent: template.content,
    alignX: body.alignX,
    itemsAlignX: body.itemsAlignX,
    textAlign: body.textAlign,
  }
}

function buildDefaultElement(template, group, elementType) {
  return {
    type: elementType,
    _parent: group,
    color: getElementColor(template, group, elementType),
    font: getElementFont(template, group, elementType),
  }
}

// Doesn't use actual text measurements so size is estimated
// based on number of characters.
const MAX_CHARACTERS = 50;
function convertTextsToShape(texts, shape) {
  const lines = [];

  const strs = texts.map(t => t.text);
  for(let i = 0; i < strs.length; i++) {
    if(shape.includesList) {
      const list = makeList(strs.slice(i), shape.maxLineCharacters * 1.05)
      if(list.length > 1) {
        lines.push(list.map(text => ({text, type: texts[i].type})));
        i += (list.length - 1);
        continue;
      }
    }

    const optimalCharacters = _.clamp(
      shape.maxLineCharacters * 1.05,
      (texts[i].text.length / 3), 
      MAX_CHARACTERS
    )

    let paragraph = makeParagraph(texts[i].text, optimalCharacters)
    if(paragraph.length === 2) {
      paragraph = splitInHalf(texts[i].text)
    }

    lines.push(...paragraph.map(text => ({type: texts[i].type, text})))
  }
  return lines;
}

function splitInHalf(text) {
  let mark = text.length / 2;
  const pieces = text.split(' ');
  for(let i = 0; i < pieces.length; i++) {
    const next = pieces[i].length + 1; // add the space;
    if(Math.abs(mark) < Math.abs(mark - next)) {
      return [
        pieces.slice(0, i).join(' '),
        pieces.slice(i).join(' '),
      ]
    }
    mark -= next; 
  }

}

function makeParagraph(text, maxCharacters) {
  const pieces = text.split(' ');

  let i = 0;
  let lines = [];
  while(i < pieces.length) {
    const list = makeList(pieces.slice(i), maxCharacters);
    i += list.length;
    lines.push(list.join(' '));
  }
  return lines;
}

function makeList(texts, maxCharacters) {
  let i, count = 0;
  for(i = 0; i < texts.length; i++) {
    count += texts[i].length;
    if(count > maxCharacters) {
      break;
    }
  }
  return texts.slice(0, Math.max(1, i));
}

function getElementShape(el) {
  const lineCount = el.lines.length;

  const lineCharacters = el.lines.map(line => (
    _.isArray(line) 
      ? line.map(t => t.text).join(' | ').length
      : line.text.length
  ))
  
  return {
    lineCount,
    firstLineCharacters: lineCharacters[0],
    maxLineCharacters: _.max(lineCharacters),
    includesList: _.some(el.lines, _.isArray),
    ratio: lineCharacters[0] / lineCount,
  }
}

function getAverageElementShape(elementType) {
  const info = getElementStats()[elementType];
  const lineCount = info.avgLineCount;
  const firstLineCharacters = info.avgFirstLineCharacterCount;

  return {
    lineCount,
    firstLineCharacters,
    maxLineCharacters: firstLineCharacters,
    includesList: info.avgContainsList >= 0.33,
    ratio: firstLineCharacters / lineCount,
  }
}

function groupTextContent(text) {
  return {
    all: text,
    specifics: _.filter(text, t => t.type !== 'descriptive'),
    generics: _.filter(text, t => t.type === 'descriptive'),
  }
}

export function computeContentStats(templates) {
  computeElementStats(templates);
  _computeContentStats(templates);
}

const defaultTextTypeInfo = {
  buddyTypes: {},
  elementTypes: {},
  groupTypes: {},
  prevElementTypes: {},
  listCount: 0,
  avgListIndex: 0,
  avgLineIndex: 0,
  avgCharacters: 0,
  avgLines: 0,
  avgElementIndex: 0, // Maybe this should be per group?
};

let _contentStats;
function getContentStats() {
  return _contentStats;
}

function _computeContentStats(templates) {
  _contentStats = {};
  _.forEach(templates, template => {
    const text = getTemplateTextTypes(template);
    const groups = _.groupBy(text, t => t.element.id);

    text.forEach(t => {
      _contentStats[t.type] = _contentStats[t.type] || _.cloneDeep(defaultTextTypeInfo);
      const o = _contentStats[t.type];
      safeIncrement(o.elementTypes, t.element.type);
      safeIncrement(o.groupTypes, t.element._parent.type)
      safeIncrement(o.prevElementTypes, t.element._prev && t.element._prev.type)
      groups[t.element.id].forEach(t => {
        safeIncrement(o.buddyTypes, t.type)
      })

      o.avgElementIndex += t.elementIndex;
      o.avgCharacters += t.text.length;
      o.avgLineIndex += t.lineIndex;
      o.avgLines += t.lines.length;
      if(t.listIndex !== undefined) {
        o.listCount++;
        o.avgListIndex += t.listIndex;
      }
    })
  })

  // Divide by totals to get value between 0 and 1.
  _.forEach(_contentStats, (info, type) => {
    const total = info.buddyTypes[type];
    _.forEach(info, (item, itemKey) => { 
      if(_.isObject(item)) {
        _.forEach(item, (v, k) => {
          info[itemKey][k] = v / total;
        })
      }
    })
    if(info.listCount) {
      info.avgListIndex /= info.listCount;
    }
    info.listCount /= total;
    info.avgLineIndex /= total;
    info.avgLines /= total;
    info.avgCharacters /= total;
    info.avgElementIndex /= total;
  })

  // Establish Valid Buddy Types
  const BUDDY_THRESHOLD = 0.2;
  _.forEach(_contentStats, (info, type) => {
    info.validBuddyTypes = [];
    _.forEach(info.buddyTypes, (v, k) => {
      if(v > BUDDY_THRESHOLD && k !== type) {
        info.validBuddyTypes.push(k);
      }
    })
    
    // sorted by frequency of occurrance
    

    info.orderedGroupTypes = _.sortBy(_.keys(info.groupTypes), type => -info.groupTypes[type])
    info.orderedElementTypes = _.sortBy(_.keys(info.elementTypes), type => -info.elementTypes[type])
    info.validBuddyTypes.sort((a, b) => info.buddyTypes[b] - info.buddyTypes[a]);
  })
}

let _elementStats;
export function getElementStats() {
  return _elementStats;
}

const defaultElementStats = {
  total: 0,
  avgLineCount: 0,
  avgFirstLineCharacterCount: 0,
  avgContainsList: 0,
}
function computeElementStats(templates) {
  _elementStats = {};
  const templateCount = _.size(templates);
  _.forEach(templates, template => {
    _.forEach(template._elements, el => {
      if(!el.lines) return;
      
      _elementStats[el.type] = _elementStats[el.type] || _.cloneDeep(defaultElementStats);
      const o = _elementStats[el.type];

      const firstLine = el.lines[0];
      const firstLineText = _.isArray(firstLine) ? firstLine.map(t => t.text).join(' | ') : firstLine.text;

      o.total += 1;
      o.avgLineCount += el.lines.length;
      o.avgFirstLineCharacterCount += firstLineText.length;
      o.avgContainsList += _.some(el.lines, _.isArray) ? 1 : 0
    })
  })

  // Calculate averages
  _.forEach(_elementStats, (info, type) => {
    info.avgTemplateInclusion = info.total / templateCount;
    info.avgLineCount /= info.total;
    info.avgFirstLineCharacterCount /= info.total;
    info.avgContainsList /= info.total;
  })
}