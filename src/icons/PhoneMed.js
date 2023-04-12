import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function PhoneMedIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48' height='48' viewBox='0 0 48 48' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='34' cy='14' r='8' fill={color} />
      <path
        d='M31.5 4C33.9852 4 36 6.01472 36 8.5V39.5C36 41.9852 33.9852 44 31.5 44H16.5C14.0147 44 12 41.9852 12 39.5V8.5C12 6.01472 14.0147 4 16.5 4H31.5ZM31.5 7H16.5C15.6716 7 15 7.67158 15 8.5V39.5C15 40.3284 15.6716 41 16.5 41H31.5C32.3284 41 33 40.3284 33 39.5V8.5C33 7.67158 32.3284 7 31.5 7ZM26.4978 35C27.3262 34.9988 27.9988 35.6694 28 36.4978C28.0012 37.3262 27.3306 37.9988 26.5022 38L21.5022 38.0076C20.6738 38.0088 20.0012 37.3382 20 36.5098C19.9988 35.6814 20.6694 35.0088 21.4978 35.0076L26.4978 35Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(PhoneMedIcon)
