import React, { useState } from "react";
import cx from "clsx";

import ConsumerHeader from "components/Landing/ConsumerHeader";
import MenuNavigation from "components/Landing/MenuNavigation";
import ConsumerFooter from "components/Landing/ConsumerFooter";

import { pushRoute } from "actions/router";
import useDispatch from "hooks/useDispatch";
import useSelector from "hooks/useSelector";
import useMediaQuery from "hooks/useMediaQuery";

import useStyles from "./styles";

import ContactUs from "./ContactUs";
import ForClients from "./ForClients";
import ForSalons from "./ForSalons";
import Home from "./Home";
import BrandRegistration from "./BrandRegistration";
import BrandRegistrationForSales from "./BrandRegistrationForSales";

const LandingPage = () => {
  const isDownXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const [navigation, setNavigation] = useState(false);
  const openNavigation = (e) => {
    setNavigation(true);
  };
  const closeNavigation = () => {
    setNavigation(false);
  };
  const pathname = useSelector((state) => state.router.location.pathname);
  const activeTab = pathname.split("/")[1];
  const dispatch = useDispatch();
  let shortPath = pathname.split("/");
  shortPath = shortPath.splice(0, shortPath?.length - 1).join("/");
  const general = (bookmark, root) => {
    if (root) {
      return dispatch(
        pushRoute({
          pathname: `/${bookmark}`,
          hash: `${root ? "#root" : ""}`,
        })
      );
    } else {
      return dispatch(pushRoute({ pathname: `${shortPath}/${bookmark}` }));
    }
  };
  const location = useSelector((state) => state.router.location);

  const classes = useStyles(open, activeTab, navigation);
  return (
    <>
      {navigation ? (
        <MenuNavigation general={general} closeNavigation={closeNavigation} />
      ) : (
        <div className={classes.root}>
          <ConsumerHeader
            className={classes.header}
            activeTab={activeTab}
            general={general}
            isDownXs={isDownXs}
            openNavigation={openNavigation}
          />
          <div className={classes.content}>
            {activeTab === "" && <Home general={general} isDownXs={isDownXs} />}
            {activeTab === "salons" && <ForSalons isDownXs={isDownXs} />}
            {activeTab === "clients" && <ForClients isDownXs={isDownXs} />}
            {activeTab === "contact_us" && <ContactUs isDownXs={isDownXs} />}
            {(activeTab === "salon_registration" ||
              activeTab === "succes_registration") && (
              <BrandRegistration
                activeTab={activeTab}
                general={general}
                isDownXs={isDownXs}
              />
            )}
            {(activeTab === "salon_registration_sales" ||
              activeTab === "succes_registration_sales") && (
              <BrandRegistrationForSales
                activeTab={activeTab}
                general={general}
                isDownXs={isDownXs}
              />
            )}
          </div>
          <ConsumerFooter
            className={classes.footer}
            activeTab={activeTab}
            general={general}
            isDownXs={isDownXs}
          />

          <div
            className={cx(
              isDownXs ? classes.backgroundMobile : classes.background,
              activeTab === "salons"
                ? classes.backgroundSalons
                : activeTab === "clients"
                ? classes.backgroundClients
                : activeTab === "contact_us"
                ? classes.backgroundContact
                : activeTab === "salon_registration"
                ? classes.backgroundSalonReg
                : activeTab === "salon_registration_sales"
                ? classes.backgroundSalonRegSales
                : (activeTab === "succes_registration" ||
                    activeTab === "succes_registration_sales") &&
                  classes.backgroundSucces
            )}
          >
            {!isDownXs && (
              <>
                <div className={classes.background_0} />
                <div className={classes.background_1} />
                <div className={classes.background_2} />
                <div className={classes.background_3} />
                <div className={classes.background_4} />
                <div className={classes.background_5} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
