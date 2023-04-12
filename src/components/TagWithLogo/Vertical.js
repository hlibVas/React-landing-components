import React from "react";
import { landingTags as landingTagsCollection } from "constants/landingTags";

import Typography from "components/Typography";

import useStyles from "./styles";

function VerticalTag(props) {
  const { type } = props;
  const classes = useStyles();

  return (
    <>
      {landingTagsCollection[type].map((data, i) => (
        <div className={classes.vericalRoot} key={i}>
          <div className={classes.logo}>{data.logo}</div>
          <div className={classes.verticalLabelRoot}>
            <Typography className={classes.labelPrimary} variant="button">
              {data.firstLabel}
            </Typography>
            <Typography variant="caption">{data.secondLabel}</Typography>
          </div>
        </div>
      ))}
    </>
  );
}

export default VerticalTag;
