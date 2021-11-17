import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import { Link } from '../components/Link';
import { Layout } from '../components/Layout';
import SEO from '../components/seo';
import { CurrentActivities } from '../components/CurrentActivities';
import { Academy } from '../components/Academy';
import { Mission } from '../components/Mission';
import { History } from '../components/History';
import { Artymys } from '../components/Artymys';
import { Traceability } from '../components/Traceability';
import { Footer } from '../components/Footer';
import { News } from '../components/News';

import IconLogo from '../assets/svg/logo.svg';

const isClient = typeof window === 'object';

const IndexPage = ({ pageContext }) => {
  const { metaImage } = useStaticQuery(
    graphql`
      query IndexPageQuery {
        metaImage: file(absolutePath: { regex: "/og_index.jpg/" }) {
          childImageSharp {
            fixed(quality: 100, width: 1200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  const [positions, setPositions] = useState([]);
  const [scroll, setScroll] = useState(0);

  const whatWeDoRef = useRef();
  const caseStudiesRef = useRef();
  const serviceRef = useRef();
  const aboutUsRef = useRef();
  const historyRef = useRef();
  const traceabilityRef = useRef();
  const newsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    const handlePositions = () => {
      setPositions(
        [
          whatWeDoRef,
          caseStudiesRef,
          serviceRef,
          aboutUsRef,
          historyRef,
          traceabilityRef,
          newsRef,
          contactRef,
        ].map(
          (concept) =>
            concept.current.getBoundingClientRect().top + window.scrollY - 320
        )
      );
    };

    setTimeout(() => {
      handlePositions();
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handlePositions);
    }, 300);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handlePositions);
    };
  }, []);

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <Layout>
      <div className="homepage">
        <SEO
          title={pageContext.seo_title}
          ogTitle={pageContext.seo_og_title}
          description={pageContext.seo_description}
          ogDescription={pageContext.seo_og_description}
          image={metaImage.childImageSharp.fixed.src}
          meta={[]}
        />
        <header className="homepage__header" ref={whatWeDoRef}>
          {isClient && positions.length > 0 && (
            <div
              className={classNames('homepage__menu', {
                light: scroll <= positions[1] - (window.innerHeight / 2 - 50),
                dark: scroll > positions[1] - (window.innerHeight / 2 - 50),
                image:
                  scroll > positions[3] - (window.innerHeight / 2 - 50) &&
                  scroll <= positions[4] - (window.innerHeight / 2 - 50),
              })}
            >
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll < positions[1],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(whatWeDoRef)}
                >
                  {pageContext.menu_header}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[1] && scroll < positions[2],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(caseStudiesRef)}
                >
                  {pageContext.menu_case_studies}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[2] && scroll < positions[3],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(serviceRef)}
                >
                  {pageContext.menu_academy}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[3] && scroll < positions[4],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(aboutUsRef)}
                >
                  {pageContext.menu_mission}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[4] && scroll < positions[5],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(historyRef)}
                >
                  {pageContext.menu_history}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[5] && scroll < positions[6],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(traceabilityRef)}
                >
                  {pageContext.menu_supply}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll > positions[6] && scroll < positions[7],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(newsRef)}
                >
                  {pageContext.menu_news || 'LATEST NEWS'}
                </button>
              </p>
              <p>
                <button
                  type="button"
                  className={classNames('homepage__menu-item', {
                    active: scroll >= positions[7],
                  })}
                  tabIndex="0"
                  onClick={() => scrollToRef(contactRef)}
                >
                  {pageContext.menu_contact}
                </button>
              </p>
            </div>
          )}

          <div className="homepage__header-content">
            <div className="row">
              <div className="homepage__header-screen">
                <Link to="/" className="homepage__header-logo">
                  <IconLogo />
                </Link>
                <h2 className="homepage__header-label red">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head_label}
                    renderers={{ paragraph: 'span' }}
                  />
                </h2>

                <h1 className="homepage__header-headline">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head_title}
                    renderers={{ paragraph: 'span' }}
                  />
                </h1>

                <p className="homepage__header-sub-headline-description">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head_description}
                    renderers={{ paragraph: 'span' }}
                  />
                </p>
              </div>
              <div className="homepage__header-screen">
                <h2 className="homepage__header-label">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head2_label}
                    renderers={{ paragraph: 'span' }}
                  />
                </h2>
                <p className="homepage__header-description homepage__header-narrow">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head2_text}
                    renderers={{ paragraph: 'span' }}
                  />
                </p>

                <p className="homepage__header-large-description">
                  <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.head2_description}
                    renderers={{ paragraph: 'span' }}
                  />
                </p>
              </div>
            </div>
          </div>
        </header>

        <div ref={caseStudiesRef}>
          <CurrentActivities pageContext={pageContext} />
        </div>

        <div ref={serviceRef}>
          <Academy pageContext={pageContext} />
        </div>

        <div ref={aboutUsRef}>
          <Mission pageContext={pageContext} />
        </div>
        <div ref={historyRef}>
          <History pageContext={pageContext} />
        </div>
        <div>
          <Artymys pageContext={pageContext} />
        </div>
        <div ref={traceabilityRef}>
          <Traceability pageContext={pageContext} />
        </div>
        <div ref={newsRef}>
          <News pageContext={pageContext} />
        </div>
        <div ref={contactRef}>
          <Footer pageContext={pageContext} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
