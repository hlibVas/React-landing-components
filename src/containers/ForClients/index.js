import React from "react";
import cx from "clsx";

import Typography from "components/Typography";
import BacgroundIcons from "components/BackgroundIcons";
import TwoRowsSection from "components/TwoRowsSection";
import MapSection from "components/Map";
import ButtonText from "components/Button/Text";

import DotIcon from "icons/Dot";

import ContactForm from "forms/ConsumerLanding/ContactForClients";

import useStyles from "./styles";

const HomePage = (props) => {
  const { isDownXs } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={cx(classes.section, classes.section_1)}>
        <BacgroundIcons type="c_1" />
        <Typography
          variant={isDownXs ? "subtitle2" : "h1"}
          className={classes.sectionLabel}
        >
          Find your nearest salon
        </Typography>
        <Typography variant="button" className={classes.sectionSecondLabel}>
          Please Follow The Easy Steps Below To Join Our
        </Typography>
        <div className={classes.tagBox}>
          <div className={classes.icon}>
            <DotIcon color="primary.main" />
          </div>
          <Typography
            variant={isDownXs ? "caption" : "h6"}
            className={classes.linkLabel}
          >
            Enter your address to locate the nearest Our Salon.
          </Typography>
        </div>
        <div className={classes.tagBox}>
          <div className={classes.icon}>
            <DotIcon color="primary.main" />
          </div>
          <Typography
            variant={isDownXs ? "caption" : "h6"}
            className={classes.linkLabel}
          >
            Click any red dot (Our Salons) and then click “Get Invited”.
          </Typography>
        </div>
        <div className={classes.tagBox}>
          <div className={classes.icon}>
            <DotIcon color="primary.main" />
          </div>
          <Typography
            variant={isDownXs ? "caption" : "h6"}
            className={classes.linkLabel}
          >
            Fill out the form with your information.
          </Typography>
        </div>
      </div>

      <div className={cx(classes.section, classes.section_2)}>
        <MapSection isDownXs={isDownXs} />
      </div>

      <div className={cx(classes.section, classes.section_3)}>
        <Typography
          variant={isDownXs ? "button" : "subtitle2"}
          className={classes.sectionLabel}
        >
          Looking to shop, but don’t see a familiar salon?
        </Typography>
        <ButtonText
          className={classes.navigationButton}
          href=""
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Click Here
        </ButtonText>
      </div>

      <div className={classes.whiteBackground}>
        <div className={cx(classes.section, classes.section_4)}>
          <TwoRowsSection
            type="clients5section"
            leftText
            rightAdronment={<ContactForm />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
