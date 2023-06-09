import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function AppStoreMedIcon(props) {
  const { color, ...restProps } = props

  return (

    <svg
      width='48' height='48' viewBox='0 0 48 48' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='14' cy='34' r='8' fill={color} />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M26.7244 19.7276C27.4376 19.3062 28.3574 19.5426 28.7789 20.2558L40.2914 39.7371C40.7128 40.4503 40.4763 41.3701 39.7631 41.7916C39.0499 42.2131 38.1301 41.9766 37.7086 41.2634L26.1961 21.7821C25.7747 21.0689 26.0112 20.1491 26.7244 19.7276Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M18.7367 6.20897C19.4498 5.78741 20.3697 6.02378 20.7913 6.73693L25.2913 14.3494C25.7128 15.0626 25.4765 15.9824 24.7633 16.404C24.0502 16.8256 23.1303 16.5892 22.7087 15.876L18.2087 8.26355C17.7872 7.5504 18.0235 6.63054 18.7367 6.20897Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M11.5471 36.2105C12.2594 36.6334 12.494 37.5537 12.071 38.266L10.2898 41.266C9.86684 41.9784 8.94652 42.213 8.23419 41.79C7.52186 41.3671 7.28727 40.4468 7.71022 39.7344L9.49147 36.7344C9.91441 36.0221 10.8347 35.7875 11.5471 36.2105Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M29.2628 6.20869C29.9761 6.62998 30.2128 7.54975 29.7916 8.26306L15.6166 32.2631C15.1953 32.9764 14.2755 33.2131 13.5622 32.7918C12.8489 32.3705 12.6122 31.4507 13.0335 30.7374L27.2085 6.73741C27.6297 6.02411 28.5495 5.78739 29.2628 6.20869Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M32.175 31.5002C32.175 30.6718 32.8466 30.0002 33.675 30.0002H43.5C44.3284 30.0002 45 30.6718 45 31.5002C45 32.3287 44.3284 33.0002 43.5 33.0002H33.675C32.8466 33.0002 32.175 32.3287 32.175 31.5002Z'
        fill='#322D2D'
      />
      <path
        fillRule='evenodd' clipRule='evenodd' d='M3 31.5002C3 30.6718 3.67157 30.0002 4.5 30.0002H26.7188C27.5472 30.0002 28.2188 30.6718 28.2188 31.5002C28.2188 32.3287 27.5472 33.0002 26.7188 33.0002H4.5C3.67157 33.0002 3 32.3287 3 31.5002Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(AppStoreMedIcon)
