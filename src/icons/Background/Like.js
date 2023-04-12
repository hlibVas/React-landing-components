import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function LikeIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='124' height='111' viewBox='0 0 124 111' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M34.1909 48.3913H5.74156C4.48402 48.3913 3.27799 48.8906 2.38877 49.7794C1.49956 50.6681 1 51.8735 1 53.1304V105.261C1 106.518 1.49956 107.723 2.38877 108.612C3.27799 109.501 4.48402 110 5.74156 110H34.1909M34.1909 48.3913V110M34.1909 48.3913L57.8988 1C62.9289 1 67.7531 2.9972 71.3099 6.55224C74.8668 10.1073 76.865 14.9289 76.865 19.9565V34.1739H113.553C114.897 34.1706 116.227 34.4549 117.453 35.0078C118.678 35.5607 119.772 36.3693 120.659 37.3793C121.546 38.3893 122.206 39.5774 122.596 40.8637C122.985 42.15 123.095 43.5048 122.917 44.837L115.805 101.707C115.517 103.989 114.409 106.09 112.685 107.616C110.962 109.142 108.743 109.989 106.44 110H34.1909'
        stroke={color} strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('background.icons.gray')(LikeIcon)
