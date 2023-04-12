import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: palette.background.paper,
      borderRadius: 36,
      width: 590,
      height: (sendCode) => sendCode ? 1440 : 1210,
      padding: '12px 0',
      [breakpoints.down('xs')]: {
        marginTop: 40,
        height: (sendCode) => sendCode ? 1100 : 960,
        width: 'calc( 100vw - 48px )'
      }
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: 518,
      position: 'relative',
      [breakpoints.down('xs')]: {
        width: 'calc( 100% - 48px )'
      }
    },

    label: {
      color: palette.primary.subtleBlack,
      margin: '36px 0 24px 0',
      [breakpoints.down('xs')]: {
        margin: '24px 0 12px 0'
      }
    },
    disabled: {
      color: `${palette.primary.subtleBlack} !important`
    },
    sendLabel: {
      color: palette.primary.subtleBlack,
      textAlign: 'center',
      margin: '16px 0 16px  0'
    },
    sendCode: {
      color: palette.primary.subtleBlack,
      margin: '16px 0 0 0'
    },
    codeLabel: {
      color: palette.primary.subtleBlack,
      margin: '36px 0 16px 0'
    },
    resendCode: {
      color: palette.primary.main,
      margin: '16px 0 0 0',
      cursor: 'pointer'
    },
    radio: {
      display: 'flex',
      flexDirection: 'row'
    },
    radioTag: {
      display: 'flex',
      alignItems: 'center'
    },
    tagLabel: {
      color: palette.primary.subtleBlack,
      marginRight: 36
    },
    radioCheckbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      marginRight: 12
    },
    unChecked: {
      border: `1.5px solid ${palette.primary.subtleBlack}`
    },
    checked: {
      border: `6px solid ${palette.primary.main}`
    },
    codeField: {
      margin: 0,
      alignItems: 'flex-start !important',
      borderRadius: 12,
      marginLeft: '-4px'
    },
    checkboxRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 26
    },
    tag: {
      height: 20,
      width: 20,
      border: `1px solid ${palette.primary.subtleBlack}`,
      borderRadius: 4,
      display: 'flex',
      marginRight: 12,
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    activeTag: {
      backgroundColor: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    link: {
      fontWeight: 500,
      fontSize: 16,
      linwHeight: '24px',
      color: palette.primary.subtleBlack,
      textDecoration: 'none'
    },
    submit: {
      marginTop: 30
    },
    error: {
      color: palette.error.main,
      margin: '12px auto 6px 0'
    }
  }
})
