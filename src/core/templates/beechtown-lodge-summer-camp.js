import { basicColor } from '../utils/color-utils';

export default {
  id: 31,
  title: 'Beechtown Lodge Summer Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-and-orange-tent-flyer-summer-camp-flyer-MAC3TSOmKhg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#022f2f'),
},
  content: {
    body: {
      h: 'fill',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Explore the Outdoors!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Roboto',
            letterSpacing: 0.19,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Beechtown Lodge'},
            {type: 'eventName', text: 'Teen Summer Camp'},
          ],
          color: basicColor('#fbad5c'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'A place for building friendship and learning life skills'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Roboto',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        { 
          type: 'image',
          background: {
            img: {
              src: '/camping.png',
              meta: {
                w: 200,
                h: 200,
              },
              zoom: 1.2,
              y: 0.4,
            },
          },
          fill: '#94f9ce',
          aspectRatio: .6,
          sticky: true,
        },
      ]
    },
    footer: {
      bleed: { a: 1 },
      background: { 
  color: basicColor('#fbad5c'),
},
      elements: [
        {
          type: 'heading',
          color: basicColor('#022f2f'),
          lines: [
            {type: 'date', text: 'June 21 to 23, 2020', format: "MMMM D, YYYY"},
            {type: 'location', text: 'Beechtown Lodge & National Park'},
          ],
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'The Beechtown Lodge Summer Camp helps teens aged 14 to'},
            {type: 'details', text: '18 learn life survival skills in a fun, friendly setting.'},
          ],
          font: {
            family: 'Roboto',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}