import React from 'react'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import defaultProps from 'recompose/defaultProps'
import cx from 'clsx'

import Button from 'components/Button'

import withStyles from 'hoc/withStyles'
import styles from './styles'

export default compose(
  defaultProps({ variant: 'text' }),
  withStyles(styles),
  mapProps(
    ({
      classes,
      className,
      children,
      icon,
      startIcon,
      iconClassName,
      ...restProps
    }) => (
      icon || startIcon
        ? {
            className: cx(classes.root, className),
            children: (
              <>
                {startIcon && (
                  <div className={cx(
                    classes.icon,
                    iconClassName
                  )}
                  >
                    {startIcon}
                  </div>
                )}
                <div className={classes.children}>
                  {children}
                </div>
                {icon && (
                  <div className={cx(
                    classes.icon,
                    iconClassName
                  )}
                  >
                    {icon}
                  </div>
                )}
              </>
            ),
            ...restProps
          }
        : {
            className,
            children,
            ...restProps
          }
    )
  )
)(Button)
