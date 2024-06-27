import { Button } from "@mui/material";
import AmenitiesSection from "./AmenitiesSection";
import PropTypes from "prop-types";
import "./LocationAmenities.css";

const LocationAmenities = ({ className = "" }) => {
  return (
    <div className={`location-amenities ${className}`}>
      <div className="amenities-wrapper">
        <h3 className="amenities">Amenities</h3>
        <div className="amenities-content">
          <div className="amenities-grid">
            <AmenitiesSection
              mdilake="/mdilake.svg"
              lakeside="Lakeside"
              tablertoolsKitchen2="/tablertoolskitchen2.svg"
              kitchen="Kitchen"
              materialSymbolsnestCamIqO="/materialsymbolsnestcamiqoutdooroutline.svg"
              securityCamerasOnProperty="Security cameras on property"
              ionwifi="/ionwifi.svg"
              wifi="Wifi"
            />
            <AmenitiesSection
              mdilake="/phcar.svg"
              lakeside="Free parking"
              tablertoolsKitchen2="/cilshower.svg"
              kitchen="Outdoor shower"
              materialSymbolsnestCamIqO="/materialsymbolswatervocoutlinerounded.svg"
              securityCamerasOnProperty="Hot water"
              ionwifi="/covidpersonalhygienehandliquidsoap.svg"
              wifi="Shampoo"
              propFlex="0.6055"
            />
            <AmenitiesSection
              mdilake="/phfireextinguisher.svg"
              lakeside="Fire Extinguisher"
              tablertoolsKitchen2="/streamlinefoodkitchenwarerefrigeratorfridgecookappliancescookingnutritionfreezerappliancefood.svg"
              kitchen="Freezer"
              materialSymbolsnestCamIqO="/materialsymbolscoffeemakeroutline.svg"
              securityCamerasOnProperty="Coffee Maker"
              ionwifi="/mdistove.svg"
              wifi="Glass stove"
              propFlex="0.6307"
            />
          </div>
          <Button
            className="search-flights-button2"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#171e1d",
              fontSize: "16",
              borderColor: "#171e1d",
              borderRadius: "6px",
              "&:hover": { borderColor: "#171e1d" },
              width: 185,
              height: 48,
            }}
          >
            Show all amenities
          </Button>
        </div>
      </div>
      <div className="location-wrapper-wrapper">
        <div className="location-wrapper">
          <div className="location-content">
            <div className="map-details">
              <h3 className="where-youll-be">Where you’ll be</h3>
              <div className="neighborhood-info">
                <img className="location-icon" alt="" src="/vector-3.svg" />
                <div className="the-bridle-path">The Bridle Path</div>
              </div>
            </div>
            <div className="weather-details">
              <div className="weather-info">
                <img
                  className="suncloud-icon"
                  loading="lazy"
                  alt=""
                  src="/suncloud.svg"
                />
                <div className="weather-info1">
                  <div className="temperature">20°C</div>
                  <div className="weather-detail">Broken clouds</div>
                </div>
              </div>
              <div className="frame-parent">
                <div className="sun-parent">
                  <img className="sun-icon" alt="" src="/sun.svg" />
                  <div className="c-wrapper">
                    <b className="c">23°C</b>
                  </div>
                </div>
                <div className="sun-group">
                  <div className="sun">Sun</div>
                  <div className="aug">27 Aug</div>
                </div>
              </div>
              <div className="frame-group">
                <div className="suncloud-parent">
                  <img
                    className="suncloud-icon1"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-container">
                    <b className="c1">22°C</b>
                  </div>
                </div>
                <div className="mon-parent">
                  <div className="mon">Mon</div>
                  <div className="aug1">28 Aug</div>
                </div>
              </div>
              <div className="frame-container">
                <div className="sun-container">
                  <img className="sun-icon1" alt="" src="/sun.svg" />
                  <div className="c-frame">
                    <b className="c2">23°C</b>
                  </div>
                </div>
                <div className="tue-parent">
                  <div className="tue">Tue</div>
                  <div className="aug2">29 Aug</div>
                </div>
              </div>
              <div className="frame-div">
                <div className="suncloud-group">
                  <img
                    className="suncloud-icon2"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper1">
                    <b className="c3">20°C</b>
                  </div>
                </div>
                <div className="wed-parent">
                  <div className="wed">Wed</div>
                  <div className="aug3">30 Aug</div>
                </div>
              </div>
              <div className="frame-parent1">
                <div className="suncloud-container">
                  <img
                    className="suncloud-icon3"
                    alt=""
                    src="/suncloud-1.svg"
                  />
                  <div className="c-wrapper2">
                    <b className="c4">19°C</b>
                  </div>
                </div>
                <div className="thu-parent">
                  <div className="thu">Thu</div>
                  <div className="aug4">31 Aug</div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="sun-parent1">
                  <img className="sun-icon2" alt="" src="/sun.svg" />
                  <div className="c-wrapper3">
                    <b className="c5">24°C</b>
                  </div>
                </div>
                <div className="fri-parent">
                  <div className="fri">Fri</div>
                  <div className="sep">1 Sep</div>
                </div>
              </div>
            </div>
          </div>
          <iframe className="map-background" />
          <img
            className="map-actions-icon"
            loading="lazy"
            alt=""
            src="/frame-92.svg"
          />
        </div>
      </div>
    </div>
  );
};

LocationAmenities.propTypes = {
  className: PropTypes.string,
};

export default LocationAmenities;
