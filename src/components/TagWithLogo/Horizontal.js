import React from "react";
import cx from "clsx";
import Carousel from "react-elastic-carousel";

import { landingTags as landingTagsCollection } from "constants/landingTags";

import CutLabel from "components/Landing/CutLabel";
import Typography from "components/Typography";

import useStyles from "./styles";
const HorizontalTag = (props) => {
  const { type, label, isDownXs, hotizontalClassName } = props;
  const classes = useStyles();
  return (
    <div className={label && classes.centerColumn}>
      {label && (
        <Typography
          variant="subtitle2"
          className={cx(classes.sectionLabel, classes.fullWidth)}
        >
          {label}
        </Typography>
      )}

      <div className={cx(classes.hotizontalRoot, hotizontalClassName)}>
        {isDownXs ? (
          <Carousel
            className={cx(classes.carousel, classes.whiteCarousel)}
            itemsToShow={1.3}
            pagination
            showArrows={false}
            aria-label="Go to next slide"
          >
            {landingTagsCollection[type].map((data, i) => (
              <div className={classes.horizontalBenefitRoot} key={i}>
                <div className={classes.logo}>{data.logo}</div>
                <Typography variant="button">{data.firstLabel}</Typography>
                <div className={classes.containerSecondaryTitle}>
                  <Typography variant="caption">
                    <CutLabel>{data.secondLabel}</CutLabel>
                  </Typography>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          landingTagsCollection[type].map((data, i) => (
            <div className={classes.horizontalBenefitRoot} key={i}>
              <div className={classes.logo}>{data.logo}</div>
              <Typography variant="button">{data.firstLabel}</Typography>
              <div className={classes.containerSecondaryTitle}>
                <Typography variant="caption"> {data.secondLabel}</Typography>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default HorizontalTag;
