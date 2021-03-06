import { basicColor } from '../utils/color-utils';

export default {
  id: 21,
  title: 'The Honest Nostalgia',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustration-art-gallery-raffle-flyer-MAC4XK0cokg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustration-art-gallery-raffle-flyer-MAC4XK0cokg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
      meta: { w: 393, h: 550 },
    },
  },
  content: {
    background: { 
  color: basicColor('#fefaef'),
},
    body: {
      textAlign: 'left',
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Natsukashi Art Gallery'},
          ],
          color: basicColor('#21303b'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 300,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Honest'},
            {type: 'eventName', text: 'Nostalgia:'},
            {type: 'eventName', text: 'An Exhibit'},
          ],
          color: basicColor('#e35e3e'),
          font: {
            family: 'Montserrat',
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
            {type: 'descriptive', text: 'Featuring the works of renowned'},
            {type: 'descriptive', text: 'artist, Tachibana Daishi'},
          ],
          color: basicColor('#21303b'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    },
    footer: {
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        {
          type: 'heading',
          color: basicColor('#21303b'),
          lines: [
            {type: 'date', text: '7-15 February 2020', format: 'D MMMM YYYY'},
            {type: 'time', text: '11am - 9pm'},
            {type: 'location', text: '123 Anywhere St.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: basicColor('#21303b'),
          lines: [
            {type: 'details', text: 'Get an in-depth glimpse into the otherworldly'},
            {type: 'details', text: 'beauty of Tachibana\'s most popular Japanese-'},
            {type: 'details', text: 'themed masterpieces.'},
          ],
          font: {
            family: 'Montserrat',
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