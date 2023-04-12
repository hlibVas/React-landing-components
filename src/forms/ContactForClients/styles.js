import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: palette.background.main,
      borderRadius: 20,
      width: 590,
      height: 230,
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 48px)',
        height: 330
      }
    },

    twoColumns: {
      margin: '32px 24px 0 24px',
      display: 'flex',
      width: 540,
      justifyContent: 'space-between',
      [breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: 'calc(100% - 48px)'
      }
    },
    textField: {
      width: 260,
      background: palette.background.paper,
      [breakpoints.down('xs')]: {
        width: '100%',
        height: 48,
        marginBottom: 20
      }
    },

    submit: {
      marginTop: 24,
      width: 540,
      [breakpoints.down('xs')]: {
        marginTop: 20,
        width: 'calc(100% - 48px)'
      }
    },
    agreeLabel: {
      marginTop: 40,
      fontWeight: 400,
      fontSize: 10,
      color: '#414141',
      [breakpoints.down('xs')]: {
        width: 'calc(100% - 96px)',
        textAlign: 'center'
      }
    }

  }
})
