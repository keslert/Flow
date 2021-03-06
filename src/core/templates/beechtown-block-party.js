import { basicColor, stripedColor } from '../utils/color-utils';


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Time to head outside!'},
  ],
  color: basicColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "It's the"},
    {type: 'eventName', text: 'Beechtown'},
    {type: 'eventName', text: 'Block Party!'},
  ],
  color: basicColor('#b5322c'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    lineHeight: 1.2,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "We're closing off the streets for a good time."},
  ],
  color: basicColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.003,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'location', text: 'Beechtown Drive'},
      {type: 'date', text: 'January 5, 2020', format: 'MMMM D, YYYY'},
    ],
    {type: 'time', text: '6 PM onwards'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: basicColor('#b5322c'),
  },
  color: basicColor('#b5322c'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.078,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Eat home-cooked meals, drink ice-cold'},
    {type: 'details', text: 'refreshments, listen to good music, and meet the'},
    {type: 'details', text: 'community. We promise you a good time!'},
  ],
  color: basicColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const image = {
  type: 'image',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1525804017725-0ac671aea1fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: {
        w: 800,
        h: 450,
      },
    }
  },
  border: {
    y: 0.02,
    background: {
      color: stripedColor(135, '#b5322c', 3, basicColor('#b5322c', 0), 2),
    }
  },
  h: 'fill',
  bleed: { x: 1 },
  aspectRatio: .25,
  sticky: true,
}


export default {
  id: 99,
  title: 'Beechtown Block Party',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-red-and-cream-block-party-flyer-MAC5uGwBvFY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#ffefd5'),
},
  content: {
    body: {
      h: 'fill',
      itemsAlignY: 'top',
      elements: [
        small,
        dominant,
        bridge,
        image,
      ]
    },
    footer: {
      background: { 
  color: basicColor('#ffefd5'),
},
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}