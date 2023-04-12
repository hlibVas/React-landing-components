import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function FaceBook (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='24' height='24' viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M15.9103 13.1705L16.3767 10.1396H13.4589V8.17266C13.4589 7.34345 13.8665 6.53519 15.1734 6.53519H16.5V3.95479C16.5 3.95479 15.296 3.75 14.145 3.75C11.7419 3.75 10.1712 5.20158 10.1712 7.82949V10.1396H7.5V13.1705H10.1712V20.4976C10.7069 20.5814 11.2558 20.625 11.8151 20.625C12.3743 20.625 12.9233 20.5814 13.4589 20.4976V13.1705H15.9103Z'
        fill={color}
      />
    </svg>

  )
}

export default withDefaultColor('primary.contrastText')(FaceBook)
