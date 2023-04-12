import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 476,
      height: 1006,
      borderRadius: 36,
      background: palette.background.paper,
      [breakpoints.down('xs')]: {
        height: 'calc(var(--vh, 1vh) * 100)',
        width: '100vw',
        borderRadius: 0
      }
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: 348,
      position: 'relative',
      [breakpoints.down('xs')]: {
        height: '100%',
        width: 'calc(100vw - 48px)'
      }
    },
    logoImage: {
      borderRadius: '36px 36px 0 0'
    },
    header: {
      marginBottom: 12,
      position: 'relative'
    },

    label: {
      color: palette.primary.subtleBlack,
      margin: '24px 0 12px 0'
    },

    dayRoot: {
      width: 165,
      [breakpoints.down('xs')]: {
        marginBottom: 24
      }
    },
    input: {
      height: 48
    },
    checkboxRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 48,
      [breakpoints.down('xs')]: {
        marginTop: 'auto'
      }
    },

    tag: {
      height: 20,
      width: 20,
      border: `1px solid ${palette.primary.subtleBlack}`,
      borderRadius: 4,
      display: 'flex',
      marginRight: 12,
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    activeTag: {
      backgroundColor: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    link: {
      fontWeight: 500,
      fontSize: 16,
      linwHeight: '24px',
      color: '#A7A9AC',
      textDecoration: 'none'
    },
    submit: {
      marginTop: 24,
      [breakpoints.down('xs')]: {
        marginBottom: 40
      }
    },
    logoIcon: {
      position: 'absolute',
      top: '24px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    error: {
      color: palette.primary.subtleBlack,
      marginTop: 12,
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: 1.3
    }
  }
})
