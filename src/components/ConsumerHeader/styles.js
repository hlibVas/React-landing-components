import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      height: 80,
      display: 'flex',
      justifyContent: 'center'

    },
    wrapper: {
      width: 1440,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '0 auto ',
      padding: '16px  0 16px 120px',
      [breakpoints.down('xs')]: {
        width: '100vw',
        padding: '0px 38px 0 40px',
        alignItems: 'center'
      }
    },
    whiteBackground: {
      background: palette.background.paper,
      boxShadow: '0px 4px 8px rgba(36, 0, 83, 0.1)'
    },
    buttons: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    singBlock: {
      display: 'flex',
      alignItems: 'center'
    },
    primaryButton: {
      marginRight: 150,
      marginLeft: 24,
      width: 193
    },
    singInButton: {
      cursor: 'pointer',
      padding: '16px 0'
    },

    headerLogo: {
      cursor: 'pointer'
    }
  }
})
