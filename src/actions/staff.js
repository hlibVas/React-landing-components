import * as types from 'constants/actions'

export function choicedStaff (payload) {
  return {
    type: types.SUPERADMIN_STAFF_CHOICED,
    payload: {
      choicedStaff: payload
    }
  }
}
export function removeStaff (payload) {
  return {
    type: types.SUPERADMIN_STAFF_REMOVE,
    payload: {
      staffId: payload ? [payload] : null
    }
  }
}
