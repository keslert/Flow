import React from 'react';

export default ({fill='currentColor', size}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31 28' width={size} height={size * .9}>
    <path d='M21.8421 1C19.3466 1 17.0266 2.20797 15.4996 4.19804C13.9735 2.20664 11.6539 1.00044 9.15706 1.00044C4.65937 1 1 4.8582 1 9.60081C1 12.4298 2.31077 14.4142 3.36446 16.0091C6.42668 20.6411 14.1258 26.4054 14.4518 26.6485C14.7508 26.8747 15.1195 26.9984 15.4995 27C15.8668 27 16.234 26.8824 16.5473 26.6485C16.8738 26.4054 24.5733 20.6415 27.6347 16.0091C28.6888 14.4147 30 12.4298 30 9.60081C29.9991 4.85817 26.3398 1 21.8421 1H21.8421Z'
    fill={fill} />
  </svg>
)