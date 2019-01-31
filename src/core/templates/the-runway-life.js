import { solidColor, unitValue } from '.'

export default {
  title: 'The Runway Life',
  px: 60,
  py: 72,
  background: {
    url: 'https://images.unsplash.com/photo-1545911975-d1e66f72af83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#86a7ab',
    x: 0.3,
    y: 0.5,
    zoom: 2.49,
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-start',
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Baks Clothing Company'},
        ],
        color: solidColor('#000'),
        background: solidColor('#fff'),
        width: unitValue(100, '%'),
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
        pr: 4,
        pl: 2,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'The Runway'},
          {type: 'eventName', text: 'Life: Fierce'},
          {type: 'eventName', text: '& Fabulous'},
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
        mb: 0.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'time', text: 'A charity fashion show'},
          {type: 'time', text: 'for the women of BWC'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'price', text: 'Tickets: $5'},
          {type: 'date', text: 'June 20, 2020'},
          {type: 'time', text: '11 am'},
          {type: 'location', text: 'Beechtown Community Center'},
        ],
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.7,
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
          {type: 'descriptiveText', text: 'Watch the hottest trends go down the runway'},
          {type: 'descriptiveText', text: 'with looks from our Spring/Summer \'20 collection.'},
          {type: 'descriptiveText', text: '100% of the proceeds will go to BWC'},
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
        mb: 1,
      },
    ]
  }
}