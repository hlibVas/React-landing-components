import React from "react";

import SignUpForm from "forms/SiignUp";
import Succes from "./Succes";

import useSelector from "hooks/useSelector";

import useStyles from "./styles";

function ConsumerSingUp(props) {
  const classes = useStyles();

  const initiateAuthFormShow = useSelector((state) => state.user.authFormShow);
  const pathname = useSelector((state) => state.router.location.pathname);
  const brandName = useSelector(
    (state) => state.router.location?.query.brandName
  )?.replace(/%20/g, " ");
  const brandId = pathname.split("/")[1];
  return (
    <div className={classes.root}>
      {initiateAuthFormShow === "loginShow" && (
        <SignUpForm initialValues={{ id: brandId }} />
      )}
      {initiateAuthFormShow === "succesShow" && (
        <Succes brandName={brandName} />
      )}
    </div>
  );
}

export default ConsumerSingUp;
