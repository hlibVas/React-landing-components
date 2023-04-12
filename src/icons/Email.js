import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function EmailIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='24' height='24' viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='7' cy='17' r='4' fill={color} />
      <path
        d='M15.75 12.0001C15.75 14.0712 14.0711 15.7501 12 15.7501C9.92894 15.7501 8.25001 14.0712 8.25001 12.0001C8.25001 9.92902 9.92894 8.25009 12 8.25009C14.0711 8.25009 15.75 9.92902 15.75 12.0001ZM15.75 12.0001C15.75 14.072 16.5 15.7501 18.375 15.7501C20.25 15.7501 21 14.072 21 12.0001C20.9995 9.99488 20.3294 8.04726 19.096 6.46627C17.8626 4.88527 16.1365 3.76145 14.1917 3.27314C12.2469 2.78483 10.1947 2.95999 8.3607 3.77084C6.52674 4.58168 5.0161 5.98176 4.06846 7.74891C3.12083 9.51607 2.79048 11.5491 3.12984 13.5254C3.4692 15.5016 4.45883 17.308 5.94169 18.6578C7.42456 20.0076 9.31573 20.8235 11.3151 20.9761C13.3145 21.1287 15.3076 20.6092 16.9781 19.5001M15.75 12.0001V8.25009'
        stroke='#322D2D'
        strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(EmailIcon)
