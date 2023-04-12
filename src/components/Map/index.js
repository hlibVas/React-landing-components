import React, { useMemo, useState } from "react";
import cx from "clsx";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import upperFirst from "lodash/upperFirst";

import Typography from "components/Typography";
import ButtonPrimary from "components/Button/Primary";
import GeolocationIcon from "icons/Landing/Geolocation";
import MapMarker from "image/Landing/MapMarker.webp";
import LOCATION_COLLECTION from "gql/queries/All/locationCollection.gql";
import useQuery from "hooks/useQuery";
import useDispatch from "hooks/useDispatch";
import { pushRoute } from "actions/router";
import { maplocationCollectionToMap } from "lib/consumers";

import LogoIcon from "icons/Landing/LogoCopyrigt";
import PaperPlane from "icons/Landing/PaperPlane";

import useStyles from "./styles";
const libraries = ["places"];

function MapSection(props) {
  const { isDownXs } = props;
  const classes = useStyles();
  const screenWidth = window.screen.width;

  const containerStyle = {
    width: isDownXs ? screenWidth - 48 : "100%",
    height: 546,
    borderRadius: 30,
  };

  const [center, setCenter] = useState({
    lat: 43.568961,
    lng: -79.587508,
  });

  const { data } = useQuery(LOCATION_COLLECTION, {
    variables: {
      input: {
        page: 1,
        limit: 1000,
      },
    },
  });
  const entity =
    data?.brandLocationCollection?.items && data?.brandLocationCollection.items;

  const salonsCollection = useMemo(
    () => maplocationCollectionToMap(entity),
    [entity, maplocationCollectionToMap]
  );
  const dispatch = useDispatch();
  const [salonNumber, setSalonNumber] = useState(-1);
  const [autocomplete, setAutocomplite] = useState(-1);
  const salons = useMemo(() => {
    return salonsCollection?.length > 0
      ? salonsCollection?.map((salonData, i) => (
          <Marker
            key={i}
            icon={MapMarker}
            position={salonData.position}
            onClick={() => setSalonNumber(i)}
          />
        ))
      : null;
  }, [salonsCollection]);
  return (
    <div id="mapId" className={classes.root}>
      <LoadScript
        googleMapsApiKey={process.env.GEOLOCATION_API_KEY}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
          }}
        >
          <GeolocationIcon
            className={classes.geolocation}
            onClick={() => {
              window.navigator.geolocation.getCurrentPosition(
                (position) => {
                  setCenter({
                    lng: position.coords.longitude,
                    lat: position.coords.latitude,
                  });
                },

                (e) => {}
              );
            }}
          />

          {salons}
          {salonNumber >= 0 && (
            <InfoWindow
              position={salonsCollection?.[salonNumber]?.position}
              onCloseClick={() => setSalonNumber(-1)}
              options={{
                minWidth: isDownXs ? 290 : 230,
                minHeight: isDownXs ? 170 : 322,
              }}
            >
              <div className={classes.infoRoot}>
                {!isDownXs && <LogoIcon />}
                {isDownXs ? (
                  <div className={classes.infoBlock}>
                    <img
                      src={
                        salonsCollection?.[salonNumber]?.path ||
                        "Landing/SalonImage.webp"
                      }
                      className={cx(classes.mapSalonImage)}
                      alt="Salon logotype"
                    />
                    <div className={classes.infoLabelBlock}>
                      <Typography variant="h6" className={classes.mapMainLabel}>
                        {upperFirst(salonsCollection?.[salonNumber]?.name)}
                      </Typography>
                      <Typography
                        variant="button"
                        className={classes.mapSecondLabel}
                      >
                        {salonsCollection?.[salonNumber]?.address}
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={classes.imageBlock}>
                      <img
                        src={
                          salonsCollection?.[salonNumber]?.path ||
                          "Landing/SalonImage.webp"
                        }
                        className={cx(classes.mapSalonImage)}
                        alt="Salon logotype"
                      />
                    </div>
                    <div className={classes.infoLabelBlock}>
                      <Typography variant="h6" className={classes.mapMainLabel}>
                        {upperFirst(salonsCollection?.[salonNumber]?.name)}
                      </Typography>
                      <Typography
                        variant="inherit"
                        className={classes.mapSecondLabel}
                      >
                        {salonsCollection?.[salonNumber]?.address}
                      </Typography>
                    </div>
                  </>
                )}
                <ButtonPrimary
                  disableRipple
                  className={classes.mapInfoButton}
                  endIcon={<PaperPlane />}
                  onClick={() => dispatch(pushRoute(`/${name}`))}
                >
                  Get invited
                </ButtonPrimary>
              </div>
            </InfoWindow>
          )}

          <Autocomplete
            position="center"
            onLoad={(autocomplete) => {
              setAutocomplite(autocomplete);
            }}
            fields={["geometry"]}
            onPlaceChanged={() => {
              const { location } = autocomplete.getPlace().geometry;
              setCenter({ lng: location.lng(), lat: location.lat() });
            }}
            options={{
              types:
                "administrative_area_level_2|administrative_area_level_3|street_address|street_number|postal_code",
              bounds: {
                east: -51.25011752665209,
                west: -164.1481233039383,
                north: 74.40688697854543,
                south: 24.57371376966778,
              },
            }}
          >
            <input
              className={cx(classes.autocomplite)}
              placeholder="Search city or postal code"
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapSection;
