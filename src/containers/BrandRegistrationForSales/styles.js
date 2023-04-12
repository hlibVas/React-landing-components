import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      width: 1000,
      padding: '0 24px',
      [breakpoints.down('xs')]: {
        width: '100vw'
      }
    },
    content: {
      marginTop: 110,
      marginBottom: 120,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      [breakpoints.down('xs')]: {
        marginTop: 36,
        marginBottom: 24
      }
    },
    succesRoot: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      minHeight: 450
    },
    leftColumt: {
      flex: 1
    },
    secondColumn: {
      flex: 1
    },
    headerRoot: {
      height: 216,
      marginRight: 12
    },
    contactBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 25
    },
    mainLabel: {
      whiteSpace: 'pre-line'
    },
    secLabel: {
      marginTop: 24
    },
    sucMainLabel: {
      width: 'calc(100vw - 48px)',
      textAlign: 'center',
      marginTop: 48
    },
    sucSecLabel: {
      width: 'calc(100vw - 48px)',
      textAlign: 'center',
      marginTop: 36,
      marginBottom: 36
    },
    socialMediaRoot: {
      marginTop: 136,
      [breakpoints.down('xs')]: {
        marginTop: 40
      }
    },
    tagLabel: {
      color: palette.primary.dark,
      marginLeft: 40
    },

    icon: {
      width: 36,
      height: 36
    },
    buttonHome: {
      width: 396,
      height: 64,
      maxWidth: 'calc(100vw - 48px)',
      [breakpoints.down('xs')]: {
        marginBottom: 40
      }
    },
    navigationButton: {
      marginTop: 24,
      fontWeight: 500,
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: '26px',
      height: 26,
      color: palette.primary.main,
      textAlign: 'center',
      borderRadius: 0,
      borderBottom: `2px solid ${palette.primary.main}`,
      textTransform: 'capitalize',
      padding: 0,
      [breakpoints.down('xs')]: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: '26px',
        width: 'auto',
        height: 'auto'
      }
    }
  }
})
