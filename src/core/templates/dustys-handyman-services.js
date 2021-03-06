import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Dusty\'s Handyman Services',
  tags: ['service', 'brand'],
  px: 36,
  py: 36,
  background: { 
  color: basicColor('#eaeff0'),
},
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      w: .6,
      alignY: 'center',
      alignX: 'left',
      textAlign: 'left',
      bleed: { all: true },
      elements: [
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Dusty\'s'}, 
            {type: 'eventName', text: 'Handyman'},
            {type: 'eventName', text: 'Services'},
          ],
          color: basicColor('#8c463c'),
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
          mb: 1,
        },
        { 
          type: 'small', 
          lines: [
            {type: 'descriptive', text: 'We Improve Your House!'},
          ],
            color: basicColor('#506974'),
          font: {
            family: 'Roboto Condensed',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
            letterSpacing: .1,
          },
        },
      ],
    },
  }
}