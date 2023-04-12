import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    section: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0px auto',
      maxWidth: 1440,
      [breakpoints.down('xs')]: {
        width: '100vw',
        maxWidth: '100vw',
        flexDirection: 'column',
        justifyContent: 'center'
      }
    },
    section_1: {
      flexDirection: 'column',
      height: 320,
      marginLeft: 120,
      marginTop: 80,
      [breakpoints.down('xs')]: {
        height: 440,
        margin: '24px 0 0 0',
        padding: '0 24px'
      }
    },
    section_2: {
      height: 580
    },
    section_3: {
      flexDirection: 'column',
      alignItems: 'center',
      height: 240,
      marginTop: 28,
      [breakpoints.down('xs')]: {
        alignItems: 'flex-start',
        height: 150,
        marginTop: 0,
        padding: '0 24px'
      }
    },
    section_4: {
      height: 391,
      [breakpoints.down('xs')]: {
        height: 670
      }
    },
    whiteBackground: {
      backgroundColor: palette.background.paper
    },

    sectionSecondLabel: {
      marginTop: 36,
      color: palette.primary.main
    },
    tagBox: {
      display: 'flex',
      marginTop: 24
    },
    icon: {
      marginRight: 16
    },
    navigationButton: {
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '46px',
      color: palette.primary.main,
      borderRadius: 0,
      borderBottom: `3px solid ${palette.primary.main}`,
      [breakpoints.down('xs')]: {
        fontSize: 24,
        fontWeight: 500,
        lineHeight: '31px',
        padding: 0,
        width: 'auto',
        height: 'auto'
      }
    }

  }
})
