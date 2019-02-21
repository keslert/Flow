import React from 'react';
import ImageElement from '../Element/ImageElement';
import TextElement from '../Element/TextElement';
import BarElement from '../Element/BarElement';
import { getBackgroundStyle } from '../../core/utils/render-utils';

function Element({element, index}) {
  const c = element._computed;
  const style = {
    position: 'absolute',
    top: c.bb.t + 'px',
    left: c.bb.l + 'px',
    width: c.bb.w + 'px',
    height: c.bb.h + 'px',
    paddingTop: c.pt + 'px',
    paddingBottom: c.pb + 'px',
    paddingLeft: c.pl + 'px',
    paddingRight: c.pr + 'px',
    ...getBackgroundStyle(element.background),
    boxSizing: 'border-box',
    // background: '#fff',
  }

  const Component = getElement(element.type);
  return (
    <div 
      key={c.id}
      style={style}
      children={<Component element={element} />}
    />
  )

  
  
}

function getElement(type) {
  switch(type) {
    case 'logo':
    case 'image': return ImageElement
    case 'bar': return BarElement
    default: return TextElement
  }
}

export default Element;