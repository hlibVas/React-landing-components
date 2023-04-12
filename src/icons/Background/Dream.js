import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function DreamIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='140' height='90' viewBox='0 0 140 90' fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <path
        d='M2.66021 61.7695L29.6823 23.5465H3.7803L3.7803 17.876H36.5429V24.1065L9.52075 62.3296H36.8229V68H2.66021L2.66021 61.7695Z'
        fill={color}
      />
      <path
        d='M55.276 64.1133L73.912 37.7526H56.0485V33.8419H78.6434V38.1388L60.0074 64.4995H78.8365V68.4102H55.276V64.1133Z'
        fill={color}
      />
      <path
        d='M92.6514 67.918L105.697 49.4655H93.1922V46.728H109.009V49.7358L95.9634 68.1883H109.144V70.9258H92.6514V67.918Z'
        fill={color}
      />
      <path
        d='M124.939 69.0662L133.288 57.2566H125.285V55.5046H135.408V57.4296L127.059 69.2392H135.494V70.9912H124.939V69.0662Z'
        fill={color}
      />
    </svg>

  )
}

export default withDefaultColor('background.icons.gray')(DreamIcon)
