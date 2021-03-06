import { basicColor } from '../utils/color-utils';

export default {
  id: 20,
  title: 'Health is Wealth Fair 2020',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustrated-heart-health-fair-flyer-MAC7m1QGUWA.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  tags: ['flyer', 'event'],
  background: { 
  color: basicColor('#58c4ce'),
},
  decor: {
    t: .4,
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itemsAlignY: 'bottom',
      textAlign: 'left',
      elements: [
        { 
          type: 'small', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'host', text: 'The Winslough Hospital'},
          ],
          font: {
            family: 'Nunito',
            letterSpacing: 0.06,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Health is'},
            {type: 'eventName', text: 'Wealth Fair 2020'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Fredoka One',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.4,
            letterSpacing: 0,
          },
        },
        { 
          type: 'bridge', 
          color: basicColor('#ffffff'),
          lines: [
            [
              {type: 'descriptive', text: 'Join us for the annual community health fair!'},
            ]
          ],
          font: {
            family: 'Nunito',
            letterSpacing: .06,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        { 
          type: 'heading', 
          color: basicColor('#ffffff'),
          background: {
            color: basicColor('#ff8b7b'),
            borderRadius: 8,
          },
          w: 'auto',
          px: 2,
          py: 1.5,
          lines: [
            [
              {type: 'date', text: 'October 16, 2020', format: 'MMM D, YYYY'},
              {type: 'time', text: '9 A.M. - 5 P.M.'},
            ],
            {type: 'location', text: '123 Anywhere St.'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          font: {
            family: 'Fredoka One',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
            letterSpacing: 0.06,
          },
        },
        { 
          type: 'paragraph', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Make your health always your priority.'},
            {type: 'details', text: 'Participate in this year\'s exciting activities'},
            {type: 'details', text: 'and take steps towards a better lifestyle!'},
          ],
          font: {
            family: 'Nunito',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.4,
            letterSpacing: 0.04,
          },
        },
      ],
    },
  }
}