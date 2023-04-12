import React, { useState } from 'react'

import ButtonText from 'components/Button/Text'
import useStyles from './styles'

function cutExpandLabel (data) {
  const classes = useStyles()
  const [expand, setExpand] = useState(true)
  if (data.children.length > 190) {
    const subStr = data.children.slice(0, 140)
    const fullStr = data.children

    return (
      <>
        {expand
          ? <>
            {subStr + '...'}
            <ButtonText
              className={classes.button}
              onClick={() => { setExpand(false) }}
            >
              More
            </ButtonText>
          </>
          : <>{fullStr}</>}
      </>
    )
  } else {
    return (
      <>
        {data.children}
      </>
    )
  }
}

export default cutExpandLabel
