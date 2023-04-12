import get from 'lodash/get'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'

import withTheme from './withTheme'

export default (
  getDefaultColor,
  opts = {
    as: 'color'
  }
) => BaseComponent => compose(
  withTheme,
  mapProps(
    props => {
      const { theme, ...restProps } = props
      const defaultColor = typeof getDefaultColor === 'function'
        ? getDefaultColor(props)
        : getDefaultColor

      let color

      color = get(theme.palette, props[opts.as] || defaultColor)

      if (!color) {
        color = props.color
      }

      return {
        ...restProps,
        [opts.as]: color
      }
    }
  )
)(BaseComponent)
