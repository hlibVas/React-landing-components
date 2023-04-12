export default function ({ spacing }) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },

    children: {
      flexGrow: 1,
      textAlign: 'center'
    },

    icon: {
      display: 'flex',
      flexShrink: 0,
      marginLeft: spacing(2)
    }
  }
}
