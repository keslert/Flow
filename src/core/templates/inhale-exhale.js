import { unitValue } from '.'
import { basicColor, linearColor } from '../utils/color-utils';

export default {
  title: 'Inhale Exhale',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    x: .35,
    y: 1,
    zoom: 1.75,
    color: basicColor('#49065f'),
    filters: {
      brightness: .7,
    },
    backgroundBlendMode: 'luminosity',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      w: .7,
      alignY: 'center',
      textAlign: 'left',
      bleed: {all: true },
      elements: [
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Inhale'}, 
            {type: 'eventName', text: 'Exhale'},
          ],
          color: basicColor('#fade77'),
          font: {
            family: 'Roboto Condensed',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.2,
          },
        },
        { 
          type: 'small', 
          lines: [
            {type: 'descriptive', text: 'Yoga Therapy'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Roboto Condensed',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
        },
      ],
    },
    footer: {
      overlay: false,
      background: { 
  color: basicColor('#49065f'),
},
      textAlign: 'center',
      width: unitValue(100, '%'),
      bleed: {all: true },
      elements: [{
        type: 'small',
        lines: [
          {type: 'website', text: 'www.silkyoga.com'},
        ],
        color: basicColor('#fade77'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase', // TODO: I like the name appearance for this. carrd.co
          lineHeight: 1.4,
          letterSpacing: .5,
        },
      }]
    },
    header: {
      type: 'basic',
      overlay: false,
      bleed: {all: true },
      width: unitValue(100, '%'),
      textAlign: 'right',
      elements: [{
        type: 'icon',
        src: '/silk-yoga.png',
        size: 1,
        meta: {
          width: 88,
          height: 100,
          colors: [],
          filetype: 'png', // y = 0 if at bottom of page, y=1 if a top
        }
      }]
    },
  }
}