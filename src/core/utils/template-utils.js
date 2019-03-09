import _ from 'lodash';
import { withGroups } from '../producer';





export function normalizeTemplate(template) {
  console.log(`Normalizing ${template.title}`);

  template._groups = withGroups(template, g => g);
  

  template._groups.forEach(g => g.elements.forEach(el => {
    el._group = g;
  }))

  template._elements = _.flatten(template._groups.map(g => g.elements));
  // TODO: What color is behind content?
  // TODO: What color is behind each group?
  // TODO: What color is behind each element?


  template._textTypes = getTextTypes(template);
}

export function getTextTypes(template) {  
  const types = _.flatMap(template._elements, el => {

    // flatten lists
    const lines = _.flatMap(el.lines, (line, lineIndex) => (
      _.isArray(line)
        ? line.map((listItem, listIndex) => ({
            ...listItem, 
            lineIndex, 
            listIndex, 
            listId: `${el._group.type}_${lineIndex}`
          }))
        : {...line, lineIndex}
    ))

    // build types
    const types = _.reduce(lines, (ret, line) => {
      const prev = _.last(ret) || {};
      if(prev.type === line.type) {
        prev.text += ' ' + line.text;
        prev.lines.push(line);
      } else {
        ret.push({
          type: line.type,
          elementId: el._computed.id,
          elementType: el.type,
          groupType: el._group.type,
          element: el, // TODO: Delete...
          elementIndex: el._computed.index,
          text: line.text,
          listId: line.listId,
          lines: [line],
          lineIndex: line.lineIndex,
          listIndex: line.listIndex,
        });
      }
      return ret;
    }, [])

    return types;
  })

  types.forEach(t => t.element._text = {text: t.text, type: t.type});

  return types;
}

// TODO: HACK WIP
export function copyTemplate(flyer) {
  return _.cloneDeep(flyer);
}