import { basicColor } from '../utils/color-utils';

export default {
  id: 61,
  title: 'Annual Sports Festival',
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-white-icons-sports-flyer-MAC3TYnQPGY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  background: { 
  color: basicColor('#ec6b42'),
},
  decor: {
    r: .3,
    b: .3,
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Mueller Montessori School'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
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
            {type: 'eventName', text: '30th Annual'},
            {type: 'eventName', text: 'Sports'},
            {type: 'eventName', text: 'Festival'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Theme: Instilling great values through'},
            {type: 'descriptive', text: 'playing sports'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'Sept. 7 to 11, 2020', format: 'MMMM D, YYYY'},
            {type: 'location', text: 'School Covered Court &'},
            {type: 'location', text: 'Open Field'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.02,
            lineHeight: 1.6,
            size: 1.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: "The school's most awaited sporting"},
            {type: 'details', text: "event is here! Try out different"},
            {type: 'details', text: "sports and enjoy friendly matches"},
            {type: 'details', text: "in our annual sports fest!"},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.3,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}