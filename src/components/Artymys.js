import React from 'react';
import classNames from "classnames";
import artymysLogo from '../assets/images/ARTYMYS_logo.webp';
import artymysImage from '../assets/images/Artymys_image.webp';
import { Link } from '../components/Link';
import IconPost from '../assets/svg/post__arrow.svg';


export const Artymys = ({ pageContext }) => {

  const handleClick = (e) => {
    e.preventDefault();
      window.open("https://artymys.com/", "_target");
  };

  return (
    <div className="artymys">
      <div className="current">
        <div className="current__content">
          <div className="icon">
            <a
              target="_blank"
              href="https://www.artymys.com/"
              style={{ width: '100%', height: '100%', display: 'block' }}>
              <img src={artymysLogo} alt="Artymys logo" />
            </a>
          </div>
          <div className="descpt">
            <div className="title">
              Artymys - the First Ever Civil Protection Marketplace
            </div>
            <div className="text">
              ICDSCA is a Global Referral Partner
            </div>
            <button
              className="link outline-none py-4 px-6 inline-flex items-center"
              onClick={handleClick}>
                Discover
              {[<IconPost className="ml-4"/>]}
            </button>
          </div>
        </div>
        <div className="current__image">
          <img src={artymysImage} alt="" />
        </div>
      </div>
    </div>
  );
}
