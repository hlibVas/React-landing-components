import withProps from 'recompose/withProps'

import Link from 'components/Link'

export default () => withProps(({ to }) => {
  if (to) {
    return {
      component: Link
    }
  }
})
