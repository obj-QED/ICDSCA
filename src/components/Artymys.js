import React from 'react';
import classNames from "classnames";
import artymysLogo from '../assets/images/ARTYMYS_logo.webp';
import artymysImage from '../assets/images/Artymys_image.webp';


export const Artymys = ({ pageContext }) => {
  return (
    <div className="artymys">
      <div className="current">
        <div className="current__content">
          <div className="icon">
            <img src={artymysLogo} alt="Artymys logo"/>
          </div>
          <div className="descpt">
            <div className="title">
              Artymys - the First ever Civil Protection Marketplace
            </div>
            <div className="text">
              ICDSCA is a Global Referral Partner
            </div>
            <a className="link" href="https://artymys.com/">
              https://artymys.com/
            </a>
          </div>
        </div>
        <div className="current__image">
        <img src={artymysImage} alt=""/>
        </div>
      </div>
    </div>
  );
}
