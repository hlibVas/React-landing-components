import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 120px',
      position: 'relative',
      width: '100%',
      [breakpoints.down('xs')]: {
        padding: '0 24px'
      },
      '& [class="gmnoprint"][data-control-width="40"][data-control-height="81"]': {
        top: '-12px !important',
        left: '-16px !important',
        '& div': {
          borderRadius: '12px !important',
          '& div': {
            width: '40px !important',
            margin: '0px !important'
          },
          '& :first-child': {
            backgroundImage: "url('/Plus.svg') !important",
            backgroundRepeat: 'no-repeat !important',
            backgroundPosition: 'center !important',
            '& > img': {
              display: 'none'
            }
          },
          '& :last-child': {
            backgroundImage: "url('/Minus.svg') !important",
            backgroundRepeat: 'no-repeat !important',
            backgroundPosition: 'center !important',
            '& > img': {
              display: 'none'
            }
          }
        }
      },
      '& [rel="noopener"]': {
        display: 'none !important'

      },
      '& [class="gm-style-cc"]': {
        display: 'none !important'
      },
      '& [class="gmnoprint gm-style-cc"]': {
        display: 'none !important'
      },
      '& [role="dialog"]': {
        top: '-30px',
      },
      '& [class="gm-style-iw-tc"]': {
        top: '-30px',
      }
    },
    sectionlabel: {
      margin: '50px 0 80px 0',
      [breakpoints.down('xs')]: {
        margin: '40px 0'
      }
    },
    infoRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: 230,
      maxHeight: 322,
      alignItems: 'center',
      justifyContent: 'space-between',
      [breakpoints.down('xs')]: {
        position: 'relative',
        top: '50%',
        left: '6px',
        overflow: 'hidden',
        justifyContent: 'center',
        width: 250,
        maxHeight: 200,
        paddingTop: 12
      }
    },
    infoBlock: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapSalonImage: {
      marginTop: 10,
      width: 230,
      maxHeight: 127,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover',
      backgroundSize: 'cover',
      borderRadius: '8px',
      [breakpoints.down('xs')]: {
        maxWidth: 76,
        width: 76,
        maxHeight: 62
      }
    },
    imageBlock: {
      width: '230px !important',

    },
    infoLabelBlock: {
      width: 230,
      [breakpoints.down('xs')]: {
        marginLeft: 16,
        maxWidth: 125
      }
    },
    mapMainLabel: {
      marginTop: 16,
      fontWeight: 700,
      color: palette.primary.dark,

    },
    mapSecondLabel: {
      fontSize: 12,
      lineHeight: '15px',
      fontWeight: 400,
      color: palette.primary.subtleBlack,
      marginTop: 4
    },
    mapInfoButton: {
      width: 230,
      marginTop: 24,
      boxShadow: 'none',
      transition: 'none',
      '&.MuiButton-contained.Mui-focusVisible': {
        boxShadow: 'none',
      },
      '&.MuiButton-contained': {
        '&:active': {
          transition: 'none',
          boxShadow: 'none',

        }
      }
    },
    autocomplite: {
      position: 'relative',
      marginTop: 24,
      marginLeft: 24,
      borderRadius: 12,
      width: 448,
      height: 48,
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '16px',
      color: palette.primary.dark,
      paddingLeft: 24,
      borderWidth: 0,
      outline: 'none',
      [breakpoints.down('xs')]: {
        width: 'calc(100% - 24px)',
        marginLeft: 12,
        marginTop: 12
      },
      '&::placeholder': {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '16px',
        paddingLeft: 26,
        color: palette.primary.subtleBlack,
        backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBpVTtTQJBEJ0ZSDy/CCVQAiVoBYYo6OEPuArQCoAKgAoOf8jxoSF0QAmUQAn8IIoJ3DizApHjTk59yWX3Nrtv38y8WYQIuK6bTlpnWZ0vF/OJ4zgzOAAMLjx7/TIlqAQMF9/XGXjCPrfu7UL7IJkqsU7PG3KqLKtjOTgCxCn6PGOELCJWZFsGgZvvb/N6mNLkZnJ8kqoyc1m+x+JtvhnYN5av6XmDGhNWrdNUWv6dUGUmNCIXfK7bdr4GP6DTHTyIyobv+04wZDKMRBrC9BCRongnqiUNJq8BkDscpkVeVsJrQUywjyMtkOZ5hyy5WJryI8MkLplsnupgra2zJdvexn4aYmIlFQ5bp6WV/FJElIGYSCAZRQsx8w6Zk8vNNKFIeBWTS+zHFfHbXlfQWveTJlTLfojIG7xWZchoN+xdspl0eoM2ApaAsGbnr+thRN3+sMK8MtawCzeXkWRqkaOPVQ0RjOfUKiupcIKkMEwZkwZRzwATtVLYpXuN7kk3sJjYHNjdOdZ02OJ6bSshqwYJESJgGn/to0XIExRF+Gcoodd74XVRopX9hlAV6mvzb7INobx5s09c6c7H7JYAVwAAAABJRU5ErkJggg==') !important",
        backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'left !important'
      }
    },
    geolocation: {
      position: 'absolute',
      bottom: '100px',
      right: '19px',
      cursor: 'pointer',
      backgroundColor: palette.primary.white
    }
  }
})