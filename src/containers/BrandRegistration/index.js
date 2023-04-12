import React from "react";

import Typography from "components/Typography";
import BrandRegistrationForm from "forms/ConsumerLanding/BrandRegistration";

import SchedulerMedIcon from "icons/Landing/SchedulerMed";
import ShopMedIcon from "icons/Landing/ShopMed";
import DollarMedIcon from "icons/Landing/DollarMed";

import useStyles from "./styles";
import Succes from "./succes";

const SalonRegistrationPage = (props) => {
  const { activeTab, general, isDownXs } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {activeTab === "succes_registration" ? (
        <Succes />
      ) : (
        <div className={classes.content}>
          <div className={classes.leftColumt}>
            <div className={classes.headerRoot}>
              <Typography
                variant={isDownXs ? "subtitle2" : "h1"}
                className={classes.mainLabel}
              >
                {"Salon \n Registration"}
              </Typography>
              <Typography variant="h6" className={classes.secLabel}>
                Apply to be an our salon.
              </Typography>
            </div>
            {isDownXs && <BrandRegistrationForm general={general} />}
            <div className={classes.socialMediaRoot}>
              <div className={classes.contactBox}>
                <SchedulerMedIcon />
                <Typography variant="h6" className={classes.tagLabel}>
                  Appointment Scheduling
                </Typography>
              </div>

              <div className={classes.contactBox}>
                <ShopMedIcon />
                <Typography variant="h6" className={classes.tagLabel}>
                  Online Product Catalogue
                </Typography>
              </div>

              <div className={classes.contactBox}>
                <DollarMedIcon />
                <Typography variant="h6" className={classes.tagLabel}>
                  Exclusive Offers
                </Typography>
              </div>
            </div>
          </div>
          {!isDownXs && (
            <div className={classes.secondColumn}>
              <BrandRegistrationForm general={general} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SalonRegistrationPage;
