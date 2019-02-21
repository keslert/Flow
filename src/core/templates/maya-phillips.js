import { solidColor, unitValue } from '.'

export default {
  title: 'Maya Phillips',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-colorful-confetti-background-birthday-celebration-event-flyer-MAC7mrsHwDA.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 48,
  py: 48,
  border: {
    top: 40,
    bottom: 40,
    left: 50,
    right: 50,
    url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-colorful-confetti-background-birthday-celebration-event-flyer-MAC7mrsHwDA.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  },
  background: solidColor('#ffffff'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Celebrate With Us!'},
          ],
          color: solidColor('#000000'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.2,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Maya Phillips'},
            {type: 'eventName', text: 'Is Twenty-One!'},
          ],
          color: solidColor('#000000'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "We're having a party and"},
            {type: 'descriptive', text: 'we hope you can join us!'},
          ],
          color: solidColor('#000000'),
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
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'May 19, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '7:00 pm'},
            ],
            {type: 'location', text: 'The Union Club and Bar'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffff'),
          },
          color: solidColor('#ffffff'),
          background: solidColor('#000000'),
          width: unitValue(100, '%'),
          textAlign: 'center',
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.6,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
          py: 1.5,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: "This is a special birthday, so let's party all night!"},
            {type: 'descriptiveText', text: "Please come in black or pink."},
            {type: 'contact', text: 'Call Adora at 123-456-7890 to confirm.'},
          ],
          color: solidColor('#000000'),
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
    },
  }
}