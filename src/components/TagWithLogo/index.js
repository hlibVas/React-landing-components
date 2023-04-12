import React from "react";
import Carousel from "react-elastic-carousel";

import { landingTags as landingTagsCollection } from "constants/landingTags";
import ButtonPrimary from "components/Button/Primary";
import useDispatch from "hooks/useDispatch";
import { pushRoute } from "actions/router";

import Typography from "components/Typography";

import useStyles from "./styles";

const darkBlockContent = (props) => {
  const { isDownXs, type } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      {isDownXs ? (
        <Carousel
          className={classes.carousel}
          itemsToShow={1}
          pagination
          showArrows={false}
          aria-label="Go to next slide"
        >
          {landingTagsCollection[type]?.map((data, i) => (
            <div className={classes.darkBlockRoot} key={i}>
              <div className={classes.darkBlockLogo}>{data.logo}</div>
              <Typography
                variant="button"
                className={classes.darkBlockFirstLabel}
              >
                {data.firstLabel}
              </Typography>
              <Typography
                variant="h6"
                className={classes.darkBlockSecondarylabel}
              >
                {data.secondLabel}
              </Typography>
              <ButtonPrimary
                className={classes.darkBlockButton}
                onClick={() => dispatch(pushRoute(data.buttonLink))}
              >
                {data.buttonLabel}
              </ButtonPrimary>
            </div>
          ))}
        </Carousel>
      ) : (
        landingTagsCollection[type]?.map((data, i) => (
          <div className={classes.darkBlockRoot} key={i}>
            <div className={classes.darkBlockLogo}>{data.logo}</div>
            <Typography
              variant="subtitle2"
              className={classes.darkBlockFirstLabel}
            >
              {data.firstLabel}
            </Typography>
            <Typography
              variant="h6"
              className={classes.darkBlockSecondarylabel}
            >
              {data.secondLabel}
            </Typography>
            <ButtonPrimary
              className={classes.darkBlockButton}
              onClick={() => dispatch(pushRoute(data.buttonLink))}
            >
              {data.buttonLabel}
            </ButtonPrimary>
          </div>
        ))
      )}
    </>
  );
};
export default darkBlockContent;
