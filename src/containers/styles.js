import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ breakpoints, palette, spacing, typography }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      // height: '100%',
      // position: 'relative',
      overflow: 'hidden'
    },
    content: {
      flex: '1 0 auto',
      minHeight: 'calc((var(--vh, 1vh) * 100) - 336px )',
      display: 'flex',
      justifyContent: 'center',
      [breakpoints.down('xs')]: {
        minHeight: 'calc((var(--vh, 1vh) * 100) - 560px )'
      }
    },
    footer: {
      flex: '0 0 auto'
    },
    backgroundMobile: {
      position: 'absolute',
      zIndex: -1,
      width: '100vw',
      height: 5500,
      background: 'linear-gradient(179.73deg, #FFFFFF 0.36%, #DEF4FC 20.14%, #FFFFFF 39.69%, #EDFAFF 54.9%, #FFFFFF 100%);',
      opacity: 0.5
    },
    background: {
      position: 'absolute',
      width: '90vw',
      left: -365,
      zIndex: -1,
      height: 5000,
      overflowY: 'clip'
    },
    backgroundSalons: {
      height: 3600,
      [breakpoints.down('xs')]: {
        height: 4300
      }
    },
    backgroundClients: {
      height: 1800
    },
    backgroundContact: {
      height: 860,
      [breakpoints.down('xs')]: {
        height: 1300
      }
    },
    backgroundSalonReg: {
      height: 1750
    },
    backgroundSalonRegSales: {
      height: 1874
    },
    backgroundSucces: {
      height: 860,
      minHeight: 'calc((var(--vh, 1vh) * 100) - px )'
    },

    background_0: {
      position: 'absolute',
      width: 1139,
      height: 1139,
      left: 'calc(50% - 1139px/2 - 391.5px)',
      top: 489,
      background: '#DEF4FC',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    background_1: {
      position: 'absolute',
      width: 944,
      height: 944,
      left: 'calc(50% - 944px/2 + 376px)',
      top: -241,
      background: '#B9E8F9',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    background_2: {
      position: 'absolute',
      width: 807,
      height: 807,
      left: 'calc(50% - 807px/2 - 484.5px)',
      top: 1117,
      background: '#DEF4FC',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    background_3: {
      position: 'absolute',
      width: 1041,
      height: 1041,
      left: 'calc(50% - 1041px/2 + 394.5px)',
      top: 2037,
      background: '#B9E8F9',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    background_4: {
      position: 'absolute',
      width: 1139,
      height: 1139,
      left: 'calc(50% - 1139px/2 - 372.5px)',
      top: 3403,
      background: '#DEF4FC',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    background_5: {
      position: 'absolute',
      width: 1131,
      height: 945,
      left: 'calc(50% - 1131px/2 + 386.5px)',
      top: 4284,
      background: '#B9E8F9',
      opacity: 0.5,
      filter: 'blur(500px)'
    },
    hidden: {
      display: 'none !important'
    }
  }
})
