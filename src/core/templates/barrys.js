import { unitValue } from './'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Barry\'s',
  px: 36,
  py: 36,
  footer: null,
  header: null,
  background: { 
  color: basicColor('#ffffff'),
},
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      flex: 1,
      alignX: 'left',
      alignY: 'center',
      background: { 
  color: basicColor('#000'),
},
      bleed: {all: true },
      elements: [
        { 
          type: 'image',
          flex: 1,
          bleed: {all: true},
          url: 'https://images.unsplash.com/photo-1454587399083-b11b22f48fb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
          filters: [],
        },
        {
          type: 'dominant',
          lines: [
            {type: 'brandName', text: 'Barry\'s'}
          ],
          background: { 
  color: basicColor('#FFD2A7'),
},
          color: basicColor('#000'),
          font: {
            transform: 'uppercase',
            size: 1,
            family: 'Josefin Slab',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
            letterSpacing: .1,
          },
          overlap: .5,
          marginBottom: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'stationary for the working professional'},
          ],
          color: basicColor('#ffffff'),
          font: {
            size: 1.2,
            family: 'Josefin Slab',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
          },
          marginBottom: 1,
        },
        {
          type: 'bar',
          width: unitValue(120, 'px'),
          height: unitValue(3, 'px'),
          background: { 
  color: basicColor('#FFD2A7'),
},
          marginBottom: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Since 1989'},
          ],
          color: basicColor('#FFD2A7'),
          font: {
            transform: 'uppercase',
            size: 1,
            family: 'Muli',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
          },
        },
      ]
    }
  }
}