import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Whimson Productions'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Muli',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The Milcheur'},
    {type: 'eventName', text: 'Summer Festival'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Rock out to the most popular bands of the season!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'July 15 . Saturday . 4 PM - 11 PM'},
    {type: 'descriptive', text: 'San Dias Beach Resort'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: "Enjoy the summer and watch as pop music's"},
    {type: 'details', text: 'hottest acts perform right in front of you at the'},
    {type: 'details', text: "country's biggest music fesitval!"},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: '',
  tags: ['event', 'flyer'],
  background: { 
  color: solidColor('#e54049'),
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