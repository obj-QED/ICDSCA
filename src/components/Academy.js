import React from 'react';
import classNames from "classnames";
import ImageAcademyLogo from '../assets/images/academy_logo.png';

import VisibilitySensor from "react-visibility-sensor";

export const Academy = ({ pageContext }) => {
  return (
    <div className="page-screen academy">
      <div className="row">
        <div className="academy__wrapper">
          <div className="academy__wrapper-content">
            <VisibilitySensor partialVisibility>
              {({ isVisible: isVisibleScreen }) => (
                <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}><span>{pageContext.academy_title}</span></h2>
              )}
            </VisibilitySensor>

            <p className="academy__description">
              {pageContext.academy_description}
            </p>

            <a href={pageContext.academy_button_url} className="btn-dark" disabled={pageContext.academy_button_url === 'null'}>{pageContext.academy_button}</a>
          </div>


          <div className="academy__wrapper-logo">
            <img src={ImageAcademyLogo} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}
