import React from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import IconLogo from '../assets/svg/logo_black_full.svg';
import SEO from '../components/seo';
import { Footer } from '../components/Footer';
import { LangDropdown } from '../components/LangDropdown';

import IconArrow from '../assets/svg/arrow.svg';
import FacebookIcon from '../assets/svg/facebook__share.svg';
import TwitterIcon from '../assets/svg/twitter__share.svg';
import LinkedinIcon from '../assets/svg/linkedin__share.svg';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

const ArticlePage = ({ pageContext, location }) => {
  console.log(pageContext);

  return (
    <Layout>
      <div className="article">
        <SEO
          title={pageContext.Title}
          ogTitle={pageContext.Title}
          description={pageContext.Short_description}
          ogDescription={pageContext.Short_description}
          image={pageContext.Hero_image.childImageSharp.fixed.src}
          meta={[]}
        />

        {pageContext.Full_image && (
          <div
            className="bg-center bg-cover h-62 md:h-160"
            style={{
              backgroundImage: `url(${pageContext.Hero_image.publicURL})`,
            }}
          >
            <div className="row">
              <div className="relative flex items-center justify-between article__header">
                <div>
                  <Link to="/" className="homepage__header-logo">
                    <IconLogo />
                  </Link>
                </div>
                <div>
                  <LangDropdown
                    currentLang={pageContext.currentLang}
                    langs={pageContext.lang}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="my-auto ">
            {!pageContext.Full_image && (
              <div className="relative flex items-center justify-between article__header">
                <div>
                  <Link to="/" className="homepage__header-logo">
                    <IconLogo />
                  </Link>
                </div>
                <div className="mb-3">
                  <LangDropdown
                    currentLang={pageContext.currentLang}
                    langs={pageContext.lang}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="article__image-row row md:px-4">
          <div className="article__content">
            {!pageContext.Full_image && (
              <img
                src={pageContext.Hero_image.publicURL}
                className="avatar"
                alt={pageContext.Title}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="article__content">
            <div className="mb-3">
              <Link to="/" className="flex items-center text-xs">
                {' '}
                <IconArrow className="w-4 mr-2" /> Back to icdsca.com
              </Link>
            </div>
            <h1 className="article__title">{pageContext.Title}</h1>
            <p className="article__last-updated">
              {moment(pageContext.Posted_date).format('MMMM YYYY')}
            </p>

            <div className="flex flex-wrap body-post">
              <ReactMarkdown
                escapeHtml={false}
                source={pageContext.Content}
                linkTarget="_blank"
                renderers={{ paragraph: 'p' }}
                className="w-full body-post-inner sm:w-9/12"
              />
              <div
                className="sticky flex flex-col items-center justify-center w-full h-56 body-post-social sm:w-3/12"
                style={{ top: '48px' }}
              >
                <div className="font-bold uppercase body-post-social__title">
                  share
                </div>
                <div className="flex flex-row justify-around w-full mt-10 social-list sm:w-auto sm:flex-col">
                  <span className="mb-6">
                    <FacebookShareButton
                      quote={pageContext.Title}
                      // description={SEO.description}
                      image={pageContext.Hero_image.publicURL}
                      url={location.href}
                      className="outline-none"
                    >
                      <FacebookIcon size={36} className="outline-none" />
                    </FacebookShareButton>
                  </span>
                  <span className="mb-6">
                    <TwitterShareButton
                      quote={pageContext.Title}
                      // description={SEO.description}
                      image={pageContext.Hero_image.publicURL}
                      url={location.href}
                      className="outline-none"
                    >
                      <TwitterIcon size={36} className="outline-none" />
                    </TwitterShareButton>
                  </span>
                  <span>
                    <LinkedinShareButton
                      quote={pageContext.Title}
                      // description={SEO.description}
                      image={pageContext.Hero_image.publicURL}
                      url={location.href}
                      className="outline-none"
                    >
                      <LinkedinIcon size={36} className="outline-none" />
                    </LinkedinShareButton>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer lightTheme noContact pageContext={pageContext} />
    </Layout>
  );
};

export default ArticlePage;
