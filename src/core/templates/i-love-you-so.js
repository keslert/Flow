import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'I love you so',
  px: 72,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1531814349519-f1250e63a0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: 0.8,
    }
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      bleed: { all: true },
      elements: [
        { 
          type: 'small', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'descriptive', text: 'A Valentine\'s Celebration'},
          ],
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .3, // uses ems
          },
          mb: 2,
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'ilove'},
            {type: 'eventName', text: 'you'},
            {type: 'eventName', text: 'so'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Voga',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'none',
            lineHeight: 1.05,
            ignoreAscenders: true,
            ignoreDescenders: true,
          },
        },
        { 
          type: 'small', 
          lines: [
            [
              {type: 'descriptive', text: 'Food'},
              {type: 'descriptive', text: 'Drink'},
              {type: 'descriptive', text: 'Music'},
            ],
            [
              {type: 'date', text: 'Feb 9', format: 'MMM D'},
              {type: 'time', text: 'Doors open at 7PM'},
            ]
          ],
          color: basicColor('#ffffff'),
          divider: {
            type: 'line',
            size: 2,
            color: basicColor('#D1BC8B'),
          },
          mb: 1,
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            lineHeight: 1.6,
            transform: 'uppercase',
            letterSpacing: .3, // uses ems
          },
        },
      ],
    },
    footer: {
      overlay: false,
      width: unitValue(100, '%'),
      textAlign: 'center',
      bleed: { all: true },
      elements: [{
        type: 'small',
        lines: [
          {type: 'contact', text: 'For more information contact Daniel Rose at 202 555 4321'},
        ],
        color: basicColor('#ffffff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 2,
          style: 'normal',
          lineHeight: 1.2,
        },
      }]
    },
  }
}