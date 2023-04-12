import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    button: {
      color: palette.primary.main,
      textDecoration: 'underline',
      height: 20,
      padding: 0,
      minWidth: 'auto'
    }
  }
})
