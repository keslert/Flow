import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';




const inputStyles = props => ({
  outline: 'none',
  borderRadius: '3px',
  border: 'none',
  fontSize: props.theme.fontSizes[1] + 'px',
  padding: '8px 10px',
  width: '100%',
  transition: 'border-color .15s',
  resize: 'none',
  background: props.theme.colors[props.bg],
  color: props.theme.colors[props.color],
  border: '1px solid hsla(222,23%,24%, 0.1)',
  opacity: props.disabled ? 0.2 : 1,
  '&:focus, &:hover': {
    borderColor: props.theme.colors.blue,
  },
  '&::placeholder': {
    color: props.theme.colors.gray,
  },
})

const defaultProps = {
  bg: 'white',
  color: 'dark',
}

export const Input = styled.input(inputStyles)
Input.defaultProps = defaultProps;
export const Textarea = styled.textarea(inputStyles);
Textarea.defaultProps = defaultProps;

function FormInput({label, hint, ...props}) {

  const Component = props.rows ? Textarea : Input

  return (
    <Box>
      <Text
        as="label"
        color="dark"
        fontSize={1}
        fontWeight="700"
        mb={1}
        style={{textTransform: 'uppercase'}}
        children={label}
      />
      <Box mb="2px">
        <Component {...props} />
      </Box>
      <Text
        color="gray"
        fontSize={0}
        style={{fontStyle: 'italic'}}
        children={hint}
      />
    </Box>
  )
}

export default FormInput;