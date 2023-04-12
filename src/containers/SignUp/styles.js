import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ mixins, palette, spacing, breakpoints }) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: ' column',
      background: palette.secondary.main,
      minHeight: 'calc(var(--vh, 1vh) * 100)',
      height: '100%'
    }
  }
})
