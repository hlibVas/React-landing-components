import makeStyles from 'hooks/makeStyles'

export default makeStyles(({ palette, breakpoints }) => {
  return {
    backgroundIcons: {
      position: 'relative',
      zIndex: -1,
      height: 0
    },
    whiteBackgroundIcons: {
      zIndex: 1
    },
    s_1_1: {
      position: 'absolute',
      width: 121,
      height: 109,
      left: 120,
      top: 456,
      [breakpoints.down('xs')]: {
        top: 155,
        left: 135,
        width: 80
      }
    },
    s_1_2: {
      position: 'absolute',
      width: 134,
      height: 134,
      left: 281,
      top: 431,
      [breakpoints.down('xs')]: {
        top: 135,
        left: 280,
        width: 80
      }
    },
    s_2_1: {
      position: 'absolute',
      width: 120,
      height: 97,
      left: 120,
      top: 75,
      [breakpoints.down('xs')]: {
        top: -17,
        left: 'auto',
        right: 15,
        width: 80
      }
    },
    s_3_1: {
      position: 'absolute',
      width: 27,
      height: 45,
      left: 447,
      top: 29,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_2: {
      position: 'absolute',
      width: 30,
      height: 50,
      left: 590,
      top: 54,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_3: {
      position: 'absolute',
      width: 35,
      height: 58,
      left: 731,
      top: 22,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_4: {
      position: 'absolute',
      width: 24,
      height: 40,
      left: 515,
      top: 134,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_5: {
      position: 'absolute',
      width: 37,
      height: 62,
      left: 641,
      top: 157,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_6: {
      position: 'absolute',
      width: 23,
      height: 38,
      left: 504,
      top: 216,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_7: {
      position: 'absolute',
      width: 20,
      height: 34,
      left: 590,
      top: 254,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_8: {
      position: 'absolute',
      width: 106,
      height: 91,
      left: 556,
      top: 328,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    s_3_9: {
      position: 'absolute',
      width: 139.82,
      height: 89.73,
      left: 502,
      top: 487,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },

    c_1_1: {
      position: 'absolute',
      width: 137,
      height: 176,
      right: 150,
      top: 20,
      [breakpoints.down('xs')]: {
        top: -17,
        left: 'auto',
        right: 15,
        width: 80
      }
    },
    c_2_1: {
      position: 'absolute',
      width: 126,
      height: 114,
      left: 1191,
      top: 63,
      [breakpoints.down('xs')]: {
        top: 8,
        left: 'auto',
        right: 15,
        width: 80
      }
    },
    c_3_1: {
      position: 'absolute',
      width: 120,
      height: 153.32,
      left: 120,
      top: 530,
      [breakpoints.down('xs')]: {
        top: -20,
        left: 'auto',
        right: 15,
        width: 80
      }
    },

    h_1_1: {
      position: 'absolute',
      width: 160,
      height: 180,
      left: 105.19,
      top: 25,
      transform: 'rotate(-106.4deg)',
      [breakpoints.down('xs')]: {
        top: -3,
        left: 'auto',
        right: 34,
        width: 81,
        height: 91,
        transform: 'scaleX(-1) rotate(248deg)'
      }
    },
    h_2_1: {
      position: 'absolute',
      width: 160,
      height: 130,
      left: -50,
      top: -145,
      transform: 'rotate(-14.56deg)',
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    h_3_1: {
      position: 'absolute',
      width: 160,
      height: 171,
      left: 1250,
      top: -80,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    h_3_2: {
      position: 'absolute',
      width: 104,
      height: 195,
      left: 120,
      top: 534.22,
      [breakpoints.down('xs')]: {
        top: 500,
        left: 140,
        width: 43,
        height: 81
      }
    },
    h_3_3: {
      position: 'absolute',
      width: 370,
      height: 83,
      left: 290.58,
      top: 646.12,
      [breakpoints.down('xs')]: {
        top: 493,
        left: 480,
        width: 120,
        height: 120,
        transform: 'rotate(50deg)'
      }
    },
    h_3_4: {
      position: 'absolute',
      width: 81,
      height: 174,
      left: 727.4,
      top: 554.94,
      [breakpoints.down('xs')]: {
        top: 500,
        left: 220,
        width: 41,
        height: 87
      }
    },
    h_3_5: {
      position: 'absolute',
      width: 206,
      height: 230,
      left: 875.1,
      top: 499,
      [breakpoints.down('xs')]: {
        top: 500,
        left: 290,
        width: 73,
        height: 81,
        transform: 'rotate(-14.56deg)'
      }
    },
    h_3_6: {
      position: 'absolute',
      width: 166,
      height: 166,
      left: 1147.59,
      top: 550,
      [breakpoints.down('xs')]: {
        top: 500,
        left: 380,
        width: 80,
        height: 80
      }
    },
    h_4_1: {
      position: 'absolute',
      width: 121,
      height: 109,
      left: 833,
      top: 718,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    h_4_2: {
      position: 'absolute',
      width: 100,
      height: 137,
      left: 990,
      top: 695,
      [breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    h_5_1: {
      position: 'absolute',
      width: 134,
      height: 134,
      left: 120,
      top: 400,
      [breakpoints.down('xs')]: {
        top: 290,
        left: 145,
        width: 80,
        height: 80
      }
    },
    h_5_2: {
      position: 'absolute',
      width: 113,
      height: 144.38,
      left: 290,
      top: 390,
      [breakpoints.down('xs')]: {
        top: 290,
        left: 260,
        width: 80,
        height: 80
      }
    },
    h_5_3: {
      position: 'absolute',
      width: 122,
      height: 109,
      left: 450,
      top: 420,
      [breakpoints.down('xs')]: {
        top: 290,
        left: 370,
        width: 80,
        height: 80
      }
    }
  }
})
