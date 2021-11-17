import React, { useState } from 'react';
import classNames from "classnames";
import VisibilitySensor from "react-visibility-sensor";
import map from "lodash/map";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick"

import ImageMedic from '../assets/images/medic.webp';
import ImageChina from '../assets/images/china.webp';
import ImageNatural from '../assets/images/natural.webp';
import IconCovidEquipment from '../assets/svg/covid-equipment.svg';
import IconElearning from '../assets/svg/elearning.svg';
import IconEmergency from '../assets/svg/emergency.svg';
import IconFramework from '../assets/svg/framework.svg';
import IconHelicopter from '../assets/svg/helicopter.svg';
import IconHouse from '../assets/svg/house.svg';
import IconShip from '../assets/svg/ship.svg';
import IconSoftware from '../assets/svg/software.svg';

const icons = {
  IconCovidEquipment,
  IconElearning,
  IconEmergency,
  IconFramework,
  IconHelicopter,
  IconHouse,
  IconShip,
  IconSoftware,
};

export const CurrentActivities = ({ pageContext }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: false,
    swipe: false,
  };

  let sliderActivities;

  return (
    <div className="current-activities">
      <div className="row">
        <div className="current-activities__wrapper">
          <div className="current-activities__image">
            <div className="current-activities__image-wrapper">
              {activeSlide === 0 && <img src={ImageMedic} alt=""/>}
              {activeSlide === 1 && <img src={ImageChina} alt=""/>}
              {activeSlide === 2 && <img src={ImageNatural} alt=""/>}
            </div>
            <div className="current-activities__image-text-wrapper">
              {activeSlide === 0 && <div className="current-activities__image-text-title">{pageContext.covid_response_title}</div>}
              {activeSlide === 1 && <div className="current-activities__image-text-title">{pageContext.case_china_title}</div>}
              {activeSlide === 2 && <div className="current-activities__image-text-title">{pageContext.natural_disaster_title}</div>}
              {activeSlide === 0 && <div className="current-activities__image-text-description">{pageContext.covid_response_title2}</div>}
              {activeSlide === 1 && <div className="current-activities__image-text-description">{pageContext.case_china_title2}</div>}
              {activeSlide === 2 && <div className="current-activities__image-text-description">{pageContext.natural_disaster_title2}</div>}
            </div>
          </div>
          <div className="current-activities__content">
            <div className="current-activities__content-slides">
              <div className={classNames("current-activities__content-slide-wrapper", { active: activeSlide === 0 })}>
                <div className="current-activities__content-slide">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible: isVisibleScreen }) => (
                      <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}>
                        <span>{pageContext.covid_response_title} {pageContext.covid_response_title2}</span>
                      </h2>
                    )}
                  </VisibilitySensor>

                  <div className="current-activities__content-links">
                    {map(pageContext.covid_response_list, ({ title, icon }, i) => {
                      const IconTag = icons[icon];
                      return (
                        <div key={i} className="current-activities__content-link-item">
                          <div className="current-activities__content-link-icon">
                            <IconTag />
                          </div>

                          <h3 className="current-activities__content-link-title">
                            {title}
                          </h3>
                        </div>
                      );
                     })}
                  </div>

                  <div className="current-activities__info">
                    <p className="current-activities__info-description">
                      <ReactMarkdown escapeHtml={false} source={pageContext.covid_response_contact_text} renderers={{paragraph: 'span'}} />
                    </p>

                    <p><a href={`mailto:${pageContext.covid_response_contact_email}`}>{pageContext.covid_response_contact_email}</a></p>
                  </div>
                </div>
              </div>
              <div className={classNames("current-activities__content-slide-wrapper", { active: activeSlide === 1 })}>
                <div className="current-activities__content-slide">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible: isVisibleScreen }) => (
                      <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}>
                        <span>{pageContext.case_china_title} {pageContext.case_china_title2}</span>
                      </h2>
                    )}
                  </VisibilitySensor>

                  <div className="current-activities__content-links">
                    {map(pageContext.case_china_list, ({ title, icon, description }, i) => {
                      const IconTag = icons[icon];
                      return (
                        <div key={i} className="current-activities__content-link-item">
                          <div className="current-activities__content-link-icon">
                            <IconTag />
                          </div>

                          <h3 className="current-activities__content-link-title">
                            {title}
                          </h3>

                          {description && <p className="current-activities__content-link-description">
                            {description}
                          </p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={classNames("current-activities__content-slide-wrapper", { active: activeSlide === 2 })}>
                <div className="current-activities__content-slide">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible: isVisibleScreen }) => (
                      <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}>
                        <span>{pageContext.natural_disaster_title} {pageContext.natural_disaster_title2}</span>
                      </h2>
                    )}
                  </VisibilitySensor>

                  <div className="current-activities__content-links">
                    {map(pageContext.natural_disaster_list, ({ title, icon }, i) => {
                      const IconTag = icons[icon];
                      return (
                        <div key={i} className="current-activities__content-link-item">
                          <div className="current-activities__content-link-icon">
                            <IconTag />
                          </div>

                          <h3 className="current-activities__content-link-title">
                            {title}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="current-activities__content-slides-link">
              <Slider
                ref={s => sliderActivities = s}
                {...settings}
              >
                <div className="current-activities__content-slides-item">
                  <button onClick={() => { sliderActivities.slickGoTo(1); setActiveSlide(1); }} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageChina})` }}>&nbsp;</button>
                </div>
                <div className="current-activities__content-slides-item">
                  <button onClick={() => { sliderActivities.slickGoTo(2); setActiveSlide(2); }} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageNatural})` }}>&nbsp;</button>
                </div>
                <div className="current-activities__content-slides-item">
                  <button onClick={() => { sliderActivities.slickGoTo(0); setActiveSlide(0); }} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageMedic})` }}>&nbsp;</button>
                </div>
              </Slider>
            </div>

            {/*<div className="current-activities__content-slides-link">
              {activeSlide !== 2 && <button onClick={() => setActiveSlide(2)} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageNatural})` }}>&nbsp;</button>}
              {activeSlide !== 1 && <button onClick={() => setActiveSlide(1)} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageChina})` }}>&nbsp;</button>}
              {activeSlide !== 0 && <button onClick={() => setActiveSlide(0)} className="current-activities__content-slides-link-item" style={{ backgroundImage: `url(${ImageMedic})` }}>&nbsp;</button>}
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
