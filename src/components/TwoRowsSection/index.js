import React from "react";
import cx from "clsx";
import { landingTags as landingTagsCollection } from "constants/landingTags";

import Typography from "components/Typography";
import LazyComponent from "components/LazyLoader";
import ButtonPrimary from "components/Button/Primary";
import Button from "components/Button";
import CutLabel from "components/Landing/CutLabel";

import useDispatch from "hooks/useDispatch";
import useMediaQuery from "hooks/useMediaQuery";

import useStyles from "./styles";
import { pushRoute } from "actions/router";

function TwoRows(props) {
  const {
    type,
    leftText,
    rightAdronment,
    centerText,
    onlyText,
    imageClassName,
    lazy,
  } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const headerRoot = cx(classes.headerRoot, centerText && classes.centerText);
  const isDownXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const textColumn = () => {
    return landingTagsCollection[type].map((data, i) => (
      <div className={headerRoot} key={i}>
        <Typography
          variant={isDownXs ? "subtitle2" : data.firstLabelVariant}
          className={classes.primarylabel}
        >
          {data.firstLabel}
        </Typography>
        {data.thirdLabel && (
          <Typography variant="button" className={classes.thirdLabel}>
            {data.thirdLabel}&nbsp;&trade;
          </Typography>
        )}
        {data.secondLabel && (
          <Typography className={classes.secondaryLabel}>
            {isDownXs ? (
              <CutLabel>{data.secondLabel}</CutLabel>
            ) : (
              <> {data.secondLabel} </>
            )}
          </Typography>
        )}

        <div className={classes.buttons}>
          {data.buttonLabel &&
            (data.buttonPart ? (
              <ButtonPrimary
                href={`${data.buttonLink}${data.buttonPart}`}
                className={classes.primaryButton}
                // onClick={() => dispatch(pushRoute(data.buttonLink))}
              >
                {data.buttonLabel}
              </ButtonPrimary>
            ) : (
              <ButtonPrimary
                className={classes.primaryButton}
                onClick={() => dispatch(pushRoute(data.buttonLink))}
              >
                {data.buttonLabel}
              </ButtonPrimary>
            ))}

          {data.buttonSecondaryLabel &&
            (data.buttonSecondaryLinkPart ? (
              <Button
                className={classes.secondaryButton}
                href={`${data.buttonSecondaryLink}${data.buttonSecondaryLinkPart}`}
              >
                {data.buttonSecondaryLabel}
              </Button>
            ) : (
              <Button
                className={classes.secondaryButton}
                onClick={() => dispatch(pushRoute(data.buttonSecondaryLink))}
              >
                {data.buttonSecondaryLabel}
              </Button>
            ))}
        </div>
      </div>
    ));
  };

  const adrotmentRoot = () => {
    return <div className={classes.adrotmentRoot}>{rightAdronment}</div>;
  };

  const imageColumn = () => {
    return landingTagsCollection[type].map((data, i) => {
      return lazy ? (
        <LazyComponent
          key={i}
          className={imageClassName}
          src={`Landing/${
            data.imageMobile && isDownXs ? data.imageMobile : data.image
          }`}
          alt={data.alt}
        ></LazyComponent>
      ) : (
        <img
          className={imageClassName}
          src={`Landing/${
            data.imageMobile && isDownXs ? data.imageMobile : data.image
          }`}
          alt={data.alt}
          key={i}
        />
      );
    });
  };

  return (
    <>
      <div className={classes.leftColumn}>
        {leftText ? textColumn() : imageColumn()}
      </div>

      {onlyText ? null : (
        <div className={classes.rightColumn}>
          {rightAdronment
            ? adrotmentRoot()
            : leftText
            ? imageColumn()
            : textColumn()}
        </div>
      )}
    </>
  );
}

export default TwoRows;
