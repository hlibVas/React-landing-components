import toLower from 'lodash/toLower'
import { format } from 'date-fns'

export const mapContactAsToSubmit = fields => {
  const {
    email,
    firstName
  } = fields

  return {
    senderName: firstName,
    senderEmail: toLower(email)
  }
}
export const mapContactAsLargeToSubmit = fields => {
  const {
    email,
    firstName,
    message
  } = fields

  return {
    senderName: firstName,
    senderEmail: toLower(email),
    message
  }
}

export const mapConsumersSignUpToSubmit = fields => {
  const {
    email,
    firstName,
    lastName,
    phoneNumber,
    id,
    birthday
  } = fields
  return {
    lastName,
    firstName,
    email: toLower(email),
    phoneNumber: `+${phoneNumber.replace(/ /gi, '').replace(/\(/gi, '').replace(/\)/gi, '').replace(/-/gi, '')}`,
    admins: [],
    brand: {
      id: id
    },
    birthday: format(new Date(birthday), "yyyy-MM-dd'T'hh:mm:ssXXX")
  }
}
