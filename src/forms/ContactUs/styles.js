import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: 'linear-gradient(275.58deg, #DEF4FC -3.7%, #B9E8F9 82.93%);',
      borderRadius: 20,
      width: 590,
      height: 442,
      [breakpoints.down('xs')]: {
        height: 552,
        marginLeft: 24,
        width: 'calc(100vw - 48px)'
      }
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: 348,
      position: 'relative'
    },

    twoColumns: {
      margin: 24,
      display: 'flex',
      width: 540,
      justifyContent: 'space-between',
      [breakpoints.down('xs')]: {
        marginBottom: 0,
        flexDirection: 'column',
        width: 'calc(100vw - 96px)'
      }
    },
    textField: {
      width: 260,
      background: palette.background.paper,
      [breakpoints.down('xs')]: {
        width: '100%',
        marginBottom: 20
      }
    },

    wideTextField: {
      width: 540,
      background: palette.background.paper,
      height: 195,
      '&  > div': {
        height: 200,
        display: 'flex',
        alignItems: 'flex-start',
        '&  > textarea': {
          height: 200,
          paddingBottom: 0
        }
      },
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 96px)'
      }
    },

    submit: {
      marginTop: 'auto',
      width: 540,
      [breakpoints.down('xs')]: {
        width: 'calc(100vw - 96px)'
      }
    },
    agreeLabel: {
      marginTop: 40,
      fontWeight: 400,
      fontSize: 10,
      color: palette.secondary.dark,
      opacity: 0.8,
      [breakpoints.down('xs')]: {
        textAlign: 'center',
        width: 'calc(100vw - 96px)',
        marginBottom: 40,
        marginTop: 24
      }
    }

  }
})
