import React from 'react';
import { Layout } from '../components/Layout';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import ReactMarkdown from "react-markdown";
import moment from "moment";

import IconLogo from "../assets/svg/logo_black.svg"
import SEO from "../components/seo"
import { Footer } from "../components/Footer"

const CookiesPage = ({ pageContext }) => {

  const { metaImage } = useStaticQuery(
    graphql`
      query IndexCookiesPolicyQuery {
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

  console.log(pageContext);

  return (
    <Layout>
      <div className="cookies-policy">
        <SEO
          title={pageContext.title}
          ogTitle={pageContext.title}
          description={pageContext.seo_description}
          ogDescription={pageContext.seo_description}
          image={metaImage.childImageSharp.fixed.src}
          meta={[]}
        />

        <div className="row">
          <div className="cookies-policy__header">
            <Link to="/">
              <IconLogo />
            </Link>
          </div>

          <div className="cookies-policy__content">
            <h1>{pageContext.title}</h1>
            <p className="cookies-policy__last-updated">{pageContext.last_updated} {moment(pageContext.updated_at).format('MMMM DD, YYYY')}</p>

            <ReactMarkdown escapeHtml={false} source={pageContext.content} />
          </div>
        </div>

        <Footer noContact pageContext={pageContext} />
      </div>
    </Layout>
  );
};

export default CookiesPage;
