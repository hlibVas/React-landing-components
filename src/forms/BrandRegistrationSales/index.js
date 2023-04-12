import React, { useState, useEffect } from 'react'
import { propTypes } from 'redux-form'
import cx from 'clsx'

import SubmitButton from 'components/Form/SubmitButton'
import Typography from 'components/Typography'
import Form from 'components/Form'
import FormField from 'components/Form/Field'
import CodeField from 'fields/Code'
import ButtonPrimary from 'components/Button/Primary'

import FlagPhoneField from 'fields/FlagAndPhoneCode'
import TextField from 'fields/Text'

import * as forms from 'constants/forms'
import * as schemas from 'constants/schemas'

import useSelector from 'hooks/useSelector'
import useDispatch from 'hooks/useDispatch'

import { resetNotification } from 'actions/notification'
import { sendBrandRequestCode, sendBrandRequestSalesToken } from 'actions/brands'

import CheckboxWhiteIcon from 'icons/CheckboxWhite'
import withForm from 'hoc/withForm'

import useStyles from './styles'

function BrandRegistrationSales(props) {
  const {
    submitting,
    change,
    handleSubmit
  } = props
  const dispatch = useDispatch()
  const [accountNum, setAccountNum] = useState(true)

  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }
  const [sendCode, setSendCode] = useState(false)
  const values = useSelector(state => state.form?.[forms?.BRAND_SING_UP_SALES]?.values)
  const handleSend = () => {
    if (values?.phoneNumber) {
      dispatch(sendBrandRequestCode({ phoneNumber: values?.phoneNumber }))
      setSendCode(true)
    }
  }

  let sendCodeNumber = values?.phoneNumber?.replace(/ /gi, '')?.replace(/\(/gi, '')?.replace(/\)/gi, '')?.replace(/-/gi, '')
  sendCodeNumber = sendCodeNumber && `****${sendCodeNumber[sendCodeNumber.length - 4]}${sendCodeNumber[sendCodeNumber.length - 3]}${sendCodeNumber[sendCodeNumber.length - 2]}${sendCodeNumber[sendCodeNumber.length - 1]}`
  useEffect(() => {
    return () => dispatch(resetNotification())
  }, [])
  const sendCodeRedux = useSelector(state => state?.user?.sendCode)
  const notification = useSelector(state => state?.notification?.message)
  useEffect(() => {
    if (notification) { setTimeout(() => dispatch(resetNotification()), 12000) }
  }, [sendCodeRedux])

  const classes = useStyles(sendCode)
  return (
    <Form
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <div className={classes.content}>

        <Typography variant='h4' className={classes.label}>Salon Name</Typography>

        <FormField
          component={TextField}
          margin='none'
          name='title'
          label='Title'
          type='text'
        />

        <Typography variant='h4' className={classes.label}>Salon Address</Typography>
        <FormField
          component={TextField}
          margin='none'
          name='address'
          label='Salon Address'
          type='text'
        />

        <Typography variant='h4' className={classes.label}>First Name</Typography>
        <FormField
          component={TextField}
          margin='none'
          name='firstName'
          label='Name'
          type='text'
        />
        <Typography variant='h4' className={classes.label}>Last Name</Typography>
        <FormField
          component={TextField}
          margin='none'
          name='lastName'
          label='Name'
          type='text'
        />
        <Typography variant='h4' className={classes.label}>Email</Typography>
        <FormField
          component={TextField}
          margin='none'
          name='email'
          label='Email'
          type='text'
        />

        <Typography variant='h4' className={classes.label}>Sales Rep Email</Typography>
        <FormField
          component={TextField}
          margin='none'
          name='salesRepEmail'
          label='Email'
          type='text'
        />

        <Typography variant='h4' className={classes.label}>Do you have CanRad Account number? </Typography>
        <div className={classes.radio}>
          <div className={classes.radioTag} onClick={() => setAccountNum(true)}>
            <div className={cx(classes.radioCheckbox, accountNum ? classes.checked : classes.unChecked)} />
            <Typography variant='h4' className={classes.tagLabel}>Yes</Typography>
          </div>

          <div className={classes.radioTag} onClick={() => setAccountNum(false)}>
            <div className={cx(classes.radioCheckbox, !accountNum ? classes.checked : classes.unChecked)} />
            <Typography variant='h4' className={classes.tagLabel}>No</Typography>
          </div>
        </div>

        {accountNum
          ? (
            <>
              <Typography variant='h4' className={classes.label}>CanRad Account number</Typography>
              <FormField
                component={TextField}
                margin='none'
                name='accountNum'
                label='Account Number'
                type='text'
              />
            </>)
          : (
            <>
              <Typography variant='h4' className={classes.label}>Hairstylist license</Typography>
              <FormField
                component={TextField}
                margin='none'
                name='license'
                label='License'
                type='text'
              />
            </>)}

        <Typography variant='h4' className={classes.label}>Phone</Typography>
        <FormField
          component={FlagPhoneField}
          change={change}
          margin='none'
          name='phoneNumber'
          type='text'
          customHeight={58}
        />

        {/* {sendCode &&
          (
            <>
              <Typography variant='h4' className={classes.codeLabel}> {`Enter the code you received
          to ${sendCodeNumber}`}
              </Typography>
              <FormField
                boxClassName={classes.codeField}
                autoFocus
                component={CodeField}
                name='verificationCode'
                inputMode='numeric'
                length={4}
                required
              />
              <Typography
                variant='h4'
                className={cx(classes.resendCode, (!(values?.phoneNumber?.replace(/ /gi, '')?.replace(/\(/gi, '')?.replace(/\)/gi, '')?.replace(/-/gi, '')?.length > 10)) && classes.disabled, sendCodeRedux && classes.disabled)}
                onClick={() => { if (!sendCodeRedux) { handleSend() } }}
              > Resend code
              </Typography>
              {sendCodeRedux && !notification &&
                <Typography
                  variant='tag' className={classes.sendCode}
                >A text message with a verification code was just sent to you.
                </Typography>}
              {notification && <Typography variant='h4' className={classes.error}>{notification}</Typography>}
            </>
          )} */}
        <div className={classes.checkboxRoot}>
          <div
            onClick={handleCheck}
            className={cx(classes.tag, checked && classes.activeTag)}
          >
            <CheckboxWhiteIcon />
          </div>
          <a
            className={classes.link}
            target='_blank'
            href='https://quaffed.ca/termsandconditions'
            rel='nofollow noopener noreferrer'
          >
            I Accept Terms and Conditions
          </a>
        </div>
        {/* {sendCode
          ? ( */}
        <SubmitButton
          endIcon
          loading={submitting}
          className={classes.submit}
          type='submit'
          disabled={!checked || !values?.address ||
            !(/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/.test(values?.email)) ||
            !(/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/.test(values?.salesRepEmail)) ||
            !values?.firstName ||
            !values?.lastName ||
            !(values?.phoneNumber?.replace(/ /gi, '')?.replace(/\(/gi, '')?.replace(/\)/gi, '')?.replace(/-/gi, '')?.length > 10) ||
            !values?.title ||
            !((accountNum && values?.accountNum) || values?.license)
            // || !(values?.verificationCode?.length > 3)
            || submitting}
        >
          Sign Up
        </SubmitButton>
        {/* ) */}
        {/* : (
            <ButtonPrimary
              onClick={() => handleSend()}
              className={classes.submit}
              disabled={!checked || !values?.address ||
                !(/^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/.test(values?.email)) ||
                !values?.firstName ||
                !values?.lastName ||
                !(values?.phoneNumber?.replace(/ /gi, '')?.replace(/\(/gi, '')?.replace(/\)/gi, '')?.replace(/-/gi, '')?.length > 10) ||
                !values?.title ||
                !((accountNum && values?.accountNum) || values?.license)}
            >
              Send Code
            </ButtonPrimary>)} */}
      </div>
    </Form>
  )
}

BrandRegistrationSales.propTypes = propTypes

export default withForm({
  form: forms.BRAND_SING_UP_SALES,
  schema: schemas.BRAND_SIGN_UP_SALES_SCHEMA,
  action: sendBrandRequestSalesToken,
  destroyOnUnmount: true,
  enableReinitialize: true
})(BrandRegistrationSales)
