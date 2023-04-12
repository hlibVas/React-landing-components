import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    vericalRoot: {
      display: 'flex',
      width: 575,
      height: 151,
      marginTop: 24
    },
    logo: {
      padding: '0 46px 34px 0'
    },
    verticalLabelRoot: {
      width: 487
    },
    containerSecondaryTitle: {
      marginTop: 24,
      paddingRight: 12
    },
    sectionLabel: {
      [breakpoints.down('xs')]: {
        marginLeft: 24,
        marginBottom: 36
      }
    },
    fullWidth: {
      width: 1160,
      [breakpoints.down('xs')]: {
        width: '100vw'
      }
    },
    centerColumn: {
      marginTop: 80
    },
    hotizontalRoot: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 1200,
      padding: '54px 0',
      [breakpoints.down('xs')]: {
        height: 370,
        width: '100vw',
        borderRadius: 0,
        padding: 0
      }
    },
    horizontalBenefitRoot: {
      width: 290,
      [breakpoints.down('xs')]: {
        width: 'calc((100vw - 48px) / 1.3)'
      }
    },

    darkBlockRoot: {
      width: 590,
      height: 546,
      borderRadius: 50,
      backgroundColor: palette.primary.dark,
      margin: '0 10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [breakpoints.down('xs')]: {
        height: 540,
        width: '100vw',
        borderRadius: 0,
        margin: 0
      }
    },
    darkBlockLogo: {
      margin: '46px 0 28px 0'
    },
    darkBlockFirstLabel: {
      color: palette.primary.contrastText,
      height: 138,
      width: 386,
      whiteSpace: 'pre-line',
      textAlign: 'center',
      [breakpoints.down('xs')]: {
        width: 280,
        height: 'auto',
        fontWeight: 700,
        whiteSpace: 'normal'
      }
    },
    darkBlockSecondarylabel: {
      margin: '24px 0 56px 0',
      height: 96,
      width: 466,
      textAlign: 'center',
      color: palette.primary.contrastText,
      [breakpoints.down('xs')]: {
        marginBottom: 0,
        height: 'auto',
        width: 'calc(100vw - 48px)'
      }
    },
    darkBlockButton: {
      width: 248,
      [breakpoints.down('xs')]: {
        margin: 'auto 0 70px 0'
      }
    },
    carousel: {
      height: '100%',
      zIndex: 2,
      '&>.rec-pagination': {
        zIndex: 2,
        marginTop: -30,
        '&>.rec-dot': {
          background: palette.primary.main,
          boxShadow: `0 0 1px 1px ${palette.primary.main}`,
          opacity: 0.8
        },
        '&>.rec-dot_active': {
          boxShadow: `0 0 1px 3px ${palette.primary.main}`,
          background: palette.primary.main,
          opacity: 1
        }

      },
      '&>.rec-carousel': {
        height: '100% !important',
        '&>.rec-slider-container': {
          margin: 0
        }
      }
    },
    whiteCarousel: {
      alignItems: 'flex-start !important',
      '&>.rec-pagination': {
        marginLeft: 24
      }
    }
  }
})
