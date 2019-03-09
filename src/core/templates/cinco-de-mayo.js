import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'San Dias Cantina presents'},
  ],
  color: solidColor('#2f292b'),
  background: solidColor('#faaf40'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.130,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Cinco de Mayo'},
    {type: 'eventName', text: 'Fiesta 2020'},
  ],
  color: solidColor('#8bc53f'),
  font: {
    family: 'Knewave',
    letterSpacing: 0.01,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "It's the biggest party of the year!"},
    {type: 'descriptive', text: "Don't miss out!"},
  ],
  color: solidColor('#faaf40'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.03,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'May 5, 2020'},
      {type: 'date', text: '1:00 PM onwards'},
    ],
    {type: 'location', text: '123 Anywhere St.'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#8bc53f'),
  },
  color: solidColor('#8bc53f'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.130,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Pay $20 per person and get unlimited'},
    {type: 'details', text: 'margaritas, beer and tapas all day (and night) '},
    {type: 'details', text: 'long! Happy Cinco de Mayo!'},
  ],
  color: solidColor('#faaf40'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.03,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 94,
  title: 'Cinco de Mayo',
  tags: ['event', 'flyer'],
  background: solidColor('#2f292b'),
  decor: {
    y: .2,
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        heading,
        paragraph,
      ]
    },
  }
}