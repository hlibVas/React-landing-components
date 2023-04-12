import React from 'react'
import cx from 'clsx'

import useStyles from './styles'

import CartIcon from 'icons/Landing/Background/Cart'
import ProductsIcon from 'icons/Landing/Background/Products'
import ScheduleIcon from 'icons/Landing/Background/Schedule'
import DollarIcon from 'icons/Landing/Background/Dollar'
import WalletIcon from 'icons/Landing/Background/Wallet'
import DreamIcon from 'icons/Landing/Background/Dream'
import CashbackIcon from 'icons/Landing/Background/CashBack'
import SicssorsIcon from 'icons/Landing/Background/Sicssors'
import HairDryIcon from 'icons/Landing/Background/HairDry'
import CurlingIcon from 'icons/Landing/Background/Curling'
import SprayIcon from 'icons/Landing/Background/Spray'
import TrimmerIcon from 'icons/Landing/Background/Trimmer'
import CombIcon from 'icons/Landing/Background/Comb'
import TabletIcon from 'icons/Landing/Background/Tablet'
import LikeIcon from 'icons/Landing/Background/Like'
import LocationIcon from 'icons/Landing/Background/Location'

export default function darkBlockContent (props) {
  const {
    type
  } = props
  const classes = useStyles()

  const root = cx(classes.backgroundIcons,
    type === 's_1' && classes.whiteBackgroundIcons,
    type === 'c_2' && classes.whiteBackgroundIcons,
    type === 'h_3' && classes.whiteBackgroundIcons,
    type === 'h_5' && classes.whiteBackgroundIcons)

  const cell = () => {
    switch (type) {
      case 's_1':
        return (
          <div className={root}>
            <CartIcon className={classes.s_1_1} />
            <ProductsIcon className={classes.s_1_2} />
          </div>
        )
      case 's_2':
        return (
          <div className={root}>
            <ScheduleIcon className={classes.s_2_1} />
          </div>
        )
      case 's_3':
        return (
          <div className={root}>
            <DollarIcon className={classes.s_3_1} color='background.icons.orange' />
            <DollarIcon className={classes.s_3_2} color='background.icons.orange' />
            <DollarIcon className={classes.s_3_3} />
            <DollarIcon className={classes.s_3_4} color='background.icons.orange' />
            <DollarIcon className={classes.s_3_5} color='background.icons.orange' />
            <DollarIcon className={classes.s_3_6} />
            <DollarIcon className={classes.s_3_7} />
            <WalletIcon className={classes.s_3_8} />
            <DreamIcon className={classes.s_3_9} />
          </div>
        )
      case 'c_1':
        return (
          <div className={root}>
            <LocationIcon className={classes.c_1_1} />
          </div>
        )
      case 'h_1':
        return (
          <div className={root}>
            <SicssorsIcon className={classes.h_1_1} />
          </div>
        )
      case 'h_2':
        return (
          <div className={root}>
            <ScheduleIcon className={classes.h_2_1} />
          </div>
        )
      case 'h_3':
        return (
          <div className={root}>
            <HairDryIcon className={classes.h_3_1} />
            <SprayIcon className={classes.h_3_2} />
            <CurlingIcon className={classes.h_3_3} />
            <TrimmerIcon className={classes.h_3_4} />
            <SicssorsIcon className={classes.h_3_5} />
            <CombIcon className={classes.h_3_6} />
          </div>
        )
      case 'h_4':
        return (
          <div className={root}>
            <CartIcon className={classes.h_4_1} />
            <TabletIcon className={classes.h_4_2} />
          </div>
        )
      case 'h_5':
        return (
          <div className={root}>
            <ProductsIcon className={classes.h_5_1} />
            <CashbackIcon className={classes.h_5_2} />
            <LikeIcon className={classes.h_5_3} />
          </div>
        )
    }
  }
  return (
    cell()
  )
}
