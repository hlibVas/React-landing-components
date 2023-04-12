import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 110,
      marginBottom: 120,
      width: 1150,
      [breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: '100vw',
        marginTop: 50,
        marginBottom: 40
      }
    },
    leftColumt: {
      flex: 1,
      [breakpoints.down('xs')]: {
        padding: '0 24px'
      }
    },
    secondColumn: {
      flex: 1
    },
    headerRoot: {
      height: 125
    },
    contactBox: {
      display: 'flex',
      marginBottom: 25
    },
    icon: {
      width: 24
    },
    secLabel: {
      marginTop: 24
    },
    socialMediaRoot: {
      marginTop: 100,
      [breakpoints.down('xs')]: {
        marginTop: 42
      }
    },
    linkLabel: {
      marginLeft: 45,
      [breakpoints.down('xs')]: {
        marginLeft: 32
      }
    },

    borderLabel: {
      borderBottom: `1px solid ${palette.primary.dark}`
    }
  }
})
