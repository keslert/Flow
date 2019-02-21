import { solidColor, unitValue } from '.'

export default {
  title: 'Gold Cheetah Survival Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-mountains-summer-camp-flyer-MAC3Y6D0AFU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 40,
  py: 40,
  background: solidColor('#fef8e9'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      width: unitValue(100, '%'),
      textAlign: 'center',
      flex: 1,
      elements: [
        {
          type: 'logo',
          url: '/yacht.svg',
          fill: '#f48842',
          size: 0.8,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Trek! Swim! Paddle!'},
          ],
          color: solidColor('#f25938'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Gold Cheetah Survival'},
            {type: 'eventName', text: 'Summer Camp'},
          ],
          color: solidColor('#f25938'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: 'Get together with friends and be wilderness'},
            {type: 'descriptiveText', text: 'explorers!'},
          ],
          color: solidColor('#f25938'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'heading',
          color: solidColor('#f25938'),
          lines: [
            [
              {type: 'date', text: 'June 8-21, 2020', format: 'MMMM D, YYYY'},
              {type: 'location', text: 'Gold Cheetah Camp'},
            ],
            {type: 'city-state', text: 'Lake Sandio, PA'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#f25938'),
          },
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
            lineHeight: 1.6,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        { 
          type: 'image',
          flex: 1,
          bleed: {left: true, right: true, bottom: true},
          url: '/mountain.svg',
          zoom: 1.15,
          y: 0.62,
          fill: '#f48842',
        },
      ]
    },
    footer: {
      bleed: {all: true},
      width: unitValue(100, '%'),
      background: solidColor('#f48842'),
      textAlign: 'center',
      elements: [
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Open for kids aged 11 to 13. Our team of skilled and'},
            {type: 'descriptiveText', text: 'professional camp counselors ensures all kids are safe 24/7.'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Montserrat',
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
    }
  }
}