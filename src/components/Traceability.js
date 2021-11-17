import React from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

import IconKyc from '../assets/svg/traceability/kyc.svg';
import IconAml from '../assets/svg/traceability/aml.svg';
import IconChain from '../assets/svg/traceability/chain.svg';
import IconReliability from '../assets/svg/traceability/reliability.svg';
import IconQuality from '../assets/svg/traceability/quality.svg';
import IconAnalysis from '../assets/svg/traceability/analysis.svg';
import ReactMarkdown from 'react-markdown';

export const Traceability = ({ pageContext }) => {
  return (
    <div className="traceability">
      <div className="row">
        <div className="traceability__heading">
          <VisibilitySensor partialVisibility>
            {({ isVisible: isVisibleScreen }) => (
              <h2
                className={classNames(
                  'headline visibility-animation supply-chain',
                  { visible: isVisibleScreen }
                )}
              >
                <span>{pageContext.supply_chain_title}</span>
              </h2>
            )}
          </VisibilitySensor>
        </div>

        <div className="traceability__content">
          <p className="traceability__top-headline">
            <ReactMarkdown
              escapeHtml={false}
              source={pageContext.supply_chain_sub_title}
              renderers={{ paragraph: 'span' }}
            />
          </p>

          <p className="traceability__top-description">
            <ReactMarkdown
              escapeHtml={false}
              source={pageContext.supply_chain_description}
              renderers={{ paragraph: 'span' }}
            />
          </p>

          <div className="traceability__icons">
            <div className="traceability__icon-item">
              <IconKyc />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_kyc_compliance}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
            <div className="traceability__icon-item">
              <IconAml />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_aml_compliance}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
            <div className="traceability__icon-item">
              <IconChain />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_transparency}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
            <div className="traceability__icon-item">
              <IconReliability />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_reliability}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
            <div className="traceability__icon-item">
              <IconQuality />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_product_quality}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
            <div className="traceability__icon-item">
              <IconAnalysis />
              <div className="traceability__icon-title">
                <ReactMarkdown
                  escapeHtml={false}
                  source={pageContext.supply_chain_price_analysis}
                  renderers={{ paragraph: 'span' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
