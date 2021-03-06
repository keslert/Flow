import React, { useContext } from 'react';
import { Box, Flex } from 'rebass';
import TabSvg from '../svg/tab.svg';
import HistorySvg from '../svg/history.svg';
import EditSvg from '../svg/edit.svg';
import SelectionTree from './SelectionTree';
import Tabs from './Tabs';
import ActionList from './ActionList';
import EditPanel from './EditPanel';
import { DispatchContext } from '../containers/Queue';
import Timeline from '../containers/Timeline';
import styled from 'styled-components';
import ChevronSvg from '../svg/chevron.svg';


function Sidebar(props) {
  const rootDispatch = useContext(DispatchContext);

  const showEditPanel = props.open && props.panel === 'edit';
  const showHistoryPanel = props.open && props.panel === 'history';

  return (
    <Flex 
      width={props.open ? 280 : 0}
      flexDirection="column"
      bg="off_dark"
      color="off_dark"
      style={{position: 'relative', borderTop: '1px solid #262d3c', height: '100%'}}
    >
      <Box 
        style={tabStyle}
        onClick={() => rootDispatch({type: 'TOGGLE_SIDEBAR', open: false})}
        children={<TabSvg size={90} />}
      />
      <Box
        color="white"
        style={{...chevronStyle, transform: props.open ? 'rotateY(180deg)' : null}}
        children={<ChevronSvg size={10} />}
      />

      {props.open && 
        <Flex bg="dark">
          <Tab
            onClick={() => rootDispatch({type: 'SET_SIDEBAR_PANEL', panel: 'history'})}
            selected={showHistoryPanel}
            children={<HistorySvg size={20} />}
          />
          <Tab
            onClick={() => rootDispatch({type: 'SET_SIDEBAR_PANEL', panel: 'edit'})}
            selected={showEditPanel}
            children={<EditSvg size={18} />}
          />
        </Flex>
      }

      {showEditPanel && 
        <Flex flexDirection="column" flex={1}>
          <Box px={16} flex={1} pt={3} style={scrollStyle}>
            <EditPanel 
              selection={props.selection}
            />
          </Box>
          {props.selection && 
            <Box bg="dark">
              <SelectionTree
                flyer={props.selection._root}
              />
            </Box>
          }
        </Flex>
      }

      {showHistoryPanel && 
        <Box px={16}>
          <Timeline
            size={{
              width: props.size.width,
              height: props.size.height - 44,
            }}
            flyers={props.history}
            selected={props.secondary}
          />
        </Box>
      }
    </Flex>
  )
}

export default Sidebar;

const tabStyle = {position: 'absolute', right: "-16px", top: '40px', cursor: 'pointer', zIndex: 9999}
const chevronStyle = {position: 'absolute', right: "-10px", top: '75px', pointerEvents: 'none', zIndex: 9999}
const scrollStyle = {overflowY: 'auto'};


const Tab = styled(Flex)(props => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '44px',
  width: '44px',
  background: props.selected ? props.theme.colors.off_dark : props.theme.colors.dark,
  color: props.selected ? props.theme.colors.white : props.theme.colors.lightgray,
  cursor: 'pointer',
  '&:hover': {
    background: props.selected ? null : props.theme.colors.off_dark_darken,
  }
}))