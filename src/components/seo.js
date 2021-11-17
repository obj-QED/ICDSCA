/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useLocation } from '@reach/router';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import ImageOG from '../assets/images/bg_header.jpg';

function SEO({
  description,
  lang,
  meta,
  title,
  ogTitle,
  image,
  ogDescription,
}) {
  const { pathname } = useLocation();

  const { site, logoImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteName
            description
            author
            siteUrl
          }
        }
        logoImage: file(absolutePath: { regex: "/logo.svg/" }) {
          id
          publicURL
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.siteName}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${ogTitle || title} | ${site.siteMetadata.siteName}`,
        },
        {
          property: `og:description`,
          content: ogDescription || metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.siteName,
        },
        {
          property: `og:image`,
          content: image ? `${site.siteMetadata.siteUrl}${image}` : ImageOG,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.siteName}`,
        },
        {
          name: `twitter:description`,
          content: ogDescription || metaDescription,
        },
        {
          name: `twitter:image`,
          content: image ? `${site.siteMetadata.siteUrl}${image}` : ImageOG,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:property`,
          content: `summary_large_image`,
        },
      ].concat(meta)}
      link={[{ rel: 'canonical', href: `${pathname}` }]}
    >
      <script type="application/ld+json">
        {`
        {
          "@context":"http://schema.org",
          "@type":"Organization",
          "name":" International Civil Defense Support & Coordination Agency ",
          "telephone":"+41797640016",
          "url":"https://www.icdsca.com",
          "logo":"${site.siteMetadata.siteUrl}${logoImage.publicURL}", 

          "address":{
            "@type":"PostalAddress",
            "streetAddress":"2 Place du Grand Mezel",
            "addressLocality":"Geneva",
            "addressRegion":"CH",
            "postalCode":"1204"
           }   
        } 
    `}
      </script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
