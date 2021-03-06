import { basicColor } from '../utils/color-utils';


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'For the Children Fundraiser'},
  ],
  color: basicColor('#507473'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'White'},
    {type: 'eventName', text: 'Elephant'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Sensei',
    letterSpacing: -0.02,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'All money raised in this event will proceed to'},
    {type: 'descriptive', text: 'the For the Children Organization.'},
  ],
  color: basicColor('#507473'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.06,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'March 30, 2019'},
      {type: 'time', text: '10:00 AM to 4:30 PM'},
    ],
    {type: 'descriptive', text: '31107 37th Ave., Graham, WA'},
  ],
  divider: {
    type: 'bar',
    size: 1,
    color: basicColor('#507473'),
  },
  color: basicColor('#507473'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: ''},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  id: 67,
  title: 'White Elephant',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#87c3c1'),
},
  decor: {
    t: .45,
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        heading,
        // paragraph,
      ]
    },
  }
}