import React from 'react'

import { UserContext } from 'containers/Application/context'

export default function useCurrentUser () {
  return React.useContext(UserContext)
}
