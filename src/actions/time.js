import * as types from 'constants/actions'

export function choicedTime (payload) {
  return {
    type: types.SET_TIME,
    payload: {
      choicedTime: payload
    }
  }
}
