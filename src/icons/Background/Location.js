import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function LikeIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='141'
      height='180' viewBox='0 0 141 180' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M70.5016 96.7691C85.6342 96.7691 97.9016 84.6463 97.9016 69.6922C97.9016 54.738 85.6342 42.6152 70.5016 42.6152C55.369 42.6152 43.1016 54.738 43.1016 69.6922C43.1016 84.6463 55.369 96.7691 70.5016 96.7691Z'
        stroke={color} strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M139 69.6923C139 130.615 70.5 178 70.5 178C70.5 178 2 130.615 2 69.6923C2 51.7392 9.21694 34.5214 22.0632 21.8266C34.9094 9.13185 52.3327 2 70.5 2C88.6673 2 106.091 9.13185 118.937 21.8266C131.783 34.5214 139 51.7392 139 69.6923Z'
        stroke={color} strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('background.icons.gray')(LikeIcon)
