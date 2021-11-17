import React from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import IconArrow from '../assets/svg/arrow.svg';
import IconCivildefence from '../assets/svg/civildefence.svg';

export const Marketplace = ({ pageContext }) => {
  return (
    <div className="page-screen marketplace">
      <div className="row">
        <div className="marketplace__wrapper">
          <IconCivildefence
            style={{
              transform: 'scale(1.5)',
            }}
          />

          <VisibilitySensor partialVisibility>
            {({ isVisible: isVisibleScreen }) => (
              <h2
                className={classNames('headline visibility-animation', {
                  visible: isVisibleScreen,
                })}
              >
                <span>{pageContext.marketplace_title}</span>
              </h2>
            )}
          </VisibilitySensor>

          <p className="marketplace__description">
            {pageContext.marketplace_description}
          </p>

          <a
            href="https://civildefensemarketplace.com"
            target="_blank"
            rel="noreferrer"
            className="btn-dark marketplace__link"
          >
            <IconArrow />
          </a>
        </div>
      </div>
    </div>
  );
};
