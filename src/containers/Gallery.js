import React from 'react';
import Frame from '../components/Frame';
import { Flex, Box } from 'rebass';
// import { templates as flyers } from '../core/templates';
import { 
  bodyHeaderTests, 
  bodyFooterTests, 
  bodyHeaderFooterTests,
  bodyTests, 
} from '../core/templates/test-flyers';
import { computeFlyer } from '../core/producer';
import _ from 'lodash';

const flyers = [
  // ...bodyTests,
  // ...bodyHeaderTests,
  // ...bodyFooterTests,
  ...bodyHeaderFooterTests,
]

_.forEach(flyers, flyer => computeFlyer(flyer));

function Gallery() {

  const frameWidth = 612;
  const frameHeight = 856;
  const scale = 0.55;

  return (
    <Flex flexWrap="wrap" p={2}>
      {_.map(flyers, flyer => (
        <Box p={2} key={flyer.title}>
          <Frame scale={scale} width={frameWidth} height={frameHeight} flyer={flyer} />
        </Box>
      ))}
    </Flex>
  )
}

export default Gallery;