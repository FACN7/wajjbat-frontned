import React from "react";
import style from "./BusinessDetails.module.scss";
import { Rating } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import PlaceFeature from "../PlaceFeature";
import Contact from "../Contact";
import GoogleMaps from "../../components/GoogleMaps";

export default function BusinessDetails({ businessData, userPosition }) {

  if (businessData === undefined) {
    return (
      <div className={style['emptyBusinessDetails']}>
        <CircularProgress disableShrink />
      </div>
    );
  }

  return (
    <div>
      <div className={style['upper-details-container']}>
        <div className={style['business-type']}>
          {businessData.business_type}, {businessData.cuisine}
        </div>

        <div className={style['business-rating']}>
          <Rating
            name="half-rating"
            value={businessData.rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
      </div>
      <p className={style['business-name']}>{businessData.name}</p>
      <p className={style['business-description']}>{businessData.description}</p>

      <div className={style['place-features']}>
        <PlaceFeature featureValue={businessData.smokingArea} label="Smoking Area" />
        <PlaceFeature featureValue={businessData.parking} label="Parking" />
        <PlaceFeature featureValue={businessData.freeWifi} label="Free Wifi" />
      </div>

      <div className={style['contact-container']}>
        <Contact email={businessData.email} phone={businessData.phone} />
      </div>

      <div className={style['address']}>
        <div className={style['business-address']}>{businessData.address}</div>
      </div>

      <GoogleMaps
        userPosition={userPosition}
        businessLocation={{ lat: businessData.lat, lng: businessData.lng }}
      />
    </div>
  );

}
