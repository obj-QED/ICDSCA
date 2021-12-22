import React, { Component } from 'react';
import ReactDOM from "react-dom";
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import IconArrowLeft from '../assets/svg/arrow.svg';
import IconArrowRight from '../assets/svg/arrow.svg';
import IconPost from '../assets/svg/post__arrow.svg';

import { useStaticQuery, graphql, Link } from 'gatsby';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import moment from 'moment';


export const News = ({ pageContext }) => {
    const data = useStaticQuery(graphql`
        query AllArticlesQuery {
          allStrapiArticle(filter: { Published: { eq: true } }) {
            nodes {
              lang {
                id
                Title
                Short_description
                Content
                lang
                
                Preview_image {
                    childImageSharp {
                        fluid(cropFocus: CENTER, fit: COVER, maxHeight: 285, maxWidth: 640) {
                            ...GatsbyImageSharpFluid
                        }
                      }
                }
                url
              }
              id
              Title
              Published
              strapiId
            }
          }
        }
      `);
      const sliderElements = [
          ...data.allStrapiArticle.nodes
        ];
        
    function NavArrowLeft(props) {

        const { className, onClick } = props;

        return (
            <button className={classNames({
                'slick-arrow slick-prev outline-none': true,
                'text-orange-600': slide >= 1,
                'text-gray-250': slide < 1
            })} onClick={onClick}>
                <IconArrowRight />
            </button>
        );
    };

    function NavArrowRight(props) {
        const { className, onClick } = props;

        return (
            <button className={className + ' text-orange-600 outline-none'} onClick={onClick}>
                <IconArrowLeft />
            </button>
        );
    };
    
    const [slide, setSlide] = React.useState(0);
    const [active, setActive] = React.useState(0);

    let variableSlidesToShow = (sliderElements.length >= 2) ? 2 : 1;

    const settings = {
        className: "variable-width",
        infinite: true,
        focusOnSelect: false,
        arrows: true,
        dots: false,
        slidesToShow: variableSlidesToShow,
        slidesToScroll: 1,
        focusOnSelect: true,
        speed: 400,
        autoplaySpeed: 4000,
        prevArrow: <NavArrowLeft />,
        nextArrow: <NavArrowRight />,
        beforeChange: (current, next) => setSlide(next),
        afterChange: (current) => setActive(current),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="news pb-40">
            <div className="row">
                <div className="news__heading pt-24">
                    <VisibilitySensor partialVisibility>
                        {({ isVisible: isVisibleScreen }) => (
                            <h2
                                className={classNames('headline visibility-animation', {
                                    visible: isVisibleScreen,
                                })}
                            >
                                <span>{pageContext.menu_news || 'Latest News'}</span>
                            </h2>
                        )}
                    </VisibilitySensor>
                </div>
                <div className="news news--slider relative pb-4">
                    <Slider {...settings}>
                        {sliderElements.map((article) => (
                            <a key={article.id}
                                href={ (article.lang[0].Content !== null) ? `/newsroom/${pageContext.lang === 'en' ? '' : `${pageContext.lang}/`
                                    }${article.lang[0].url}` : ''}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                className={classNames('news__article slider', {
                                    'news__article--one-show': variableSlidesToShow === 1 && active === 0,
                                    'news__article--more-show': variableSlidesToShow > 1,
                                    'pointer-events-none': article.lang[0].Content === null,
                                    'news__article--no-image': article.lang[0].Preview_image === null
                                })}
                            >
                                <div className="outline">
                                        {article.lang[0].Preview_image !== null && (
                                            <div className="slider__image">
                                                <Img
                                                    fluid={article.lang[0].Preview_image.childImageSharp.fluid}
                                                    alt={article.lang[0].Title}
                                                    style={{ height: '100%' }}
                                                />
                                            </div>
                                        )}
                                    <div className="slider__content py-12 px-8">
                                        <h3 className="slider__title">
                                            {article.lang[0].Title.length > 74 ? article.lang[0].Title.substring(0, 74) + '...' : article.lang[0].Title}
                                        </h3>
                                        <div className="news__article--date mb-2 text-sm text-gray-400">
                                            {moment(pageContext.Posted_date).format('DD MMMM YYYY')}
                                        </div>
                                        <p className="slider__description">
                                            {article.lang[0].Short_description.length > 180 ? article.lang[0].Short_description.substring(0, 180) + '...' : article.lang[0].Short_description}
                                        </p>
                                        {article.lang[0].Content !== null && (
                                            <div className="inline-flex justify-end w-full mt-4">
                                                <button
                                                    className="slider__btn inline-flex items-start py-4 px-6 uppercase"
                                                >
                                                    Read more{[<IconPost className="ml-4" />]}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Slider>
                    <div className="inline-flex mt-6 w-full items-center justify-between navigation">
                        <div className="flex">
                            <span className="params">
                                {sliderElements.length >= 2 && (
                                    <span className="current">
                                        {slide + 1}
                                        {'/'}
                                        {sliderElements.length}{" "}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
