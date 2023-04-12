import React from "react";
import cx from "clsx";

import Navigation from "components/Navigation";
import Typography from "components/Typography";
import ButtonIcon from "components/Button/Icon";
import ButtonPrimary from "components/Button/Primary";

import ArrowUpIcon from "icons/ArrowUp";
// import LiveChatIcon from 'icons/Landing/LiveChat'
import TwitterIcon from "icons/Landing/Twitter";
import InstIcon from "icons/Landing/Inst";
import FaceBookIcon from "icons/Landing/FaceBook";
import LogoCopyrigtIcon from "icons/Landing/LogoCopyrigt";

import Triangle from "icons/Landing/Triangle";

import useStyles from "./styles";

function ConsumerFooter(props) {
  const { activeTab, general, isDownXs } = props;
  const classes = useStyles();
  const socialMedia = () => {
    return (
      <div className={classes.socialMediaBlock}>
        <div className={classes.socialMediaButtons}>
          {/* <ButtonIcon>
            <TwitterIcon />
          </ButtonIcon> */}
          <ButtonIcon
            href=""
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Click to go instagram page"
          >
            <InstIcon />
          </ButtonIcon>
          <ButtonIcon
            href=""
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Click to go facebook page"
          >
            <FaceBookIcon />
          </ButtonIcon>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {!isDownXs && (
          <div className={classes.copyrightBlock}>
            {activeTab === "" ||
            activeTab === "salons" ||
            activeTab === "clients" ? (
              <ButtonIcon
                onClick={() => general(activeTab, true)}
                className={classes.buttonUp}
                aria-label="Click to go up page"
              >
                <ArrowUpIcon />
              </ButtonIcon>
            ) : null}
            <Typography
              variant="button"
              className={cx(
                classes.copyright,
                activeTab !== "" &&
                  activeTab !== "salons" &&
                  activeTab !== "clients"
                  ? classes.copyrightMargin
                  : null
              )}
            >
              &copy;2022
            </Typography>
          </div>
        )}
        <div className={classes.infoBlock}>
          <ButtonIcon
            className={classes.footerLogo}
            onClick={() => general("", true)}
            aria-label="Click to go home page"
          >
            <LogoCopyrigtIcon />
          </ButtonIcon>
          <div className={classes.centerButton}>
            <div className={classes.buttons}>
              <Navigation type="landingFooter" root />
            </div>
            <ButtonPrimary
              className={classes.forSalesButton}
              onClick={() => general("salon_registration_sales", true)}
            >
              Sign Up for Sales Rep
            </ButtonPrimary>
          </div>
          {isDownXs && socialMedia()}
          <div className={classes.adressBlock}>
            <Typography variant="button" className={classes.adress}>
              125 Norfinch Drive,
              {isDownXs && <br />}Toronto, Ontario, M3N 1W8
              {isDownXs && <br />}
            </Typography>
            {isDownXs && (
              <Typography variant="button" className={classes.copyright}>
                &copy;2022
              </Typography>
            )}
          </div>
          <div>s</div>
        </div>
        {!isDownXs && socialMedia()}
        {!isDownXs && (
          <div className={classes.liveChat}>
            <div className={classes.liveChatRoot}>
              <Typography variant="h4" className={classes.chatMainLabel}>
                Welcome to Quaffed!
              </Typography>
              <Typography variant="button" className={classes.chatSecondLabel}>
                How can we help you today?
              </Typography>
            </div>
            <Triangle className={classes.chatTriangle} />
            {/* <div className={classes.eclipse}>
              <LiveChatIcon />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ConsumerFooter;
