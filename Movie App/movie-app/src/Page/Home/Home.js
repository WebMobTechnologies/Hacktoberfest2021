import React from "react";
import "./Home.scss";
import {
    Link
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";



export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 2,
        autoplay: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    centerPadding: '10px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px'
                },
            

            }
        ]
    };
    return (
        <>
            <div className=" mb-5 container mt-5">
                <div className="d-flex justify-content-between">
                    <h2 className="ms-2 text-blue">Comedy</h2>
                    <div className="d-flex ">
                        <p className="mt-1 me-2 text-purple">See All</p>
                        <i className="fa fa-caret-right mt-2  text-blue"></i>
                    </div>
                </div>
                <Slider {...settings}>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3   ">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md col-lg col-sm ">
                        <Link to={`/MovieDetails/438631`}>
                            <div className="card mt-3 cardH">
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face//d5NXSklXo0qyIYkgV94XAgMIckC.jpg`}
                                    className="card-img-top img-zoom"
                                    alt="moviePoster"
                                />
                                <div className="card-body ">
                                    <div className="d-flex justify-content-between">
                                        <p className=" text-white title-Toprated">
                                            Dune
                                        </p>
                                        <p className="text-end card-rat">
                                            <span className="text-success fs-5">2.5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                </Slider>
            </div>
        </>
    )
}