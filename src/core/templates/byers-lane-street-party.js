import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'You are invited!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.08,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Byers Lane'},
    {type: 'eventName', text: 'Street Party'},
    {type: 'eventName', text: 'for All'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.02,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'An annual event to celebrate life in the bustling city.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.04,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Oct 3. 2020 | Register at'},
    {type: 'descriptive', text: '408 Byers Lane | 7PM onwards'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.07,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: "Now in it's 8th year, this event is for everyone."},
    {type: 'details', text: 'Just another night full of music, art, good food,'},
    {type: 'details', text: 'and great company.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.04,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 72,
  title: 'Byers Lane Street Party',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1537111355507-1f73d87ecadf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 333 },
      filters: {
        brightness: 0.7,
      }
    }
  },
  content: {
    body: {
      alignY: 'top',
      alignX: 'left',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      elements: [
        paragraph,
      ]
    }
  }
}