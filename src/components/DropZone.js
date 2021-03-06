import React from 'react';
import { DropTarget } from 'react-dnd'
import { Box } from 'rebass';

function DropZone({
  item, 
  isAfter, 
  highlight, 
  draggedItem,
  connectDropTarget,
}) {

  const height = (item._computed.mb) || 40;
  return connectDropTarget(
    <div 
      style={{
        position: 'absolute',
        left: item._computed.bb.l,
        width: item._computed.bb.w,
        height: height,
        pointerEvents: draggedItem ? 'all' : 'none',
        top: (item._computed.bb.t + (isAfter
          ? item._computed.bb.h
          : -height)
        ),
      }}
      children={
        <Box 
          bg={highlight ? "blue" : null}
          width={1} 
          style={{height}}
        />
      }
    />
  )
}

const target = {
  drop(props, monitor) {
    props.onDrop(props.item, monitor.getItem(), props.isAfter);
  },
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return props.item.kind === item.kind
      && props.item._root.id === item._root.id
      && item !== props.item
      && item._computed.prev !== props.item
  },
}

function collectTarget(connect, monitor) {
  const highlight = monitor.isOver() && monitor.canDrop();
  return {
    connectDropTarget: connect.dropTarget(),
    highlight,
    draggedItem: monitor.getItem(),
  }
}

export default DropTarget('selectable', target, collectTarget)(DropZone);