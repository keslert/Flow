import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Christian Youth Week',
  tags: ['event', 'flyer'],
  px: 60,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1532726858233-f3c23319edc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: 0.9,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      background: { 
  color: basicColor('#25334bee'),
},
      alignX: 'flex-end',
      alignY: 'center',
      textAlign: 'center',
      w: .70,
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'San Dias Church Presents'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Christian'},
            {type: 'eventName', text: 'Youth Week'},
            {type: 'eventName', text: '2020'},
          ],
          color: basicColor('#dfdbc1'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Learn, Love, and Live the Life'},
            {type: 'descriptive', text: 'of Jesus Christ'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bar',
          height: unitValue(5, 'px'),
          width: unitValue(100, '%'),
          background: { 
  color: basicColor('#dfdbc1'),
},
        },
        {
          type: 'heading',
          lines: [
            
            {type: 'date', text: 'October 19-24, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10am - 5pm'},
            {type: 'location', text: 'Hall A, San Dias Church'},
          ],
          color: basicColor('#dfdbc1'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Increase your faith, learn about the life of'},
            {type: 'details', text: "our Lord, study the Bible, meet new"},
            {type: 'details', text: "friends, and have loads of fun!"},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
}