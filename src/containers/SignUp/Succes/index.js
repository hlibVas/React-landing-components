import React, { useEffect } from "react";
import upperFirst from "lodash/upperFirst";
import useDispatch from "hooks/useDispatch";
import ButtonPrimary from "components/Button/Primary";
import Typography from "components/Typography";

import CheckIcon from "icons/Check";

import AppStore from "image/AppStore.webp";
import GooglePlay from "image/GooglePlay.webp";
import { authFormShow } from "actions/user";
import useStyles from "./styles";

function Succes({ brandName }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(authFormShow({ authFormShow: "loginShow" }));
  }, []);
  return (
    <div className={classes.root}>
      <CheckIcon className={classes.checkIcon} color="primary.main" />
      <Typography className={classes.firstLabel}>
        Welcome to <br />
        {`${upperFirst(brandName)}!`}
      </Typography>

      <Typography variant="h4" className={classes.label}>
        You registered successfully!
      </Typography>
      <Typography variant="h4" className={classes.label}>
        Please Download application from the Store below and then go to the link
        in received email.
      </Typography>
      <div className={classes.buttonBlock}>
        <ButtonPrimary
          className={classes.buttonAppStore}
          href=""
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            className={classes.imageAppStore}
            src={AppStore}
            alt="App Store logotype"
          />
        </ButtonPrimary>
        <ButtonPrimary
          className={classes.buttonGooglePlay}
          href=""
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img
            className={classes.imageGooglePlay}
            src={GooglePlay}
            alt="Google Play logotype"
          />
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default Succes;
