import { basicColor } from '../utils/color-utils';

export default {
  id: 4,
  title: 'Hurricane Relief Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-blue-lines-pattern-food-drive-flyer-MAC3TYAY1fE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: { 
      src: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-blue-lines-pattern-food-drive-flyer-MAC3TYAY1fE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
      meta: { w: 393, h: 550 },
    },
  },
  content: {
    background: { 
  color: basicColor('#28373b'),
},
    h: 'auto',
    py: 2,
    body: {
      alignX: 'center',
      alignY: 'center',
      itemsAlignX: 'center',
      itemsAlignY: 'center',
      textAlign: 'center',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Great Nature Foundation'},
          ],
          color: basicColor('#f5f5f5'),
          font: {
            family: 'Exo',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Hurricane'},
            {type: 'eventName', text: 'Relief Food'},
            {type: 'eventName', text: 'Drive'},
          ],
          color: basicColor('#f5f5f5'),
          font: {
            family: 'Peace Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'bridge',
          lines: [
            [
              {type: 'date', text: "Sept. 12-14, 2020", format: "MMM. D, YYYY"},
              {type: 'time', text: "9 AM to 6 PM"},
            ],
            {type: 'location', text: 'Winslough Event Center'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#f5f5f5'),
          },
          color: basicColor('#f5f5f5'),
          font: {
            family: 'Exo',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'heading',
          lines: [
            {type: 'descriptive', text: 'For the benefit of the'},
            {type: 'descriptive', text: 'victims of Hurricane Adam'},
          ],
          color: basicColor('#f5f5f5'),
          font: {
            family: 'Peace Sans',
            letterSpacing: 0.09,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Last Sept. 1, Hurricane Adam devastated over 1'},
            {type: 'details', text: 'million homes. Join our relief efforts to help'},
            {type: 'details', text: 'victims get back on their feet.'},
          ],
          color: basicColor('#f5f5f5'),
          font: {
            family: 'Exo',
            letterSpacing: 0.08,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}