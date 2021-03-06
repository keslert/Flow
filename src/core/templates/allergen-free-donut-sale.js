import { basicColor } from '../utils/color-utils';

export default {
  id: 41,
  title: 'Allergen-Free Donut Sale',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-white-with-donuts-bake-sale-flyer-MAC4CsQClwE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#ffffff'),
},
  content: {
    h: 'auto',
    alignY: 'bottom',
    body: {
      elements: [
        // { 
        //   type: 'image',
        //   flex: 1,
        //   bleed: {top: true, left: true, right: true},
        //   src: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        //   zoom: 1,
        //   y: 0.75,
        //   filters: {
        //     "brightness": 1.2
        //   },
        // },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Indulge the Safe Way'},
          ],
          color: basicColor('#d45e8f'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.14,
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
            {type: 'eventName', text: "Cia's Allergen-Free"},
            {type: 'eventName', text: 'Donut Sale'},
          ],
          color: basicColor('#d45e8f'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bridge',
          lines: [
            [
              {type: 'date', text: 'August 8-10'},
              {type: 'time', text: '1-6PM'},
            ],
            {type: 'location', text: 'Beechtown Community Park'},

          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#d45e8f'),
          },
          color: basicColor('#d45e8f'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
            color: basicColor('#d45e8f'),
          },
          h: 6,
          w: .33,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'detials', text: "Now's your chance to get a batch of these special homemade donuts"},
            {type: 'detials', text: "while they're still hot and fresh from the oven!"},
          ],
          color: basicColor('#d45e8f'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0,
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