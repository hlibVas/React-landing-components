import React, { useState, useEffect } from "react";
import { propTypes } from "redux-form";
import cx from "clsx";
import { add } from "date-fns";

import SubmitButton from "components/Form/SubmitButton";
import Typography from "components/Typography";
import Form from "components/Form";
import FormField from "components/Form/Field";
import DayPickerField from "fields/DayPicker";

import FlagPhoneField from "fields/FlagAndPhoneCode";
import TextField from "fields/Text";

import * as forms from "constants/forms";
import * as schemas from "constants/schemas";
import useSelector from "hooks/useSelector";

import { mapConsumersSignUpToSubmit } from "lib/landing";
import CONSUMER_SIGN_UP_MUTATION from "gql/mutations/Consumer/Create.gql";
import useDispatch from "hooks/useDispatch";
import { resetNotification } from "actions/notification";

import logo from "image/Logo.webp";
import CheckboxWhiteIcon from "icons/CheckboxWhite";
import ArrowWithoutLineIcon from "icons/RightArrowWithoutLine";
import LogoCopyrigt120X120Icon from "icons/Landing/LogoCopyrigt120X120";
import { authFormShow } from "actions/user";
import withForm from "hoc/withForm";

import useStyles from "./styles";

function SignUpForm(props) {
  const { handleSubmit, submitting, change, submitSucceeded } = props;
  const dispatch = useDispatch();
  const [age, setAge] = React.useState(add(new Date(), { years: -18 }));
  const handleChange = (name, value) => {
    setAge(value);
    change(name, age);
  };
  const [checked, setChecked] = useState(false);
  function handleCheck() {
    setChecked(!checked);
  }
  const classes = useStyles();
  useEffect(() => {
    submitSucceeded && dispatch(authFormShow({ authFormShow: "succesShow" }));
  }, [submitSucceeded]);
  const notification = useSelector((state) => state?.notification?.message);
  useEffect(() => {
    return () => dispatch(resetNotification());
  }, []);
  return (
    <Form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.header}>
        <img className={classes.logoImage} src={logo} alt="Logotype" />
        <div className={classes.logoIcon}>
          <LogoCopyrigt120X120Icon />
        </div>
      </div>
      <div className={classes.content}>
        <Typography variant="h4" className={classes.label}>
          First Name
        </Typography>

        <FormField
          component={TextField}
          margin="none"
          name="firstName"
          label="First Name"
          type="text"
          inputClassName={classes.input}
        />

        <Typography variant="h4" className={classes.label}>
          Last Name
        </Typography>
        <FormField
          component={TextField}
          margin="none"
          name="lastName"
          label="Last Name"
          type="text"
          inputClassName={classes.input}
        />

        <Typography variant="h4" className={classes.label}>
          Email
        </Typography>
        <FormField
          component={TextField}
          margin="none"
          name="email"
          label="Email"
          type="text"
          inputClassName={classes.input}
        />

        <Typography variant="h4" className={classes.label}>
          Phone
        </Typography>
        <FormField
          component={FlagPhoneField}
          change={change}
          margin="none"
          name="phoneNumber"
          type="text"
          customHeight={48}
        />
        <Typography variant="h4" className={classes.label}>
          Birthday
        </Typography>
        <DayPickerField
          rootClassName={classes.dayRoot}
          value={age}
          fieldName="birthday"
          maxDate={add(new Date(), { years: -12 })}
          change={handleChange}
        />
        <Typography className={classes.error} variant="h5">
          {notification &&
            "Please contact Quaffed team at info@quaffed.ca and they will add you to this Salon"}
        </Typography>

        <div className={classes.checkboxRoot}>
          <div
            onClick={handleCheck}
            className={cx(classes.tag, checked && classes.activeTag)}
          >
            <CheckboxWhiteIcon />
          </div>
          <a
            className={classes.link}
            target="_blank"
            href=""
            rel="nofollow noopener noreferrer"
          >
            I Accept Terms and Conditions
          </a>
        </div>

        <SubmitButton
          loading={submitting}
          endIcon={<ArrowWithoutLineIcon />}
          className={classes.submit}
          type="submit"
          disabled={!checked || submitting}
        >
          Sign Up
        </SubmitButton>
      </div>
    </Form>
  );
}

SignUpForm.propTypes = propTypes;

export default withForm({
  form: forms.CONSUMER_SIGN_UP,
  schema: schemas.CONSUMER_SIGN_UP_SCHEMA,
  cast: mapConsumersSignUpToSubmit,
  mutation: CONSUMER_SIGN_UP_MUTATION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(SignUpForm);
