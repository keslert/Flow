import { basicColor } from '../utils/color-utils';

export default {
  title: 'Winslow Medical Health Fair',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-photo-health-fair-flyer-MAC4WqK5At4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  border: {
    l: 25,
    background: { 
  color: basicColor('#fb972e'),
},
  },
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      filters: {
        brightness: 0.6,
      },
      x: 0.25,
    },
    color: basicColor('#58a2c1'),
    backgroundBlendMode: 'luminosity',
  },
  content: {
    height: 'fill',
    width: 'fill',
    body: {
      h: 'auto',
      w: 'fill',
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itemsAlignY: 'center',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Winslough Medical Center'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 2,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Annual'},
            {type: 'eventName', text: 'Health Fair'},
            {type: 'eventName', text: '2020'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "Participate in this year's health talks and"},
            {type: 'descriptive', text: "screenings"},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'heading',
          color: basicColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'November 17, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '10 a.m.'},
            ],
            {type: 'location', text: '123 Anywhere St.'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          font: {
            family: 'Oswald',
            letterSpacing: 0.1,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'paragraph',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Our health fair is free and open to everyone. Simply register'},
            {type: 'details', text: 'your attendance at www.reallygreatsite.com and take a'},
            {type: 'details', text: 'screenshot.'},
          ],
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
  }
}