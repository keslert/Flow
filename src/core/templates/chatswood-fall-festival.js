import { basicColor } from '../utils/color-utils';


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Momay Event Productions'},
  ],
  color: basicColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.170,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Chatswood Fall'},
    {type: 'eventName', text: 'Festival 2020'},
  ],
  color: basicColor('#d59158'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.028,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'The hottest food and entertainment event for fall'},
  ],
  color: basicColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: .07,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Oct. 10, 2020', format: 'MMM. D, YYYY'},
      {type: 'time', text: '9 AM to 4 PM'},
    ],
    {type: 'location', text: 'McDowell Digital Center'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: basicColor('#d59158'),
  },
  color: basicColor('#d59158'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'The Chatswood Fall Festival is the grandest fall event in'},
    {type: 'details', text: "town. Find food, entertainment and more that's fit for the"},
    {type: 'details', text: 'season!'},
  ],
  color: basicColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const bar = {
  type: 'bar',
  background: { 
  color: basicColor('#6d4d43'),
},
  w: .25,
  h: 8,
}


export default {
  id: 95,
  title: 'Chatswood Fall Festival',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#ffffff'),
},
  decor: {
    y: .3,
  },
  content: {
    h: 'auto',
    background: { 
  color: basicColor('#ffffff'),
},
    bleed: { a: 1 },
    body: {
      elements: [
        small,
        dominant,
        bridge,
        bar,
        heading,
        paragraph,
      ]
    },
  }
}