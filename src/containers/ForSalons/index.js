import React from "react";
import cx from "clsx";

import HorizontalTag from "components/TagWithLogo/Horizontal";
import VerticalTag from "components/TagWithLogo/Vertical";
import BacgroundIcons from "components/BackgroundIcons";
import TwoRowsSection from "components/TwoRowsSection";

import ContactForm from "forms/ContactForClients";

import useStyles from "./styles";

const ForSalonsPage = (props) => {
  const { isDownXs } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={cx(classes.section, classes.section_1)}>
        <TwoRowsSection
          type="salons1section"
          leftText
          imageClassName={classes.largeImageRoot}
        />
      </div>

      <div className={classes.whiteBackground}>
        <BacgroundIcons type="s_1" />
        <div className={cx(classes.section, classes.section_2)}>
          <TwoRowsSection
            type="salons2section"
            leftText
            rightAdronment={
              isDownXs ? (
                <HorizontalTag
                  isDownXs={isDownXs}
                  hotizontalClassName={classes.hotizontalRoot}
                  type="salonsVertical"
                />
              ) : (
                <VerticalTag type="salonsVertical" />
              )
            }
          />
        </div>
      </div>

      <div className={cx(classes.section, classes.section_3)}>
        <BacgroundIcons type="s_2" />
        <TwoRowsSection
          type="salons3section"
          leftText
          centerText={!isDownXs}
          imageClassName={classes.medImageRoot}
        />
      </div>

      <div className={classes.whiteBackground}>
        <div className={cx(classes.section, classes.section_4)}>
          <HorizontalTag
            isDownXs={isDownXs}
            type="salonsHotizontal"
            label="Virtual Storefront Admin Portal"
          />
        </div>
      </div>

      <div className={cx(classes.section, classes.section_5)}>
        <BacgroundIcons type="s_3" />
        <TwoRowsSection
          type="salons5section"
          centerText={!isDownXs}
          leftText={isDownXs}
          imageClassName={classes.imageRoot}
        />
      </div>

      <div className={classes.whiteBackground}>
        <div className={cx(classes.section, classes.section_6)}>
          <TwoRowsSection
            type="salons6section"
            leftText
            rightAdronment={<ContactForm />}
          />
        </div>
      </div>
    </div>
  );
};

export default ForSalonsPage;
