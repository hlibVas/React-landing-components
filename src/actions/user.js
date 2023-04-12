import * as types from 'constants/actions'

export function login(payload) {
  return {
    type: types.LOGIN,
    payload: {
      email: payload.email,
      password: payload.password,
      uuid: payload.uuid
    }
  }
}
export function loginConfirm(payload) {
  return {
    type: types.LOGIN_CONFIRM,
    payload: {
      verificationCode: payload.verificationCode
    }
  }
}

export function loginNewPassword(payload) {
  return {
    type: types.LOGIN_NEW_PASSWORD,
    payload: {
      password: payload.loginPassword
    }
  }
}
export function authFormShow(payload) {
  return {
    type: types.AUTH_FORM_SHOW,
    payload: {
      authFormShow: payload.authFormShow
    }
  }
}
export function authUser() {
  return {
    type: types.USER_AUTH
  }
}

export function resendCode() {
  return {
    type: types.LOGIN_RESEND_CODE
  }
}
export function forgotPasswordRequest(payload) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: {
      email: payload.email
    }
  }
}

export function resetPasswordRequest() {
  return {
    type: types.RESET_PASSWORD_REQUEST
  }
}
export function showResetPasswordForm() {
  return {
    type: types.AUTH_FORM_SHOW,
    payload: {
      authFormShow: 'newPasswordShow'
    }
  }
}

export function changePassword(payload) {
  return {
    type: types.CHANGE_PASSWORD_REQUEST,
    payload: {
      oldPassword: payload.oldPassword,
      newPassword: payload.newPassword
    }
  }
}

export function sendConfirmResetPassword(payload) {
  return {
    type: types.SEND_CONFIRM_RESET_NEW_PASSWORD_REQUEST,
    payload: {
      loginPassword: payload.loginpassword
    }
  }
}

export function setActiveLocation(payload) {
  return {
    type: types.USER_SET_ACTIVE_LOCATION,
    payload: {
      activeLocation: payload.location
    }
  }
}
export function setActiveLocationTimeZone(payload) {
  return {
    type: types.USER_SET_ACTIVE_TIME_ZONE,
    payload: {
      activeTimeZone: payload.timeZone
    }
  }
}
export function unsubscribe(payload) {
  return {
    type: types.UNSUBSCRIBE,
    payload: {
      token: payload.subscriptionToken,
      types: payload.emailSubscriptionTypes
    }
  }
}
export function signOut() {
  return {
    type: types.SUPERADMIN_LOGOUT
  }
}
