import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function ShopMedIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48' height='48' viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle
        cx='34' cy='14' r='8'
        fill={color}
      />
      <path
        d='M14 14V10C14 6.6863 16.6863 4 20 4C21.5368 4 22.9384 4.57772 24 5.5278C25.0616 4.5777 26.4634 4 28 4C31.3138 4 34 6.6863 34 10V14H37C38.6568 14 40 15.3431 40 17V37.01C40 40.8704 36.8704 44 33.01 44H16C11.5817 44 8 40.4182 8 36V17C8 15.3431 9.34314 14 11 14H14ZM27.27 41C26.482 39.8686 26.02 38.4932 26.02 37.01V17H11V36C11 38.7614 13.2386 41 16 41H27.27ZM23 14V10C23 8.34314 21.6568 7 20 7C18.3431 7 17 8.34314 17 10V14H23ZM26 14H31V10C31 8.34314 29.6568 7 28 7C27.07 7 26.239 7.42312 25.6888 8.08736C25.8906 8.68806 26 9.33126 26 10V14ZM29.02 37.01C29.02 39.2136 30.8064 41 33.01 41C35.2136 41 37 39.2136 37 37.01V17H29.02V37.01Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(ShopMedIcon)
