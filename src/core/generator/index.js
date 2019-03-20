import _ from 'lodash';
import { generateLayout } from './layout';

import { 
  basicStages as basicLayoutStages,
} from './layout';
import {
  stages as contentStages,
  basicStages as basicContentStages,
  computeContentStats,
} from './content';
import { 
  basicStages as basicColorStages,
  computeColorStats,
} from './color';
import { 
  basicStages as basicTypographyStages,
  computeTypographyStats,
} from './typography';

import { templates } from '../templates';
import { computeFlyer } from '../producer';
import { normalizeTemplate } from '../utils/template-utils';

_.forEach(templates, t => {
  computeFlyer(t);
  normalizeTemplate(t);
})


const journey = [
  ...basicContentStages,
  ...basicLayoutStages,
  ...basicColorStages,
  ...basicTypographyStages,
]

// Iterations spent in area
  // Individual attention?
  // Collective attention?
  // Manual attention?
    // Manual tweak
    // Guided AI Action
// Confidence in area

/*
Stage
- type: 'layout' | 'color'
- focus: 'line-breaks' | 'background'
- action?: 'increase-font-size'
- selection?: ['body-element-header-0']
*/
// Is it possible to run multiple stages?
  // Yes, just do multiple forced stages.



/*
options = {
  history,
  stage,
  action,
  selection,
  templates,
  userInput,
}
*/

export function precompute() {
  computeContentStats(templates);
  // computeLayoutStats(templates);
  computeColorStats(templates);
  computeTypographyStats(templates);
}


export function generateFlyers(flyer, _options={}) {
  normalizeTemplate(flyer);
  const options = {
    ..._options,
    templates: _options.templates || templates,
  }
  const stage = getStage(flyer, options)

  const generated = stage.generate(flyer, options);
  generated.forEach(f => f._stage = stage);
  return generated;
}

function getStage(flyer, options) {
  let stage;
  if(options.stage) {
    stage = _.find(journey, s => 
      s.type === options.stage.type 
      && (!options.stage.focus || options.stage.focus === s.focus)
    )
  }

  return stage || _.find(journey, stage => !stage.satisfied(flyer))
}


// TODO: Update to use all stages.
const STAGES = {
  content: contentStages,
  layout: basicLayoutStages,
  typography: basicTypographyStages,
  color: basicColorStages,
}
export function getStageFoci(type) {
  return STAGES[type] || [];
}

export function validCache(flyer, cache) {
  return cache.flyers && 
    (flyer.id === cache.genId || flyer.genId === cache.genId)
}

export function getDesiredNumberOfFlyers(flyers, index, multiple) {
  return multiple 
    ? flyers.slice(index, multiple)
    : flyers[index]
}

export function getFromCache(cache, multiple) {
  cache.index++;
  if(cache.index >= cache.flyers.length) {
    cache.index = 0;
  }
  return getDesiredNumberOfFlyers(cache.flyers, cache.index, multiple);
}

// function generateStage(flyer, history, stage) {
//   switch(stage.type) {
//     case 'content': 
//       return generateContent(flyer, history, stage)
//     case 'layout': 
//       return generateLayout(flyer, history, stage)
//     default:
//       return;
//   }
// }


// The user upgrading boosts confidence


// If the user clicks to advance to the next stage that should raise our confidence for the current stage.
// This is especially true if the user has already seen a number of variations.


// 1. Type of flyer
// 2. Important Information (text content)
// 3. Layout
  // Line breaks (element shape)
  // Group assignment
    // Content types
    // Lines
    // Max characters


// 4. Color
  // Establishing a base color
    // Image? Provided or searching unsplash in the background for ideas.
    // Mood?

  // Palette
  
  // Background
    // Images
    // Color Filtered Images
    // Basic patterns?
  // Foreground

  
// 5. Typography
  // Primary
  // Secondary
  // Relative sizes

// 6. Decoration
  // Pattern refinement
  // Text decals
  // Bars
  // Borders

// 7. Polish
  // Sizing
  // Color Harmony
  // Overlays
    // Filters