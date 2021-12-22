const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const assignInWith = require('lodash/assignInWith');
const find = require('lodash/find');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const indexTemplate = path.resolve(`./src/templates/index.js`);
  const privacyTemplate = path.resolve(`./src/templates/privacy-policy.js`);
  const articleTemplate = path.resolve(`./src/templates/article-single.js`);

  const mainPageResult = await graphql(
    `
      {
        strapiMainPage {
          langs {
            lang
            id
            seo_title
            seo_og_title
            seo_description
            seo_og_description
            head_label
            head_title
            head_description
            head2_label
            head2_text
            head2_description
            menu_header
            menu_case_studies
            menu_academy
            menu_mission
            menu_history
            menu_supply
            menu_contact
            covid_response_title
            covid_response_title2
            covid_response_list {
              title
              icon
            }
            covid_response_contact_text
            covid_response_contact_email
            natural_disaster_title
            natural_disaster_title2
            natural_disaster_list {
              title
              icon
            }
            case_china_title
            case_china_title2
            case_china_list {
              title
              icon
              description
            }
            academy_title
            academy_description
            academy_button
            academy_button_url
            mission_title
            mission_description_large
            mission_description
            history_title
            history_2014
            history_2015
            history_2016
            history_2017
            history_2018
            history_2018_2
            history_2020_1
            history_2020_2
            history_2020_3
            history_2020_4
            history_2020_5
            history_2020_6
            supply_chain_title
            supply_chain_sub_title
            supply_chain_description
            supply_chain_kyc_compliance
            supply_chain_aml_compliance
            supply_chain_transparency
            supply_chain_reliability
            supply_chain_product_quality
            supply_chain_price_analysis
            marketplace_title
            marketplace_description
          }
        }
      }
    `
  );

  const privacyPageResult = await graphql(
    `
      {
        strapiPrivacyPolicy {
          langs {
            lang
            id
            title
            content
            last_updated
          }
          updated_at
        }
      }
    `
  );

  const footerResult = await graphql(
    `
      {
        strapiFooter {
          langs {
            lang
            id
            footer_form_label
            footer_form_title
            footer_form_button
            footer_headquarters_title
            footer_headquarters_contact
            footer_china_title
            footer_china_contact
            footer_china_tel
            footer_china_mob
            footer_italy_title
            footer_italy_contact
            footer_italy_tel
            footer_info_title
            footer_info_description
            footer_copyright
            privacy_policy
          }
        }
      }
    `
  );

  const articleResult = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            lang {
              id
              Title
              Short_description
              lang
              Content
              Preview_image {
                publicURL
                childImageSharp {
                  fluid(
                    maxWidth: 404
                    fit: COVER
                    maxHeight: 260
                    cropFocus: CENTER
                  ) {
                    src
                  }
                }
              }
              url
              Video_field {
                absolutePath
                publicURL
              }
            }
            id
            Published
            strapiId
            updated_at
            Posted_date
            created_at
          }
        }
      }
    `
  );

  if (mainPageResult.errors) {
    throw mainPageResult.errors;
  }

  const langs = mainPageResult.data.strapiMainPage.langs;
  const privacyPolicy = privacyPageResult.data.strapiPrivacyPolicy;
  const footerLangs = footerResult.data.strapiFooter.langs;
  const articleLangs = articleResult.data.allStrapiArticle.nodes;

  langs.forEach((page) => {
    const pageData = assignInWith(langs[0], page, (val, srcVal) => {
      return srcVal && srcVal.length > 0 ? srcVal : val;
    });
    // const footerData = find(footerLangs, ({ lang }) => lang === page.lang) || footerLangs[0];
    let footerData = {};
    footerData = assignInWith(
      { ...footerLangs[0] },
      find(footerLangs, ({ lang }) => lang === page.lang) || footerLangs[0],
      (val, srcVal) => {
        return srcVal && srcVal.length > 0 ? srcVal : val;
      }
    );

    createPage({
      path: `/${page.lang === 'en' ? '' : page.lang}`,
      component: indexTemplate,
      context: {
        ...pageData,
        ...footerData,
      },
    });
  });

  articleLangs.forEach((articleObj) => {
    articleObj.lang.forEach((article) => {
      let footerData = {};
      footerData = assignInWith(
        { ...footerLangs[0] },
        find(footerLangs, ({ lang }) => lang === article.lang) ||
        footerLangs[0],
        (val, srcVal) => {
          return srcVal && srcVal.length > 0 ? srcVal : val;
        }
      );

      createPage({
        path: `newsroom/${article.lang === 'en' ? '' : `${article.lang}/`}${article.url
          }`,
        component: articleTemplate,
        context: {
          ...article,
          ...footerData,
          ...articleObj,
          currentLang: article.lang,
        },
      });
    });
  });

  privacyPolicy.langs.forEach((page) => {
    const pageData = assignInWith(
      privacyPolicy.langs[0],
      page,
      (val, srcVal) => {
        return srcVal && srcVal.length > 0 ? srcVal : val;
      }
    );

    let footerData = {};
    footerData = assignInWith(
      { ...footerLangs[0] },
      find(footerLangs, ({ lang }) => lang === page.lang) || footerLangs[0],
      (val, srcVal) => {
        return srcVal && srcVal.length > 0 ? srcVal : val;
      }
    );

    createPage({
      path: `/privacy-policy/${page.lang === 'en' ? '' : page.lang}`,
      component: privacyTemplate,
      context: {
        updated_at: privacyPolicy.updated_at,
        ...pageData,
        ...footerData,
      },
    });
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = '/app/*';
    // Update the page.
    createPage(page);
  }
};

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
