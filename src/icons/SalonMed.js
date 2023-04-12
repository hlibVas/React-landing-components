import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function PerecentMedIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48' height='48' viewBox='0 0 48 48' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='34' cy='34' r='8' fill='#F38921' />
      <path
        d='M9 26.3711V40.3644C9 40.7984 9.15804 41.2146 9.43934 41.5215C9.72065 41.8284 10.1022 42.0008 10.5 42.0008H37.5C37.8979 42.0008 38.2794 41.8284 38.5607 41.5215C38.842 41.2146 39 40.7984 39 40.3644V26.3714'
        stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M10.1315 6H37.8686C38.1945 6 38.5116 6.11584 38.7719 6.32997C39.0321 6.54411 39.2213 6.8449 39.3109 7.18682L42 17.4545H6L8.68917 7.18682C8.77872 6.8449 8.96793 6.54411 9.22816 6.32997C9.4884 6.11584 9.80549 6 10.1315 6Z'
        stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M18 17.4541V20.7268C18 22.4628 17.3679 24.1276 16.2427 25.3552C15.1174 26.5827 13.5913 27.2723 12 27.2723C10.4087 27.2723 8.88258 26.5827 7.75736 25.3552C6.63214 24.1276 6 22.4628 6 20.7268V17.4541'
        stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M30 17.4541V20.7268C30 22.4628 29.3679 24.1276 28.2426 25.3552C27.1174 26.5827 25.5913 27.2723 24 27.2723C22.4087 27.2723 20.8826 26.5827 19.7574 25.3552C18.6321 24.1276 18 22.4628 18 20.7268V17.4541'
        stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M42 17.4541V20.7268C42 22.4628 41.3679 24.1276 40.2427 25.3552C39.1174 26.5827 37.5913 27.2723 36 27.2723C34.4087 27.2723 32.8826 26.5827 31.7574 25.3552C30.6321 24.1276 30 22.4628 30 20.7268V17.4541'
        stroke={color} strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'
      />
    </svg>

  )
}

export default withDefaultColor('primary.dark')(PerecentMedIcon)
