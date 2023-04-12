import React, { useEffect } from 'react'
import { propTypes, reset } from 'redux-form'

import SubmitButton from 'components/Form/SubmitButton'
import Typography from 'components/Typography'
import Form from 'components/Form'
import FormField from 'components/Form/Field'
import * as forms from 'constants/forms'
import * as schemas from 'constants/schemas'
import TextField from 'fields/Text'
import { mapContactAsToSubmit } from 'lib/landing'
import CONTACT_AS_SMALL_MUTATION from 'gql/mutations/All/contactAs.gql'
import useDispatch from 'hooks/useDispatch'

import withForm from 'hoc/withForm'

import useStyles from './styles'

function ContactForm(props) {
  const {
    handleSubmit,
    submitting,
    submitSucceeded,
    form
  } = props

  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    submitSucceeded && dispatch(reset(form))
  }, [submitSucceeded])
  return (
    <Form
      className={classes.root} onSubmit={handleSubmit}
    >
      <div className={classes.twoColumns}>
        <FormField
          className={classes.textField}
          component={TextField}
          margin='none'
          name='firstName'
          label='Your Name'
          type='text'
        />

        <FormField
          className={classes.textField}
          component={TextField}
          margin='none'
          name='email'
          label='Your Email'
          type='text'
        />
      </div>

      <SubmitButton
        endIcon={<></>}
        className={classes.submit}
        type='submit'
        disabled={submitting}
      >
        Jump In
      </SubmitButton>
      <Typography
        variant='h4'
        className={classes.agreeLabel}
      >
        You agree with the processing of your personal data by Quaffed as described in our Privacy Notice.
      </Typography>
    </Form>
  )
}

ContactForm.propTypes = propTypes

export default withForm({
  form: forms.CONTACT_AS_SMALL,
  cast: mapContactAsToSubmit,
  mutation: CONTACT_AS_SMALL_MUTATION,
  schema: schemas.CONTACT_AS_SMALL_SCHEMA,
  destroyOnUnmount: true
})(ContactForm)
