import React from 'react'

function GeolocationIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='56' height='56' viewBox='0 0 56 56' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <g filter='url(#filter0_d_1204_7276)'>
        <circle cx='28' cy='24' r='16' fill='white' />
        <path d='M28 34V30.2963M18 24H21.7037M28 14V17.7037M38 24H34.2963M36.1481 24C36.1481 19.4999 32.5001 15.8519 28 15.8519C23.4999 15.8519 19.8519 19.4999 19.8519 24C19.8519 28.5001 23.4999 32.1481 28 32.1481C32.5001 32.1481 36.1481 28.5001 36.1481 24ZM30.963 24C30.963 22.3636 29.6364 21.037 28 21.037C26.3636 21.037 25.037 22.3636 25.037 24C25.037 25.6364 26.3636 26.963 28 26.963C29.6364 26.963 30.963 25.6364 30.963 24Z' stroke='#888888' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      </g>
      <defs>
        <filter id='filter0_d_1204_7276' x='0' y='0' width='56' height='56' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='6' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values='0 0 0 0 0.196078 0 0 0 0 0.176471 0 0 0 0 0.176471 0 0 0 0.11 0' />
          <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1204_7276' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1204_7276' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export default (GeolocationIcon)
