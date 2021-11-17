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

let state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
};
console.log(state)

export const News = ({ pageContext }) => {
    const data = useStaticQuery(graphql`
    query AllArticlesQuery {
      allStrapiArticle(filter: { Published: { eq: true } }) {
        nodes {
          lang {
            id
            Title
            Short_description
            lang
            Preview_image {
              childImageSharp {
                fluid(
                  fit: COVER
                  cropFocus: CENTER
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
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
        ...data.allStrapiArticle.nodes,
        ...data.allStrapiArticle.nodes,
        ...data.allStrapiArticle.nodes
    ];

    // Slider.state = { currentSlide: 0 };

    // const handleAfterChange = index => {
    //     console.log("after change", index);
    //     this.setState({
    //         currentSlide: 'index'
    //     });
    // };

    function NavArrowLeft(props) {
        const { className, onClick } = props;

        return (
            <button className={className + ' text-gray-250 outline-none'} onClick={onClick}>
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

    const settings = {
        infinite: true,
        focusOnSelect: false,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        // autoplay: true,
        speed: 400,
        autoplaySpeed: 4000,
        // fade: true,
        nextArrow: <NavArrowRight />,
        prevArrow: <NavArrowLeft />,
        beforeChange: (current, next) =>
            this.setState({ oldSlide: current, activeSlide: next }),
        afterChange: current => this.setState({ activeSlide2: current }),
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: handleAfterChange,
        //  beforeChange: (current, next) => {
        //     console.log(current, next);
        // },
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
                                href={`/newsroom/${pageContext.lang === 'en' ? '' : `${pageContext.lang}/`
                                    }${article.lang[0].slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news__article slider"
                            >
                                <div className="slider__image">
                                    {article.lang && (
                                        <Img
                                            style={{ height: '100%' }}
                                            fluid={
                                                article.lang[0].Preview_image.childImageSharp.fluid
                                            }
                                        />
                                    )}
                                </div>
                                <div className="content py-16 px-11 h-full">
                                    <h3 className="slider__title">{article.Title}</h3>
                                    <p className="slider__description">
                                        {article.lang && article.lang[0].Short_description}
                                    </p>
                                    <div className="inline-flex justify-end w-full">
                                        <button
                                            className="slider__btn inline-flex items-start py-4 px-6 uppercase"
                                        >
                                            Read more{[<IconPost className="ml-4" />]}

                                        </button>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </Slider>
                    <div className="inline-flex mt-10 w-full items-center justify-between navigation">
                        <div className="flex">
                            
                            <span>
                                {+ 1} / {sliderElements.length}{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
