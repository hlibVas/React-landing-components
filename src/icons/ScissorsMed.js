import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function PerecentMedIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48' height='48' viewBox='0 0 48 48' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='14' cy='14' r='8' fill={color} />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M35.7631 6.30876L27.8763 18.6321L26.0405 15.9351L33.2363 4.6916C33.6829 3.99384 34.6107 3.79022 35.3083 4.23678C36.0061 4.68334 36.2097 5.611 35.7631 6.30876ZM24.28 18.6857L24.2818 18.6829L26.1176 21.3799L26.115 21.3839L31.0074 28.5787C31.9318 28.2055 32.942 28.0001 34 28.0001C38.4182 28.0001 42 31.5819 42 36.0001C42 40.4185 38.4182 44.0001 34 44.0001C29.5818 44.0001 26 40.4185 26 36.0001C26 33.7197 26.9542 31.6619 28.4852 30.2047L24.356 24.1323L20.0848 30.8061C21.279 32.2037 22 34.0177 22 36.0001C22 40.4185 18.4183 44.0001 14 44.0001C9.58172 44.0001 6 40.4185 6 36.0001C6 31.5819 9.58172 28.0001 14 28.0001C15.3468 28.0001 16.6159 28.3329 17.7296 28.9209L22.5212 21.4341L12.2596 6.34369C11.7937 5.65863 11.9714 4.72567 12.6565 4.25983C13.3415 3.79399 14.2745 3.97169 14.7403 4.65675L24.28 18.6857ZM14 31.0001C11.2386 31.0001 9 33.2387 9 36.0001C9 38.7615 11.2386 41.0001 14 41.0001C16.7614 41.0001 19 38.7615 19 36.0001C19 33.2387 16.7614 31.0001 14 31.0001ZM34 31.0001C31.2386 31.0001 29 33.2387 29 36.0001C29 38.7615 31.2386 41.0001 34 41.0001C36.7614 41.0001 39 38.7615 39 36.0001C39 33.2387 36.7614 31.0001 34 31.0001Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(PerecentMedIcon)