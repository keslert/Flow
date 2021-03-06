import { unitValue } from './'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Beach Party Madness',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-maroon-and-yellow-beach-party-flyer-MAC5p09I7SY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1529182856268-587c45053e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      filters: {
        brightness: 0.4,
      }
    },
    color: basicColor('#516c5c'),
    backgroundBlendMode: 'overlay',
  },
  content: {
    w: 'fill',
    h: 'fill',
    alignX: 'left',
    alignY: 'top',
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Come Party With Us!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
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
            {type: 'eventName', text: 'Beachtown Beach'},
            {type: 'eventName', text: 'Party Madness'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
            color: basicColor('#f7f1af'),
          },
          w: .25,
          h: 8,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'host', text: 'Proudly sponsored by Lamplight Mobile System'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
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
    footer: {
      w: 'fill',
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'July 9, 2020'},
              {type: 'time', text: '3 pm onwards'},
            ],
            {type: 'location', text: 'Beechtown Beach'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          color: basicColor('#ffffff'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#f7f1af'),
},
          w: .25,
          h: 8,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Put on your swimsuit, leave your stresses away'},
            {type: 'details', text: 'and get ready for a night of partying by the'},
            {type: 'details', text: 'ocean! Everyone is invited to join!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
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