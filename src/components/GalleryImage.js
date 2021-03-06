import React from "react";
import { Flex, Box } from 'rebass';
import styled from 'styled-components';

const Image = styled(Box)`
  .credit {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 9px;
    padding: 4px;
    background: rgba(0,0,0,.5);
    text-align: right;
    color: #ffffff;
    a {
      color: currentColor;
      text-decoration: none;
    }
  }

  &:hover {
    // outline: 2px solid ${props => props.theme.colors.blue};
    .credit {
      display: block;
    }
  }
  backgroundColor: ${props => props.theme.colors.nearwhite};
  cursor: pointer;
  overflow: hidden;
  position: relative;
`

const GalleryImage = ({
  index,
  onClick,
  photo,
  margin,
}) => {
  return (
    <Image
      style={{ margin, height: photo.height, width: photo.width }}
    >
      <img 
        onClick={e => onClick(e, { index, photo })}
        {...photo}
      />
      <Flex className="credit" flexWrap="wrap">
        <a 
          className="author"
          href={photo.meta.photographer_url}
          target="_blank"
          children={photo.meta.photographer}
        />
        <span>&nbsp;@&nbsp;</span>
        <a 
          className="author"
          href="https://pexels.com"
          target="_blank"
          children="Pexels"
        />
      </Flex>
      
    </Image>
  );
};

export default GalleryImage;
