import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function CombIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='169' height='168' viewBox='0 0 169 168' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M10.2116 37.7269L46.923 0.999995L10.2116 37.7269ZM101.249 127.677L137.398 91.5129L101.249 127.677ZM116.332 142.741L152.481 106.577L116.332 142.741ZM86.1909 112.562L122.34 76.3975L86.1909 112.562ZM40.9664 67.2925L77.1153 31.1283L40.9664 67.2925ZM56.0497 82.3824L92.1986 46.2181L56.0497 82.3824ZM25.9086 52.2028L62.0575 16.0386L25.9086 52.2028ZM70.5706 98.0348L107.282 61.3078L70.5706 98.0348ZM129.728 159.519L167.59 121.641L129.728 159.519ZM97.3883 160.517L8.08975 71.1801C-0.576791 62.5355 -0.576791 48.4943 8.08975 39.8241L10.2372 37.6758L130.878 158.368L128.731 160.517C120.064 169.161 106.055 169.161 97.3883 160.517Z'
        stroke={color} strokeWidth='1.7' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('background.icons.gray')(CombIcon)
