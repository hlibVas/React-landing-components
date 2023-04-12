import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function SprayIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='106' height='198' viewBox='0 0 106 198' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M63.0128 25.7533C63.0128 25.7533 60.5444 44.1197 75.758 44.1197M83.9188 1.22363V19.0949H53.391V19.6147C53.391 27.7088 46.7162 34.2434 38.5049 34.2434H1V12.9316C1 12.9316 10.4203 8.94641 14.0978 1.22363H83.9188ZM1 185.357V78.5503C1 62.1147 7.34741 46.2732 18.7576 34.2682C18.7576 34.2682 29.6891 34.4167 38.5553 34.4167C38.5553 69.3425 30.1173 92.7335 67.2948 100.308C106.412 108.278 105.404 150.902 104.85 185.531C104.749 191.471 99.8376 196.224 93.7925 196.224H12.0576C5.93688 196.224 1 191.347 1 185.357Z'
        stroke={color} strokeWidth='1.7' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('background.icons.gray')(SprayIcon)
