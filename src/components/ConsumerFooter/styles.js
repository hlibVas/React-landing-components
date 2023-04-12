import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      height: 340,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: palette.primary.dark,
      position: 'relatve',
      [breakpoints.down('xs')]: {
        height: 496
      }
    },
    wrapper: {
      width: 1440,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      [breakpoints.down('xs')]: {
        width: '100vw'
      }
    },
    copyrightBlock: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },

    buttonUp: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: palette.background.paper,
      margin: '0 0 62px 34px',
      '&:hover': {
        backgroundColor: palette.background.paper
      }
    },

    copyright: {
      fontweight: 400,
      fontSize: 12,
      lineHeight: '16px',
      color: palette.primary.contrastText,
      opacity: 0.5,
      margin: '0 0 40px 26px',
      [breakpoints.down('xs')]: {
        margin: 0
      }
    },

    copyrightMargin: {
      marginLeft: 120
    },
    infoBlock: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'inherit'
    },
    footerLogo: {
      margin: '28px 0 16px 0',
      cursor: 'pointer',
      [breakpoints.down('xs')]: {
        margin: '12px 0 12px 0'
      }
    },
    centerButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    buttons: {
      width: 460,
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 12,
      [breakpoints.down('xs')]: {
        marginBottom: 0
      }
    },
    forSalesButton: {
      width: 255,
      height: 48,
      marginTop: 12,
      marginBottom: 48,
      [breakpoints.down('xs')]: {
        width: 280,
        marginTop: 24,
        marginBottom: 24,
      }
    },
    adressBlock: {
      [breakpoints.down('xs')]: {
        marginTop: 18,
        textAlign: 'center'
      }
    },
    adress: {
      margin: '40px 0',
      fontSize: 12,
      lineHeight: '16px',
      color: palette.primary.contrastText,
      opacity: 0.5
    },
    socialMediaBlock: {
      flex: 1,
      display: 'flex',
      width: 208,
      [breakpoints.down('xs')]: {
        flex: 0,
        width: 'auto'
      }
    },
    liveChat: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: 80,
      position: 'absolute',
      right: '45px'
    },
    liveChatRoot: {
      width: 208,
      height: 76,
      borderRadius: 10,
      backgroundColor: palette.background.paper,
      padding: 16,
      marginTop: 140
    },
    chatMainLabel: {
      fontSize: 16,
      lineHeight: '18px',
      fontWeight: 600
    },
    chatSecondLabel: {
      fontSize: 12,
      lineHeight: '18px',
      fontWeight: 400,
      marginTop: 8
    },

    chatTriangle: {
      margin: '0 0 -15px -41px',
      transform: 'rotate(90deg)'
    },

    eclipse: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 20
    },
    socialMediaButtons: {
      margin: '30px 75px 20px 170px',
      display: 'flex',
      alignItems: 'flex-end',
      [breakpoints.down('xs')]: {
        margin: '0'
      }
    }
  }
})
