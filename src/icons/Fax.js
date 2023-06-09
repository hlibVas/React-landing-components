import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function FaxIcon(props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='24' height='24' viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='17' cy='7' r='4' fill={color} />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M5.25 3.75C5.25 3.33579 5.58579 3 6 3H18C18.4142 3 18.75 3.33579 18.75 3.75V7.5C18.75 7.91421 18.4142 8.25 18 8.25C17.5858 8.25 17.25 7.91421 17.25 7.5V4.5H6.75V7.5C6.75 7.91421 6.41421 8.25 6 8.25C5.58579 8.25 5.25 7.91421 5.25 7.5V3.75Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M5.25 14.25C5.25 13.8358 5.58579 13.5 6 13.5H18C18.4142 13.5 18.75 13.8358 18.75 14.25V20.625C18.75 21.0392 18.4142 21.375 18 21.375H6C5.58579 21.375 5.25 21.0392 5.25 20.625V14.25ZM6.75 15V19.875H17.25V15H6.75Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M4.24687 8.25C3.71378 8.25 3.375 8.64371 3.375 9V15.75H6C6.41421 15.75 6.75 16.0858 6.75 16.5C6.75 16.9142 6.41421 17.25 6 17.25H2.625C2.21079 17.25 1.875 16.9142 1.875 16.5V9C1.875 7.70629 2.99872 6.75 4.24687 6.75H19.7531C21.0013 6.75 22.125 7.70629 22.125 9V16.5C22.125 16.9142 21.7892 17.25 21.375 17.25H18C17.5858 17.25 17.25 16.9142 17.25 16.5C17.25 16.0858 17.5858 15.75 18 15.75H20.625V9C20.625 8.64371 20.2862 8.25 19.7531 8.25H4.24687Z'
        fill='#322D2D'
      />
      <path
        d='M17.625 12C18.2463 12 18.75 11.4963 18.75 10.875C18.75 10.2537 18.2463 9.75 17.625 9.75C17.0037 9.75 16.5 10.2537 16.5 10.875C16.5 11.4963 17.0037 12 17.625 12Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(FaxIcon)
