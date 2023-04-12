import React, { useEffect } from 'react'
import { propTypes, reset } from 'redux-form'

import SubmitButton from 'components/Form/SubmitButton'
import Typography from 'components/Typography'
import Form from 'components/Form'
import FormField from 'components/Form/Field'

import TextField from 'fields/Text'
import * as forms from 'constants/forms'
import * as schemas from 'constants/schemas'
import { mapContactAsLargeToSubmit } from 'lib/landing'
import useDispatch from 'hooks/useDispatch'

import CONTACT_AS_SMALL_MUTATION from 'gql/mutations/All/contactAs.gql'

import withForm from 'hoc/withForm'

import useStyles from './styles'

function ContactForm (props) {
  const {
    handleSubmit,
    submitting,
    form,
    submitSucceeded
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

      <FormField
        className={classes.wideTextField}
        multiline
        maxRows={7}
        height={200}
        component={TextField}
        margin='none'
        name='message'
        label='Your Message'
        type='text'
      />

      <SubmitButton
        endIcon
        className={classes.submit}
        type='submit'
        disabled={submitting}
      >
        Submit
      </SubmitButton>
      <Typography
        variant='h4'
        className={classes.agreeLabel}
      >
        You&nbsp;agree&nbsp;with&nbsp;the&nbsp;processing of&nbsp;your&nbsp;personal&nbsp;data by&nbsp;Quaffed as&nbsp;described in&nbsp;our&nbsp;Privacy&nbsp;Notice.
      </Typography>
    </Form>
  )
}

ContactForm.propTypes = propTypes

export default withForm({
  form: forms.CONTACT_AS_LARGE,
  mutation: CONTACT_AS_SMALL_MUTATION,
  cast: mapContactAsLargeToSubmit,
  schema: schemas.CONTACT_AS_LARGE_SCHEMA,
  destroyOnUnmount: true
})(ContactForm)
