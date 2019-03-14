import { Flex } from 'rebass'
import styled from 'styled-components';

const NavItem = styled(Flex)(props => ({
  '&:before': {
    content: 'L',
  },

  color: props.theme.colors.white,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: props.theme.fontSizes[1] + 'px',
  letterSpacing: '.05em',
  textTransform: 'uppercase',
  transition: 'background .3s'
}))

NavItem.defaultProps = {
  p: "18px",
  flex: 1,
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'dark',
}

export default NavItem;