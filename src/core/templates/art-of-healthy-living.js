import { basicColor } from '../utils/color-utils';


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Organika Lifestyle Center'},
  ],
  color: basicColor('#697b60'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.07,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The Art of'},
    {type: 'eventName', text: 'Healthy Living'},
  ],
  color: basicColor('#697b60'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.08,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A seminar about how to live a healthier lifestyle'},
  ],
  color: basicColor('#697b60'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'June 20, 2020'},
    {type: 'descriptive', text: '1 PM - 3 PM'},
    {type: 'descriptive', text: 'Beechtown Auditorium'},
  ],
  color: basicColor('#697b60'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.13,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'From eating the right food to the perfect'},
    {type: 'details', text: 'exercise routine, find the best path to a '},
    {type: 'details', text: 'happier and healthier you.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.07,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 68,
  title: 'The Art of Healthy Living',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-white-&-olive-green-minimal-health-fair-flyer-MAC5v18P9fU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#ffffff'),
},
  border: {
    a: .03,
    background: { 
  color: basicColor('#ffffff'),
},
  },
  decor: {
    t: .45,
    type: 'gallery',
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      background: { 
  color: basicColor('#697b60'),
},
      bleed: { a: 1 },
      elements: [
        paragraph,
      ]
    }
  }
}