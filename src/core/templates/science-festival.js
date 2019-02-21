import { solidColor, unitValue } from '.'

export default {
  title: "The Science Festival",
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-blue-and-yellow-space-themed-science-flyer-MAC7mqPbQK8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  px: 48,
  py: 48,
  border: {
    top: 120,
    bottom: 120,
    color: "#1f2534"
  },
  background: {
    color: "#1f2534"
  },
  content: {
    body: {
      width: unitValue(100, '%'), 
      alignX: "center",
      alignY: "center",
      textAlign: "center",
      bleed: {
        all: true
      },
      mb: 1.5,
      elements: [
        {
          type: "small",
          lines: [
            
            {
              type: "host",
              text: "University of El Dorado"
            }
            
          ],
          divider: {
            type: "line",
            size: 1.5,
            color: {
              type: "solid",
              color: "#fff"
            }
          },
          color: {
            type: "solid",
            color: "#fff"
          },
          font: {
            family: "Aileron",
            weight: 700,
            size: 0.6,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4,
            letterSpacing: 0.1
          }
        },
        {
          type: "dominant",
          lines: [
            {
              type: "eventName",
              text: "The Science"
            },
            {
              type: "eventName",
              text: "Festival 2020"
            }
          ],
          color: {
            type: "solid",
            color: "#e7d244"
          },
          mb: 0.75,
          font: {
            family: "Norwester",
            fitToWidth: false,
            weight: 400,
            size: 0.7,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4
          }
        },
        {
          type: "bridge",
          lines: [
            
            {
              type: "date",
              text: "Get ready to learn, be amazed, and explore!",
              format: "MMM D, YYYY"
            }
            
          ],
          color: {
            type: "solid",
            color: "#fff"
          },
          font: {
            family: "Aileron",
            fitToWidth: false,
            weight: 400,
            size: 0.8,
            style: "italic",
            transform: "normal",
            lineHeight: 1.4
          }
        },
        {
          type: "bar",
          background: {
            color: "#e7d244"
          },
          height: unitValue(5, 'px'),
          width: unitValue(66, '%'),
        },
        {
          type: "heading",
          mb: 1,
          lines: [
            [
              {
                type: "date",
                text: "September 2-4, 2020",
                format: "MMMM D, YYYY"
              },
              {
                type: "location",
                text: "University of"
              }
            ],
            {
              type: "location",
              text: "El Dorado Main Pavilion"
            }
          ],
          divider: {
            type: "line",
            size: 1.5,
            color: {
              type: "solid",
              color: "#e7d244"
            }
          },
          color: {
            type: "solid",
            color: "#e7d244"
          },
          font: {
            family: "Aileron",
            weight: 700,
            size: 1,
            style: "normal",
            transform: "uppercase",
            lineHeight: 1.4,
            letterSpacing: 0.2
          }
        },
        {
          type: "paragraph",
          lines: [
            {
              type: "descriptiveText",
              text: "Check out awesome experiments and award-winning projects"
            },
            {
              type: "descriptiveText",
              text: "from all over the country, plus listen to cool lectures!"
            }
          ],
          color: {
            type: "solid",
            color: "#fff"
          },
          font: {
            family: "Aileron",
            fitToWidth: false,
            weight: 400,
            size: 1.2,
            style: "normal",
            transform: "normal",
            lineHeight: 1.4
          }
        }
      ]
    }
  }
}