import React from "react";

import Typography from "components/Typography";
import ButtonPrimary from "components/Button/Primary";
import ButtonText from "components/Button/Text";

import { pushRoute } from "actions/router";

import useDispatch from "hooks/useDispatch";
import CheckIcon from "icons/Check";
import useStyles from "./styles";

const HomePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(
      pushRoute({
        pathname: "/",
        hash: "#root",
      })
    );
  };
  return (
    <div className={classes.succesRoot}>
      <CheckIcon
        className={classes.icon}
        color="primary.main"
        width="36"
        height="36"
      />
      <Typography variant="h1" className={classes.sucMainLabel}>
        Thank you for Signing&nbsp;Up
      </Typography>
      <Typography variant="h6" className={classes.sucSecLabel}>
        Your&nbsp;application has&nbsp;been&nbsp;received! We will be in touch{" "}
        <br />
        with you within 1 business day.
      </Typography>
      <ButtonPrimary onClick={handleBack} className={classes.buttonHome}>
        Back to Home
      </ButtonPrimary>
      <ButtonText
        className={classes.navigationButton}
        href=""
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Please click here to book 1-on-1.
      </ButtonText>
    </div>
  );
};

export default HomePage;
