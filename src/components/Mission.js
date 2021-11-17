import React  from 'react';
import Slider from "react-slick";

import ImageFire from '../assets/images/mission_fire.webp';
import ImageMedic from '../assets/images/mission_medic.webp';
import ImageMedicTwo from '../assets/images/mission_medic--2.webp';
import classNames from "classnames"
import VisibilitySensor from "react-visibility-sensor"

export const Mission = ({ pageContext }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="mission">
      <div className="row">
        <div className="mission__wrapper">
          <div className="mission__content">
            <VisibilitySensor partialVisibility>
              {({ isVisible: isVisibleScreen }) => (
                <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}><span>{pageContext.mission_title}</span></h2>
              )}
            </VisibilitySensor>

            <div className="mission__content-wrapper">
              {/*<IconSwiss />*/}

              <div className="mission__content-text">
                <p className="mission__content-description-top">
                  {pageContext.mission_description_large}
                </p>

                <p className="mission__content-description">
                  {pageContext.mission_description}
                </p>
              </div>
            </div>
          </div>

          <div className="mission__image">
            <Slider
              {...settings}
            >
              <div className="mission__image-item">
                <img src={ImageFire} alt=""/>
              </div>
              <div className="mission__image-item">
                <img src={ImageMedic} alt=""/>
              </div>
              <div className="mission__image-item">
                <img src={ImageMedicTwo} alt=""/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
