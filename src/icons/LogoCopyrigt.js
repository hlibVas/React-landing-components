import React from 'react'

import withDefaultColor from 'hoc/withDefaultColor'

function LogoIcon (props) {
  return (
    <svg width='61' height='48' viewBox='0 0 61 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M51.8696 43.5363H51V43H53.3263V43.5363H52.4566V46H51.8696V43.5363Z' fill='#F38921' />
      <path d='M53.7954 43H54.552L55.3781 45.1075H55.4129L56.2391 43H57V46H56.4173V44.5209L56.4521 44.0223H56.4173L55.626 46H55.1694L54.3737 44.0223H54.3389L54.3737 44.5209V46H53.7954V43Z' fill='#F38921' />
      <path fillRule='evenodd' clipRule='evenodd' d='M51.418 11.3968C58.8503 13.5583 57.0555 21.2078 54.9357 27.2151C58.4517 19.9437 59.1193 11.3004 51.418 11.3968Z' fill='url(#paint0_linear_1467_676)' />
      <path d='M46.5371 31.9922C46.5611 31.8638 46.6874 31.7787 46.8188 31.8022C46.9502 31.8258 47.0371 31.9491 47.0131 32.0775C46.6056 34.2411 46.2411 35.918 45.8529 37.4172C45.4639 38.9194 45.0492 40.2517 44.542 41.722C44.4996 41.8458 44.3624 41.9127 44.2356 41.8712C44.1088 41.8299 44.0406 41.6957 44.0828 41.5719C44.584 40.1186 44.995 38.7984 45.3823 37.3024C45.7703 35.8037 46.1332 34.136 46.5369 31.9922H46.5371Z' fill='url(#paint1_linear_1467_676)' />
      <path d='M31.9296 33.9941C31.9333 33.8636 32.0444 33.7608 32.1782 33.7642C32.3119 33.7677 32.417 33.8765 32.4135 34.007C32.2863 38.01 31.8144 39.7329 30.7657 43.5623L30.5941 44.1884C30.5596 44.3148 30.4265 44.3899 30.2972 44.356C30.1679 44.3222 30.0909 44.1924 30.1255 44.066L30.2967 43.4399C31.3365 39.6439 31.8042 37.9358 31.9294 33.9941H31.9296Z' fill='url(#paint2_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M45.4656 4.51671C41.665 2.50827 35.6028 4.0584 32.3732 7.02841C22.9689 15.677 22.9698 39.1948 8.88881 40.738C8.68571 40.7601 13.6865 39.4864 16.4036 34.4536C19.3658 28.9672 20.1964 19.4391 23.3569 13.0544C31.0049 -2.39571 40.9441 1.3519 45.39 4.45654C45.4163 4.47499 45.4831 4.52616 45.4654 4.51671H45.4656Z' fill='url(#paint3_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M19.4344 10.9255C13.8793 24.4854 20.3215 36.4538 11.0234 40.3088C16.1195 38.7368 19.6981 33.5663 19.3373 27.2819C18.7268 16.6474 20.747 -2.26907 38.2524 1.94238C38.6535 2.03897 25.3797 -3.58797 19.4341 10.9255H19.4344Z' fill='url(#paint4_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M40.8281 1.47301C48.9315 -1.9673 52.5097 3.6419 47.783 10.5769C47.9206 10.8125 50.5789 10.2221 50.9957 9.41201C54.5969 2.41545 49.0332 -2.6264 40.8281 1.47278V1.47301Z' fill='url(#paint5_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M52.8553 4.60303C55.4147 5.69416 52.2425 9.60015 47.7461 10.4854C53.5609 10.1751 57.928 5.32737 52.8553 4.60303Z' fill='url(#paint6_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M47.2088 11.9424C57.651 20.09 52.948 41.4272 36.3242 48C55.4752 42.498 62.9192 14.2826 48.7705 12.329L47.2088 11.9426V11.9424Z' fill='url(#paint7_linear_1467_676)' />
      <path d='M27.0847 25.9606C27.0204 25.8465 27.0628 25.7029 27.1797 25.64C27.2966 25.577 27.4437 25.6185 27.5082 25.7326C28.1143 26.8028 28.6069 27.7095 29.0549 28.535C30.7519 31.6604 31.8241 33.6348 34.3987 36.0434C35.2533 36.8429 35.9401 37.4764 36.5948 37.9052C37.2286 38.3202 37.8397 38.5473 38.5652 38.5558C39.4818 38.5666 40.2548 38.4431 41.0472 38.0396C41.8534 37.629 42.6886 36.9277 43.7207 35.7864C45.5848 33.7249 46.7984 31.7522 47.7104 29.6617C48.6242 27.5672 49.2395 25.3442 49.9042 22.7931C49.9372 22.6663 50.0693 22.5895 50.1993 22.6215C50.3293 22.6538 50.4077 22.7829 50.3747 22.9097C49.7057 25.4777 49.0856 27.7173 48.1565 29.847C47.2253 31.9806 45.9867 33.9944 44.0834 36.0994C43.0081 37.2883 42.1296 38.0233 41.2713 38.4604C40.3994 38.9044 39.5561 39.0402 38.5597 39.0284C37.7288 39.0185 37.0368 38.7637 36.3256 38.2981C35.6356 37.8462 34.9343 37.1995 34.0631 36.3846C31.4326 33.9238 30.3459 31.923 28.6263 28.7559C28.1622 27.9015 27.6525 26.9623 27.0852 25.9609L27.0847 25.9606Z' fill='url(#paint8_linear_1467_676)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M5.63481 36.1655C-5.28227 44.0381 20.628 57.5875 30.4701 36.3532C32.9518 30.9987 35.6512 5.5246 45.257 9.13896C46.8419 9.73536 46.4996 10.9272 46.4857 11.9232C50.8369 4.12431 34.3452 2.00406 29.1694 16.6893C24.4077 30.1997 23.2831 35.6839 19.2395 39.3289C10.5607 47.1524 1.44641 39.6014 5.63504 36.1655H5.63481ZM10.1605 45.8165C23.7721 45.2646 27.6656 37.9199 29.6035 32.0158C28.7549 39.3446 22.212 47.3821 10.1605 45.8165Z' fill='url(#paint9_linear_1467_676)' />
      <defs>
        <linearGradient id='paint0_linear_1467_676' x1='50.1016' y1='22.3812' x2='57.6955' y2='14.7871' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint1_linear_1467_676' x1='42.3561' y1='40.029' x2='48.732' y2='33.653' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint2_linear_1467_676' x1='28.1117' y1='42.218' x2='34.4197' y2='35.9103' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint3_linear_1467_676' x1='14.1598' y1='43.7846' x2='39.0285' y2='0.710775' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint4_linear_1467_676' x1='9.63192' y1='39.5054' x2='33.0549' y2='-1.06451' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint5_linear_1467_676' x1='46.4703' y1='10.6293' x2='46.4703' y2='0.000107703' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint6_linear_1467_676' x1='51.4179' y1='10.4854' x2='51.4179' y2='4.60303' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint7_linear_1467_676' x1='36.3242' y1='29.9713' x2='56.1177' y2='29.9713' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint8_linear_1467_676' x1='27.0547' y1='30.8215' x2='50.3819' y2='30.8215' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
        <linearGradient id='paint9_linear_1467_676' x1='7.92796' y1='47.3353' x2='47.1478' y2='8.11537' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#34368E' />
          <stop offset='0.19' stopColor='#34368E' />
          <stop offset='0.4' stopColor='#009C53' />
          <stop offset='0.41' stopColor='#12A14F' />
          <stop offset='0.45' stopColor='#57B642' />
          <stop offset='0.5' stopColor='#91C738' />
          <stop offset='0.54' stopColor='#BED42F' />
          <stop offset='0.57' stopColor='#DFDE29' />
          <stop offset='0.6' stopColor='#F2E326' />
          <stop offset='0.62' stopColor='#FAE625' />
          <stop offset='0.84' stopColor='#E92D2F' />
          <stop offset='1' stopColor='#D12229' />
        </linearGradient>
      </defs>
    </svg>

  )
}

export default withDefaultColor('primary.contrastText')(LogoIcon)
