import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from '../components/Link';
import VisibilitySensor from "react-visibility-sensor"

import { ContactForm } from './ContactForm';

import IconFb from '../assets/svg/fb.svg';
import IconArrowTop from '../assets/svg/arrow-top.svg';
import ReactMarkdown from 'react-markdown';
// import IconTwitter from '../assets/svg/twitter.svg';
import IconLinkedin from '../assets/svg/linkedin.svg';

export const Footer = ({ noContact, lightTheme, pageContext }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setIsFormOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (isFormOpen) {
      document.getElementsByTagName('BODY')[0].classList.add('modal-open');
    } else {
      document.getElementsByTagName('BODY')[0].classList.remove('modal-open');
    }

    return () => {
      document.getElementsByTagName('BODY')[0].classList.remove('modal-open');
    };
  }, [isFormOpen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <VisibilitySensor partialVisibility offset={{ top: 200 }}>
        <div className={classNames('footer', {
          'footer--light': lightTheme,
        })}
        >
          <div className="row">
            <div className="footer__wrapper">
              {!noContact && (
                <div className="footer__form">
                  <p className="footer__form-text-label">
                    {pageContext.footer_form_label}
                  </p>

                  <p className="footer__form-text-title">
                    {pageContext.footer_form_title}
                  </p>

                  <button
                    className="btn-light"
                    onClick={() => setIsFormOpen(true)}
                  >
                    {pageContext.footer_form_button}
                  </button>
                  {/*<a href="mailto:info@icdsca.com" className="btn-light">{pageContext.footer_form_button}</a>*/}
                </div>
              )}
              {!noContact && (
                <div className="footer__contacts">
                  <div className="footer__contact-item">
                    <div className="footer__contact-headline">
                      {pageContext.footer_headquarters_title}
                    </div>
                    <p>
                      <ReactMarkdown
                        escapeHtml={false}
                        source={pageContext.footer_headquarters_contact}
                        renderers={{ paragraph: 'span' }}
                      />
                      <br />
                      Email: <a href="mailto:info@icdsca.com">info@icdsca.com</a>
                    </p>
                  </div>
                  <div className="footer__contact-item">
                    <div className="footer__contact-headline">
                      {pageContext.footer_china_title}
                    </div>
                    <p>
                      <ReactMarkdown
                        escapeHtml={false}
                        source={pageContext.footer_china_contact}
                        renderers={{ paragraph: 'span' }}
                      />
                      <br />
                      Email: <a href="mailto:info@icdsca.com">info@icdsca.com</a>
                      <br />
                      Tel:{' '}
                      <a href={`tel:${pageContext.footer_china_tel}`}>
                        {pageContext.footer_china_tel}
                      </a>
                      <br />
                      Mob:{' '}
                      <a href={`tel:${pageContext.footer_china_mob}`}>
                        {pageContext.footer_china_mob}
                      </a>
                    </p>
                  </div>
                  <div className="footer__contact-item">
                    <div className="footer__contact-headline">
                      {pageContext.footer_italy_title}
                    </div>
                    <p>
                      <ReactMarkdown
                        escapeHtml={false}
                        source={pageContext.footer_italy_contact}
                        renderers={{ paragraph: 'span' }}
                      />
                      <br />
                      Email: <a href="mailto:info@icdsca.com">info@icdsca.com</a>
                      <br />
                      Tel:{' '}
                      <a href={`tel:${pageContext.footer_italy_tel}`}>
                        {pageContext.footer_italy_tel}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className={classNames('footer__socials', { noContact })}>
                <button className="footer__top" onClick={scrollTop}>
                  <IconArrowTop />{' '}
                </button>
                <div className="footer__socials-text">
                  {pageContext.footer_info_title} <br />
                  <span className="footer__social-text-description">
                    {pageContext.footer_info_description}
                  </span>
                </div>

                <div className="footer__socials-links">
                  <a
                    href="https://www.facebook.com/icdsca/"
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-link fb"
                  >
                    <IconFb />{' '}
                  </a>
                  {/*<a href="/" className="footer__social-link tw"><IconTwitter /> </a>*/}
                  <a
                    href="https://www.linkedin.com/company/international-civil-defense-support-and-coordination-agency-icdsca/about/"
                    rel="noreferrer"
                    target="_blank"
                    className="footer__social-link in"
                  >
                    <IconLinkedin />{' '}
                  </a>
                </div>
              </div>

              <div className="footer__copyright">
                <Link to="/privacy-policy" className="footer__copyright-privacy">
                  {pageContext.privacy_policy}
                </Link>
                {pageContext.footer_copyright &&
                  pageContext.footer_copyright.replace(
                    ':year',
                    new Date().getFullYear()
                  )}
              </div>
            </div>
          </div>
        </div>
      </VisibilitySensor>
      <div
        className={classNames('footer__form-popup', { visible: isFormOpen })}
      >
        {isFormOpen && <ContactForm onClose={() => setIsFormOpen(false)} />}
      </div>
    </>
  );
};
