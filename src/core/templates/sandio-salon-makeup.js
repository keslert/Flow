import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'You are invited to attend'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.26,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sandio'},
    {type: 'eventName', text: 'Salon Makeup'},
    {type: 'eventName', text: 'Seminar'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Playfair Display',
    letterSpacing: 0.01,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Thorough tutorials for newbie makeup artists'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.11,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'August 10, 2020'},
      {type: 'time', text: '2PM Onwards'},
    ],
    {type: 'location', text: 'Sandio Boutique Hotel'},
  ],
  divider: {
    type: 'comma',
    size: 1,
    color: basicColor('#21294d'),
  },
  color: basicColor('#21294d'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.04,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Not without challenges, makeup application is an art'},
    {type: 'details', text: 'that can be learned. Let us be your teachers! Everbody\'s'},
    {type: 'details', text: 'welcome to learn.'},
  ],
  color: basicColor('#21294d'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.06,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const icon = {
  type: 'icon',
  src: '/champagne.svg',
  fill: '#ffffff',
  size: 1,
  meta: {
    width: 100,
    height: 100,
    colors: [],
    filetype: 'svg',
  },
}

export default {
  id: 54,
  title: 'Sandio Salon Makeup Seminar',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1512207855369-643452a63d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 593 },
      filters: {
        brightness: 0.7,
      }
    },
    color: basicColor('#21294d'),
    backgroundBlendMode: 'hard-light',
  },
  content: {
    body: {
      elements: [
        icon,
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      background: { 
  color: basicColor('#f9cfa2'),
},
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}