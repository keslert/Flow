import React from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';

const Button = styled(Flex)(props => ({
  border: `1px solid ${props.theme.colors[props.bg === 'nearwhite' ? 'lightgray' : props.bg + '_darken']}`,
  '&:hover': {
    background: props.theme.colors[props.bg + '_darken'],
  },
  width: '60px',
  height: '60px',
  borderRadius: '2px',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexShrink: 0,
  userSelect: 'none',
  'svg': {
    fill: 'currentColor',
  },
  padding: '8px 0'

}))

Button.defaultProps = {
  bg: 'nearwhite',
  color: 'dark',
}

function CanvasButton({SvgComponent, label, ...props}) {
  return (
    <Button {...props}>
      <Flex flex={1} alignItems="center">
        {SvgComponent}
      </Flex>
      <Text 
        mt="6px"
        fontWeight="900"
        fontSize="8px" 
        style={{textTransform: 'uppercase'}}
        children={label}
      />
    </Button>
  )
}

export default CanvasButton;