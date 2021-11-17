import React from 'react';
import classNames from "classnames";
import VisibilitySensor from "react-visibility-sensor";

import IconLine from '../assets/svg/history/line.svg';
import IconShip from '../assets/svg/history/ship.svg';
import IconColosseum from '../assets/svg/history/colosseum.svg';
import IconWatter from '../assets/svg/history/watter.svg';
import IconStar from '../assets/svg/history/star.svg';
import IconCivil from '../assets/svg/history/civil.svg';
import IconEducation from '../assets/svg/history/education.svg';
import IconOffice from '../assets/svg/history/office.svg';
import IconPartners from '../assets/svg/history/partners.svg';
import IconAntenna from '../assets/svg/history/antenna.svg';
import IconPeople from '../assets/svg/history/people.svg';
import IconEcommerce from '../assets/svg/history/e-commerce.svg';
import IconCovid from '../assets/svg/history/covid.svg';
import IconSwiss from '../assets/svg/history/swiss.svg';
import IconSchool from '../assets/svg/history/school.svg';
import IconChess from '../assets/svg/history/chess.svg';

export const History = ({ pageContext }) => {
  return (
    <div className="history">
      <div className="row">
        <div className="history__heading">
          <VisibilitySensor partialVisibility>
            {({ isVisible: isVisibleScreen }) => (
              <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}><span>{pageContext.history_title}</span></h2>
            )}
          </VisibilitySensor>
        </div>

        <div className="history__content-mobile">
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2014 <IconSwiss className="ml-2" /></div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2014}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconShip /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2015</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2015}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconColosseum /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2016</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2016}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconWatter /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2017</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2017}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconStar /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2018</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2018}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconCivil /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2018_2}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconEducation /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2019</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  Opening of the School for Civil Defense in Shanghai
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconSchool /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  Foundation of ICDSCA Legal Department and Strategic Development office in Florence
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconChess /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="history__content-mobile-wrapper-item">
            <div className="history__content-wrapper-item-content">
              <div className="history__content-wrapper-item-heading mobile">2020</div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_1}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconOffice /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_2}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconPartners /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_3}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconAntenna /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_4}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconPeople /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_5}
                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconEcommerce /></div>
                </div>
              </div>
              <div className="history__content-wrapper-description">
                <div className="history__content-wrapper-description-text">
                  {pageContext.history_2020_6}

                </div>
                <div className="history__content-wrapper-description-icon">
                  <div className="history__content-line-item"><IconCovid /></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="history__content desktop">
          <div className="history__content-wrapper top">
            <div className="history__content-wrapper-item pr-5">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2014 <IconSwiss className="ml-2" /></div>
                <div className="history__content-wrapper-item-text pr-0">
                  {pageContext.history_2014}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item pr-12">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2015</div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2015}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item pr-5">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2016</div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2016}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item pr-6">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2017</div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2017}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2018</div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2018}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content pr-6">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text pr-0">
                  {pageContext.history_2018_2}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item pr-12">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2019</div>
                <div className="history__content-wrapper-item-text">
                  Opening of the School for Civil Defense in Shanghai
                </div>
              </div>
            </div>
          </div>

          <div className="history__content-line">
            <div className="history__content-line-icons top">
              <div className="history__content-line-item"><IconShip /></div>
              <div className="history__content-line-item"><IconColosseum /></div>
              <div className="history__content-line-item"><IconWatter /></div>
              <div className="history__content-line-item"><IconStar /></div>
              <div className="history__content-line-item"><IconCivil /></div>
              <div className="history__content-line-item"><IconEducation /></div>
              <div className="history__content-line-item"><IconSchool /></div>
            </div>
            <div className="history__content-line-icons bottom">
              <div className="history__content-line-item"><IconChess /></div>
              <div className="history__content-line-item"><IconOffice /></div>
              <div className="history__content-line-item"><IconPartners /></div>
              <div className="history__content-line-item"><IconAntenna /></div>
              <div className="history__content-line-item"><IconPeople /></div>
              <div className="history__content-line-item"><IconEcommerce /></div>
              <div className="history__content-line-item"><IconCovid /></div>
            </div>
            <IconLine className="history__content-line-icon" />
          </div>

          <div className="history__content-wrapper bottom">
            <div className="history__content-wrapper-item pr-6">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2019</div>
                <div className="history__content-wrapper-item-text">
                  Foundation of ICDSCA Legal Department and Strategic Development office in Florence
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading">2020</div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2020_1}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2020_2}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text pr-16">
                  {pageContext.history_2020_3}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text">
                  {pageContext.history_2020_4}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text pr-16">
                  {pageContext.history_2020_5}
                </div>
              </div>
            </div>
            <div className="history__content-wrapper-item pr-16">
              <div className="history__content-wrapper-item-content">
                <div className="history__content-wrapper-item-heading"></div>
                <div className="history__content-wrapper-item-text pr-0">
                  {pageContext.history_2020_6}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
