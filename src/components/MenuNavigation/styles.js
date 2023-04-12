import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, spacing }) => {
  return {
    root: {
      height: 'calc(var(--vh, 1vh) * 100)',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: palette.background.sidebar
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      height: 80,
      padding: '0 38px 0 40px',
      marginBottom: 60,
      alignItems: 'center'
    },
    headerLogo: {
      cursor: 'pointer'
    },

    buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%'
    },
    navigationButton: {
      justifyContent: 'flex-start',
      width: '100%',
      paddingLeft: 36,
      marginBottom: 12,
      color: palette.primary.subtleBlack,
      fontWeight: 500,
      fontSize: 18
    },

    singBlock: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 'auto 0 28px 0',
      padding: '0 24px'
    },
    primaryButton: {
      width: '100%',
      marginTop: 24
    },
    singInButton: {
      width: '100%',
      color: palette.primary.subtleBlack,
      fontWeight: 500,
      fontSize: 18
    }

  }
})
