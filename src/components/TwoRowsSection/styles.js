import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {

    leftColumn: {
      display: 'flex',
      flex: 1,
      marginLeft: 120,
      [breakpoints.down('xs')]: {
        marginLeft: 0,
        flex: 'unset',
        width: '100vw',
        padding: '0 24px'
      }
    },
    rightColumn: {
      display: 'flex',
      flex: 1,
      marginRight: 120,
      [breakpoints.down('xs')]: {
        flex: 'unset',
        marginRight: 0,
        width: '100vw',
        padding: '0 24px'
      }
    },
    centerText: {
      margin: '40% 0 50% 0'
    },

    headerRoot: {
      width: 590,
      height: 370,
      marginTop: '17%',
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)',
        height: 'auto'
      }
    },

    primarylabel: {
      whiteSpace: 'pre-line',
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)'
      }
    },
    secondaryLabel: {
      width: 420,
      marginTop: 24, cursor: 'default',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '26px',
      color: palette.secondary.dark,
      opacity: 0.8,
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)'
      }
    },
    thirdLabel: {
      marginTop: 18,
      color: palette.primary.main,
      fontSize: 24,
      lineHeight: '31px',
      opacity: 0.8,
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)',
        marginTop: 16
      }
    },

    buttons: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 40,
      [breakpoints.down('xs')]: {
        flexDirection: 'column'
      }
    },
    primaryButton: {
      minWidth: 190,
      [breakpoints.down('xs')]: {
        width: 280
      }
    },
    secondaryButton: {
      width: 250,
      marginLeft: 20,
      border: `2px solid ${palette.primary.main}`,
      '&:hover': {
        border: `2px solid ${palette.primary.main}`
      },
      [breakpoints.down('xs')]: {
        width: 280,
        marginLeft: 0,
        marginTop: 16
      }
    },

    adrotmentRoot: {
      marginTop: '15%',
      [breakpoints.down('xs')]: {
        marginTop: 0,
        height: '100%'
      }
    }
  }
})
