import { unitValue } from '.'
import { stripedColor, basicColor } from '../utils/color-utils';

export default {
  title: 'Pizza Party for Cause',
  px: 48,
  py: 72,
  border: {
    color: stripedColor(45, '#000', 60, '#ffffff', 60),
    all: 10,
  },
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      w: .6,
      background: { 
  color: basicColor('rgba(156,34,16,.84)'),
},
      flex: 1,
      alignX: 'flex-end',
      alignY: 'center',
      bleed: {all: true, border: true},
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Help feed the kids!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Roboto Condensed',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.1,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Pizza'}, 
            {type: 'eventName', text: 'Party'}, 
            {type: 'eventName', text: 'For A'}, 
            {type: 'eventName', text: 'Cause'},   
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Bebas Neue',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            // letterSpacing: .025,
          },
          mb: 2,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'date', text: '09.18.19', format: 'MM.DD.YY'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Bebas Neue',
            weight: 700,
            size: 1.5,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.6,
            letterSpacing: .1,
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            [
              {type: 'time', text: '12-6pm'},
              {type: 'day-of-week', text: 'Saturday'},
            ],
            {type: 'location', text: 'Gino\'s Pizzaria'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          color: basicColor('#ffffff'),
          font: {
            family: 'Roboto Condensed',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
        },
      ]
    },
  }
}