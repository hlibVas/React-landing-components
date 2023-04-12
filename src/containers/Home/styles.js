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
      height: 851,
      [breakpoints.down('xs')]: {
        overflow: 'hidden',
        justifyContent: 'flex-start'
      }
    },
    section_2: {
      height: 786,
      flex: 1,
      margin: '0 120px',
      [breakpoints.down('xs')]: {
        height: 540,
        overflow: 'hidden'
      }
    },
    section_3: {
      height: 810,
      margin: '0 120px',
      flexDirection: 'column',
      alignItems: 'stretch',
      [breakpoints.down('xs')]: {
        height: 670,
        justifyContent: 'flex-start',
        marginTop: -40
      }
    },
    section_4: {
      height: 849,
      [breakpoints.down('xs')]: {
        height: 1000
      }
    },
    section_5: {
      height: 621,
      [breakpoints.down('xs')]: {
        height: 760,
        justifyContent: 'space-between',
        marginTop: -40
      }
    },
    section_6: {
      height: 586,
      [breakpoints.down('xs')]: {
        height: 738,
        overflow: 'hidden',
        marginTop: -40
      }
    },
    section_7: {
      height: 391,
      [breakpoints.down('xs')]: {
        height: 638
      }
    },
    whiteBackground: {
      backgroundColor: palette.background.paper
    },

    imageRoot: {
      width: 391,
      height: 489,
      marginTop: '30%',
      [breakpoints.down('xs')]: {
        width: 237,
        height: 457,
        margin: '40px auto 0 auto'
      }
    },
    medImageRoot: {
      margin: '10% 80px 0 -80px',
      width: 585,
      height: 370,
      [breakpoints.down('xs')]: {
        margin: '24px auto 0  auto'
      }
    },
    largeImageRoot: {
      margin: '10% 0 0 80px',
      width: 911,
      height: 651,
      [breakpoints.down('xs')]: {
        margin: '40px 0 0 -15px'
      }
    }
  }
})
