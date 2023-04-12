import compose from 'recompose/compose'
import defaultProps from 'recompose/defaultProps'

import Button from 'components/Button'

import withLinkOnButton from 'hoc/withLinkOnButton'

export default compose(
  withLinkOnButton(),
  defaultProps({ color: 'primary', variant: 'contained' })
)(Button)
