import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'

import Button from '@material-ui/core/Button'

import withLinkOnButton from 'hoc/withLinkOnButton'

export default compose(
  withLinkOnButton(),
  defaultProps({ variant: 'outlined' })
)(Button)
