import React from "react";

import ButtonText from "components/Button/Text";
import ButtonPrimary from "components/Button/Primary";
import ButtonIcon from "components/Button/Icon";

import RemoveIcon from "icons/Remove";
import LogoCopyrigtIcon from "icons/Landing/LogoCopyrigt";

import useStyles from "./styles";

function ConsumerHeader(props) {
  const classes = useStyles();
  const { general, closeNavigation } = props;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div
          onClick={() => {
            general("");
            closeNavigation();
          }}
          className={classes.headerLogo}
        >
          <LogoCopyrigtIcon />
        </div>
        <ButtonIcon onClick={closeNavigation} className={classes.buttonIcon}>
          <RemoveIcon color="primary.main" />
        </ButtonIcon>
      </div>
      <div className={classes.buttons}>
        <ButtonText
          className={classes.navigationButton}
          onClick={() => {
            general("salons");
            closeNavigation();
          }}
        >
          For Salons
        </ButtonText>
        <ButtonText
          className={classes.navigationButton}
          onClick={() => {
            general("clients");
            closeNavigation();
          }}
        >
          For Clients
        </ButtonText>
        <ButtonText
          className={classes.navigationButton}
          onClick={() => {
            general("contact_us");
            closeNavigation();
          }}
        >
          Contact
        </ButtonText>
      </div>
      <div className={classes.singBlock}>
        <ButtonText
          className={classes.singInButton}
          onClick={() => {
            general("login");
            closeNavigation();
          }}
        >
          Sign In to Salon
        </ButtonText>
        <ButtonPrimary
          className={classes.primaryButton}
          onClick={() => {
            general("salon_registration");
            closeNavigation();
          }}
        >
          Sign Up Now
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ConsumerHeader;
