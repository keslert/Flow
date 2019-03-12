import React from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import SearchInput from './SearchInput';
import SelectionTree from './SelectionTree';

const bg = "hsla(222, 23%, 22%, 1)"
function Sidebar(props) {

  return (
    <Flex 
      width={260}
      bg="off_dark"
      color="off_dark"
      px={2}
      flexDirection="column"
      style={{position: 'relative'}}
    >
      <Box style={{position: 'absolute', right: "-16px", top: '0'}}>
        <TabSvg fill="currentColor" size={100} />
      </Box>

      <Flex>
        <Box>AI Actions</Box>
        <Box>Manual Control</Box>
      </Flex>

      <Box flex={1} >
        <SearchInput
          placeholder="Search Photos"
          hasBackButton={true}
          value={'Cats'}
          onChange={e => null}
          onSubmit={e => null}
        />
      </Box>
      <Box mx={-2} bg="dark">
        <SelectionTree
          flyer={props.flyer}
        />
      
      </Box>
    </Flex>
  )
}

export default Sidebar;