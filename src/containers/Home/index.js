import React from "react";
import cx from "clsx";

import HorizontalTag from "components/Landing/TagWithLogo/Horizontal";
import VerticalTag from "components/Landing/TagWithLogo/Vertical";
import TwoRowsSection from "components/Landing/TwoRowsSection";
import DarkBlockTag from "components/Landing/TagWithLogo";

import BacgroundIcons from "components/Landing/BackgroundIcons";

import ContactForm from "forms/ContactForClients";

import useStyles from "./styles";

const HomePage = (props) => {
  const { isDownXs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={cx(classes.section, classes.section_1)}>
        <BacgroundIcons type="h_1" />
        <TwoRowsSection
          type="home1Section"
          leftText
          centerText={!isDownXs}
          imageClassName={classes.largeImageRoot}
          lazy={true}
        />
      </div>

      <div className={cx(classes.section, classes.section_2)}>
        <BacgroundIcons type="h_2" />
        <DarkBlockTag type="homeDark" isDownXs={isDownXs} />
      </div>

      <div className={classes.whiteBackground}>
        <BacgroundIcons type="h_3" />
        <div className={cx(classes.section, classes.section_3)}>
          <HorizontalTag
            isDownXs={isDownXs}
            className={classes.horizontalTags}
            type="homeHotizontal"
            label="How It Works"
          />
        </div>
      </div>

      <div className={cx(classes.section, classes.section_4)}>
        <BacgroundIcons type="h_4" />
        <TwoRowsSection
          type="home4Section"
          centerText={!isDownXs}
          leftText={isDownXs}
          imageClassName={classes.imageRoot}
        />
      </div>

      <div className={classes.whiteBackground}>
        <BacgroundIcons type="h_5" />
        <div className={cx(classes.section, classes.section_5)}>
          <TwoRowsSection
            type="home5Section"
            leftText
            rightAdronment={
              isDownXs ? (
                <HorizontalTag isDownXs={isDownXs} type="homeVertical" />
              ) : (
                <VerticalTag type="homeVertical" />
              )
            }
          />
        </div>
      </div>

      <div className={cx(classes.section, classes.section_6)}>
        <TwoRowsSection
          type="home6Section"
          leftText={isDownXs}
          imageClassName={classes.medImageRoot}
        />
      </div>

      <div className={classes.whiteBackground}>
        <div className={cx(classes.section, classes.section_7)}>
          <TwoRowsSection
            type="home7Section"
            leftText
            rightAdronment={<ContactForm />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
