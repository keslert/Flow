import { unitValue } from './'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Clean & Green',
  version: 1,
  px: 36,
  py: 36,
  background: { 
  color: basicColor('#1B5C50'),
},
  border: {
    top: 120, 
    bottom: 120,
    color: basicColor('#B9E6BF'),
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
            {type: 'descriptive', text: '#jointheearthmovement'},
          ],
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Clean'}, 
            {type: 'eventName', text: '&'}, 
            {type: 'eventName', text: 'Green'}
          ],
          color: basicColor('#F9CE00'),
          font: {
            family: 'Muli',
            weight: 900,
            size: 1,
            // fitToWidth: true,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        { 
          type: 'bridge', 
          lines: [
            {type: 'descriptive', text: 'Providing organic and environmentally'},
            {type: 'descriptive', text: 'friendly cleaning services since 2019'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            lineHeight: 1.2,
          },
        },
      ],
    },
  }
}