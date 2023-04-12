import React from "react";
import cx from "clsx";
import Typography from "components/Typography";
import ContactForm from "forms/ConsumerLanding/ContactUs";

import Phonecon from "icons/Landing/Phone";
import Emailcon from "icons/Landing/Email";
import FaxIcon from "icons/Landing/Fax";
import LocationIcon from "icons/Landing/Location";

import useStyles from "./styles";

const HomePage = (props) => {
  const { isDownXs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftColumt}>
        <div className={classes.headerRoot}>
          <Typography
            variant={isDownXs ? "subtitle2" : "h1"}
            className={classes.mailLabel}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" className={classes.secLabel}>
            Let’s get in touch!
          </Typography>
        </div>
        <div className={classes.socialMediaRoot}>
          <div className={classes.contactBox}>
            <div className={classes.icon}>
              <Phonecon />
            </div>
            <Typography variant="h6" className={classes.linkLabel}>
              437-370-0132
            </Typography>
          </div>

          <div className={classes.contactBox}>
            <div className={classes.icon}>
              <Emailcon />
            </div>
            <Typography
              variant="h6"
              className={cx(classes.linkLabel, classes.borderLabel)}
            >
              info@test.ca
            </Typography>
          </div>

          <div className={classes.contactBox}>
            <div className={classes.icon}>
              <FaxIcon />
            </div>
            <Typography variant="h6" className={classes.linkLabel}>
              416-663-8912
            </Typography>
          </div>

          <div className={classes.contactBox}>
            <div className={classes.icon}>
              <LocationIcon />
            </div>
            <Typography variant="h6" className={classes.linkLabel}>
              125 Norfinch Drive, Toronto, Ontario, M3N 1W8
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.secondColumn}>
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
