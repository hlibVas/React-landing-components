import * as types from 'constants/actions'

export function addWorkDayFormToSubmit () {
  return {
    type: types.SCHEDULE_ADD_WORKINGS_DAY
  }
}
export function removeDayFormToSubmit () {
  return {
    type: types.SCHEDULE_REMOVE_WORKINGS_DAY
  }
}
export function scheduleAddWorkDay () {
  return {
    type: types.SCHEDULE_ADD_WORKINGS_DAYS
  }
}
export function scheduleEditWorkDays () {
  return {
    type: types.SCHEDULE_EDIT_WORKINGS_DAYS
  }
}

export function scheduleEditChange (payload) {
  return {
    type: types.SCHEDULE_EDIT_CHANGE,
    payload
  }
}

export function scheduleEditSet (payload) {
  return {
    type: types.SCHEDULE_EDIT_SET,
    payload: {
      rows: payload.rows
    }
  }
}
export function scheduleEditClear () {
  return {
    type: types.SCHEDULE_EDIT_CLEAR
  }
}

export function scheduleEditSave (payload) {
  return {
    type: types.SCHEDULE_EDIT_CHANGE_SAVE,
    payload: {
      workDays: payload
    }
  }
}

export function scheduleRemoveWorkDay (payload) {
  const {
    date,
    id,
    timetable,
    workDays

  } = payload
  return {
    type: types.SCHEDULE_REMOVE_WORKINGS_DAYS,
    payload: {
      workDays,
      date,
      id,
      timetable

    }
  }
}
