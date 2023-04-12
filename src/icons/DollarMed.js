import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function DollarMedIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48' height='48' viewBox='0 0 48 48'
      fill='none' xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
      <circle cx='14' cy='34' r='8' fill={color} />
      <path
        d='M31.8541 29.5204C31.8541 31.5124 31.2181 33.0964 29.9461 34.2724C28.6741 35.4484 27.0901 36.1804 25.1941 36.4684V39.6004H22.6741V36.5044C20.9941 36.3124 19.4221 35.6524 17.9581 34.5244C16.5181 33.3724 15.5581 31.8484 15.0781 29.9524L17.8141 28.8724C18.1501 30.0724 18.7501 31.1044 19.6141 31.9684C20.5021 32.8324 21.5221 33.3724 22.6741 33.5884V24.5524L22.5661 24.5164C20.4061 23.6524 18.7741 22.6564 17.6701 21.5284C16.5661 20.4004 16.0141 18.9964 16.0141 17.3164C16.0141 16.2604 16.2781 15.2644 16.8061 14.3284C17.3581 13.3684 18.1381 12.5764 19.1461 11.9524C20.1541 11.3284 21.3301 10.9564 22.6741 10.8364V7.77637H25.1941V10.9084C26.8741 11.1724 28.2181 11.7844 29.2261 12.7444C30.2581 13.6804 30.9541 14.6884 31.3141 15.7684L28.5781 16.9204C28.3861 16.2484 28.0021 15.6364 27.4261 15.0844C26.8741 14.5084 26.1301 14.1124 25.1941 13.8964V22.3564C27.3061 23.2444 28.9381 24.2164 30.0901 25.2724C31.2661 26.3284 31.8541 27.7444 31.8541 29.5204ZM19.0741 17.3164C19.0741 18.2044 19.3621 18.9604 19.9381 19.5844C20.5381 20.2084 21.4501 20.7964 22.6741 21.3484V13.7884C21.5941 13.9564 20.7181 14.3644 20.0461 15.0124C19.3981 15.6364 19.0741 16.4044 19.0741 17.3164ZM25.1941 33.5164C26.2981 33.3004 27.1741 32.8564 27.8221 32.1844C28.4941 31.5124 28.8301 30.6484 28.8301 29.5924C28.8301 28.7044 28.5301 27.9604 27.9301 27.3604C27.3301 26.7364 26.4181 26.1484 25.1941 25.5964V33.5164Z'
        fill='#322D2D'
      />
    </svg>

  )
}

export default withDefaultColor('primary.main')(DollarMedIcon)