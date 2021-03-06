import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Halloween Lantern Fest',
  tags: ['event', 'halloween'],
  px: 36,
  py: 36,
  background: { 
  color: basicColor('#4d3a6e'),
},
  border: {
    top: 150, 
    bottom: 150,
    seed: 2,
    color: basicColor('#4d3a6e'),
    layout: 'confetti',
    items: [
      {type: 'party-hat', color: '#ffffff', size: 32},
      {type: 'party-hat', color: '#faa329', size: 32},
    ],
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignX: 'center',
      alignY: 'center',
      bleed: { all: true },
      elements: [
        { 
          type: 'small', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'descriptive', text: 'Everyone is invited!'},
          ],
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .1,
          },
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Halloween'}, 
            {type: 'eventName', text: 'Lantern Fest'},
          ],
          color: basicColor('#faa329'),
          font: {
            family: 'Londrina Sketch',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .05,
          },
        },
        { 
          type: 'small', 
          color: basicColor('#ffffff'),
          lines: [
            {type: 'date-time', text: 'October 31 @ 7pm'},
          ],
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .1,
          },
          mb: 1,
        },
      ],
    },
  }
}