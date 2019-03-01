import _ from 'lodash';

export function getBackgroundStyle(bg) {
  if(!bg) return null;

  const background = _.filter([
    bg.img && `url(${bg.img.src}) no-repeat`,
    bg.color,
  ]).join(',');

  const c = bg._computed || {};
  return {
    background,
    backgroundSize: `${c.w}px ${c.h}px`,
    backgroundPositionX: `${c.x}px`,
    backgroundPositionY: `${c.y}px`,
    filter: bg.img && _.map(bg.img.filters, (v, k) => `${k}(${v})`).join(' '),
    backgroundBlendMode: bg.backgroundBlendMode,
    borderRadius: bg.borderRadius ? bg.borderRadius + 'px' : null,
  };
}

export function getColorStyle(c) {
  if(!c) return null;
  switch(c.type) {
    default: return c.color
  }
}

export function textAlignToFlexAlign(align) {
  switch(align) {
    case 'top':
    case 'left': return 'flex-start';
    case 'bottom':
    case 'right' : return 'flex-end';
    default: return 'center';
  }
}


export function getUnitStyle(u) {
  if(!u) return null;
  return u.value + u.unit;
}

export function getWidth(width, {ml, mr}) {
  return `calc(${getUnitStyle(width)} - ${ml + mr}px)`
}

export function getBorderStyles(border) {
  if(!border) return {};

  const color = border.color || 'transparent';

  return {
    borderTop: border.top ? `${border.top}px solid ${color}` : null,
    borderBottom: border.bottom ? `${border.bottom}px solid ${color}` : null,
    borderLeft: border.left ? `${border.left}px solid ${color}` : null,
    borderRight: border.right ? `${border.right}px solid ${color}` : null,
  };
}