import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minWidth: 476,
      minHeight: 476,
      borderRadius: 36,
      background: palette.primary.contrastText,
      [breakpoints.down('xs')]: {
        justifyContent: 'center',
        minHeight: 'calc(var(--vh, 1vh) * 100)',
        minWidth: '100vw',
        borderRadius: 0
      }
    },

    checkIcon: {
      marginTop: 75,
      marginBottom: 45
    },

    firstLabel: {
      marginBottom: 36,
      textAlign: 'center',
      // width: 200,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: '36px',
      color: palette.primary.dark,
      whiteSpace: 'nowrap'
    },

    label: {
      width: 400,
      textAlign: 'center',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '24px',
      color: palette.primary.subtleBlack,
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)'
      }
    },

    buttonBlock: {
      marginTop: 36,
      [breakpoints.down('xs')]: {
        display: 'flex',
        width: 'calc(100vw - 48px)'
      }
    },

    buttonAppStore: {
      width: 166,
      height: 56,
      marginRight: 8,
      marginBottom: 24,
      [breakpoints.down('xs')]: {
        borderRadius: 24,
        width: 'calc((100vw - 48px) / 2)',
        height: 'calc((100vw - 48px) / 2 / 2.9643)'
      }

    },
    imageAppStore: {
      width: 166,
      height: 56,
      [breakpoints.down('xs')]: {
        width: 'calc((100vw - 48px) / 2)',
        height: 'calc((100vw - 48px) / 2 / 2.9643)'
      }
    },

    buttonGooglePlay: {
      width: 188,
      height: 56,
      marginLeft: 8,
      marginBottom: 24,
      [breakpoints.down('xs')]: {
        borderRadius: 24,
        width: 'calc((100vw - 48px) / 2)',
        height: 'calc((100vw - 48px) / 2 / 2.9643)'
      }
    },
    imageGooglePlay: {
      width: 188,
      height: 56,
      [breakpoints.down('xs')]: {
        width: 'calc((100vw - 48px) / 2)',
        height: 'calc((100vw - 48px) / 2 / 2.9643)'
      }
    }
  }
})
