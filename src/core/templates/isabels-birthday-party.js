import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Dance the night away!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Isabel's 21st"},
    {type: 'eventName', text: 'Birthday Party'},
  ],
  color: basicColor('#2c7b99'),
  font: {
    family: 'Edo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A night of music, danceing, and'},
    {type: 'descriptive', text: 'a whole lot of fun!'},
  ],
  color: basicColor('#2c7b99'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0.04,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'September 18, 2020'},
    {type: 'time', text: 'Dancing starts at 9:00 PM'},
    {type: 'location', text: 'Club Audora'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Present this birthday inviation at the bar to get 2 free cocktails of'},
    {type: 'details', text: "your choice. Can't wait to see you there!"},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 75,
  title: "Isabel's 21st Birthday Party",
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-and-peach-girl-photo-birthday-flyer-MAC3TT-TnZw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1526205711417-6f36af4f3c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 750 },
    },
  },
  content: {
    body: {
      alignY: 'bottom',
      background: {
        color: basicColor('#ffffff'),
        mask: {},
      },
      bleed: { x: 1 },
      elements: [
        dominant,
        bridge,
      ]
    },
    header: {
      elements: [small]
    },
    footer: {
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}