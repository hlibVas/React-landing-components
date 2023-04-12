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
      height: 765,
      [breakpoints.down('xs')]: {
        height: 980
      }
    },
    section_2: {
      height: 645,
      [breakpoints.down('xs')]: {
        height: 660,
        justifyContent: 'space-between',
        marginTop: -40
      }
    },
    section_3: {
      height: 729,
      [breakpoints.down('xs')]: {
        height: 890
      }
    },
    section_4: {
      height: 539,
      margin: '0 120px',
      flexDirection: 'column',
      alignItems: 'stretch',
      [breakpoints.down('xs')]: {
        height: 560
      }
    },
    section_5: {
      height: 698,
      [breakpoints.down('xs')]: {
        height: 950
      }
    },
    section_6: {
      height: 391,
      [breakpoints.down('xs')]: {
        height: 730
      }
    },
    whiteBackground: {
      backgroundColor: palette.background.paper
    },
    imageRoot: {
      margin: '25% 0 0 15%',
      width: 225.1,
      height: 457.35,
      [breakpoints.down('xs')]: {
        margin: '40px auto 0  auto'
      }
    },
    medImageRoot: {
      marginTop: '25%',
      width: 386,
      height: 489,
      [breakpoints.down('xs')]: {
        width: 225,
        height: 457,
        margin: '40px auto 0  auto'
      }
    },
    largeImageRoot: {
      marginTop: '8%',
      width: 895,
      height: 565,
      [breakpoints.down('xs')]: {
        marginTop: 48,
        width: '140vw',
        height: '82vw'
      }
    },
    hotizontalRoot: {
      height: 450
    }

  }
})
