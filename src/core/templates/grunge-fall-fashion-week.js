import { basicColor } from '../utils/color-utils';

export default {
  id: 46,
  title: 'Grunge Fall Fashion',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1517336277864-8c02f49ef022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 484 },
    }
  },
  content: {
    h: 'auto',
    body: {
      background: { 
  color: basicColor('#000000'),
},
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Sandra Morgan Outfitters'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Open Sans',
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
            {type: 'eventName', text: 'Grunge Fall'},
            {type: 'eventName', text: '& Winter'},
            {type: 'eventName', text: 'Fashion Week'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Special Elite',
            letterSpacing: 0,
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
            {type: 'descriptive', text: 'Experience the latest in grunge'},
            {type: 'descriptive', text: 'fashion nationwide'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      background: { 
  color: basicColor('#000000'),
},
      elements: [
        {
          type: 'heading',
          color: basicColor('#ffffff'),
          lines: [
            [
              {type: 'date|time', text: 'Oct. 4 @ 5pm'},
              {type: 'location', text: 'Holler Hall'},
            ],
            [
              {type: 'date|time', text: 'Oct. 6 @ 3pm'},
              {type: 'location', text: 'Patsy Square'},
            ],
          ],
          divider: {
            type: 'bar',
            size: 1,
            color: basicColor('#ffffff'),
          },
          font: {
            family: 'Special Elite',
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
          lines: [
            {type: 'details', text: '50+ brands will be showcased. Drop by on our'},
            {type: 'details', text: 'time slot to get a glimpse of our latest collection'},
            {type: 'details', text: 'before it hits the stores!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.05,
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