import * as types from 'constants/actions'

export function choicedServices (payload) {
  return {
    type: types.SERVICES_CHOICED,
    payload: {
      choicedServices: payload
    }
  }
}
export function choicedLocations (payload) {
  return {
    type: types.LOCATIONS_CHOICED,
    payload: {
      choicedLocations: payload
    }
  }
}

export function removeServices () {
  return {
    type: types.SERVICES_REMOVE
  }
}
export function removeLocations () {
  return {
    type: types.LOCATIONS_REMOVE
  }
}
