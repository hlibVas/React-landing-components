import { reduxForm } from 'redux-form'
import set from 'object-set'

import { mutate } from 'actions/graphql'
import { progressRefresh } from 'actions/progress'

import {
  handleSubmitSuccess,
  handleSubmitFail
} from 'lib/form'

export default function withForm (options) {
  const {
    action,
    schema,
    mutation,
    cast,
    refresh,
    ...restOptions
  } = options

  const reduxFormOptions = {
    ...restOptions
  }

  const castFields = f => {
    const fields = schema
      ? schema.cast(f)
      : f

    return cast
      ? cast(fields)
      : fields
  }

  if (action) {
    reduxFormOptions.onSubmit = (fields, dispatch) =>
      dispatch(action(castFields(fields)))
        .then(handleSubmitSuccess)
        .catch(handleSubmitFail)
  }

  if (mutation) {
    reduxFormOptions.onSubmit = (fields, dispatch) =>
      dispatch(mutate({
        mutation,
        variables: {
          input: castFields(fields)
        }
      }))
        .then(handleSubmitSuccess)
        .then(() => dispatch(progressRefresh()))
        .catch(handleSubmitFail)
  }

  if (schema) {
    reduxFormOptions.shouldAsyncValidate = () => true
    reduxFormOptions.asyncValidate = asyncValidate(schema)
    reduxFormOptions.initialValues = schema.cast(options.initialValues)
  }

  return reduxForm(reduxFormOptions)
}

const asyncValidate = schema => values =>
  schema
    .validate(values, { abortEarly: false })
    .then(() => {})
    .catch((errors) => {
      const formErrors = {}

      errors.inner.forEach((error) => {
        set(formErrors, error.path, error.message)
      })

      throw formErrors
    })
