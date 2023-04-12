import React from 'react'
import cx from 'clsx'

import Navigation from 'components/Navigation'
import ButtonPrimary from 'components/Button/Primary'
import Typography from 'components/Typography'
import ButtonIcon from 'components/Button/Icon'

import MenuIcon from 'icons/Menu'
import LogoCopyrigtIcon from 'icons/Landing/LogoCopyrigt'

import useStyles from './styles'

function ConsumerHeader(props) {
  const classes = useStyles()
  const {
    activeTab,
    general,
    openNavigation,
    isDownXs,
    rootClass
  } = props

  const rootClassName = cx(classes.root, rootClass,
    (!isDownXs && (activeTab === 'contact_us' || activeTab === 'salon_registration' || activeTab === 'salon_registration/succes')) &&
    classes.whiteBackground)

  return (
    <div className={rootClassName}>
      <div className={classes.wrapper}>
        <div
          onClick={() => general('')}
          className={classes.headerLogo}
          aria-label='Click to go home page'
          role="button"
        >
          <LogoCopyrigtIcon />
        </div>

        {isDownXs
          ? (
            <ButtonIcon
              onClick={openNavigation}
              className={classes.buttonIcon}
              aria-label='Click to open menu'
            >
              <MenuIcon color='primary.main' />
            </ButtonIcon>)
          : (
            <div className={classes.buttons}>
              <Navigation type='landing' activeTab={activeTab} />
              <div className={classes.singBlock}>

                <Typography
                  className={classes.singInButton}
                  onClick={() => general('login')}
                  variant='h4'
                >
                  Sign In to Salon
                </Typography>
                <ButtonPrimary
                  className={classes.primaryButton}
                  onClick={() => general('salon_registration')}
                >
                  Sign Up Now
                </ButtonPrimary>
              </div>
            </div>)}
      </div>
    </div>
  )
}

export default ConsumerHeader
