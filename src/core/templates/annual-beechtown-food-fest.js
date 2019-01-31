import { solidColor, unitValue } from '.'

export default {
  title: 'Annual Beechtown Food Fest',
  px: 36,
  py: 36,
  ps: 1,
  background: {
    url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    background: solidColor('#6b6f39'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    bleed: {all: true},
    aspectRatio: 1,
    px: 3,
    py: 3,
    w: 0.75,
    // width: unitValue(100, '%'),
    borderRadius: unitValue(50, '%'),
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Beechtown City Council'},
        ],
        color: solidColor('#fff'),
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
          {type: 'eventName', text: 'Annual'},
          {type: 'eventName', text: 'Beechtown'},
          {type: 'eventName', text: 'Food Fest'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Admission is free! Hope'},
          {type: 'descriptiveText', text: 'to see you there!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    background: solidColor('#6b6f39'),
    width: unitValue(100, '%'),
    bleed: {all: true},
    textAlign: 'center',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'date', text: 'January 16 - 20, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '10 am to 5 pm'},
          {type: 'location', text: '123 Anywhere St.'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'For more information about the food fest, visit'},
          {type: 'descriptiveText', text: 'www.reallygreatsite.com. You may also call us at (123) 456-7890'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
      }
    ]
  }
}