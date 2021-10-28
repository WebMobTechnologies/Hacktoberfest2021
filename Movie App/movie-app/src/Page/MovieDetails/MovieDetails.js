import React from "react";
import StarRatings from "react-star-ratings";
import "./MovieDetails.scss";import {
  Link
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function MovieDetails() {
  var settings = {
    dots: false,
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
      <div className="container">
        <img src=" http://images6.fanpop.com/image/photos/39600000/Alice-and-The-White-Queen-alice-through-the-looking-glass-39636446-1920-1038.jpg" className="img-fluid"></img>
      </div>

      <div className="crd-overlap">
        <div className="container">
          <div className="col-12 " >
            <div className="card">
              <div className=" row-flex p-4">
                <div className="col-md-4 col-lg-4 col-sm">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjxiuyWJLgN-6BBqz9tlvBZ1DLiCxN5NuqA&usqp=CAU`}
                    className="img-fluid poster"
                  />
                </div>
                <div className="col-md-7 col-lg-7 col-sm">
                  <div className="card-block ">
                    <div className="d-flex mt-3 ms-2 ">
                      <p className="rating">6.3</p>
                      <div>
                        <div className="ms-3">
                          <StarRatings
                            rating={2.6}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            starDimension="20px"
                          />
                        </div>
                        <div className="ms-3">47,1002</div>
                      </div>
                    </div>
                    <h5 className="card-title text-purple fs-1 ms-2"> Alice through the looking glass</h5>
                    <p className="card-text mt-3 ms-2">1hr 30min </p>

                  </div>

                </div>
              </div>
              <div className="d-inline card-text mt-3 me-3 ms-2 p-0 p-md-2">
                <p className="d-inline  me-2 ms-2">
                  The seven-and-a-half-year-old protagonist of the story. Alice’s dream leads to her adventures in Looking-Glass World.
                  Alice has set perceptions of the world and becomes frustrated when Looking-Glass World challenges those perceptions.
                  Alice has good intentions, but has trouble befriending any of the creatures that populate Looking-Glass World.

                  The seven-and-a-half-year-old protagonist of the story. Alice’s dream leads to her adventures in Looking-Glass World.
                  Alice has set perceptions of the world and becomes frustrated when Looking-Glass World challenges those perceptions.
                  Alice has good intentions, but has trouble befriending any of the creatures that populate Looking-Glass World.

                </p>
              </div>
              <div className="fs-1 text-purple p-4">Cast</div>
              <div className="container-fluid">
                <div className="bg-img-cast p-4">
                <Slider {...settings}>



<div className="col-md col-lg col-sm mt-5">
    <Link to={`/MovieDetails/438631`}>
        <div className="mt-3 cardc ">
            <img
                src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/14/14/alan-rickman-30.jpg?width=1200&auto=webp&quality=75`}
                className="card-img-topc"
                alt="moviePoster"
            />
            <div className="card-body">
                <div className="text-center">
                    <p className=" title-Toprated ">
                        ABCD ABCD
                    </p>
                   
                </div>
            </div>
        </div>
    </Link>
</div>
<div className="col-md col-lg col-sm mt-5">
    <Link to={`/MovieDetails/438631`}>
        <div className="mt-3 cardc ">
            <img
                src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/14/14/alan-rickman-30.jpg?width=1200&auto=webp&quality=75`}
                className="card-img-topc"
                alt="moviePoster"
            />
            <div className="card-body">
                <div className="text-center">
                    <p className=" title-Toprated ">
                        ABCD ABCD
                    </p>
                   
                </div>
            </div>
        </div>
    </Link>
</div>
<div className="col-md col-lg col-sm mt-5 ">
    <Link to={`/MovieDetails/438631`}>
        <div className="mt-3 cardc ">
            <img
                src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/14/14/alan-rickman-30.jpg?width=1200&auto=webp&quality=75`}
                className="card-img-topc"
                alt="moviePoster"
            />
            <div className="card-body">
                <div className="text-center">
                    <p className=" title-Toprated ">
                        ABCD ABCD
                    </p>
                   
                </div>
            </div>
        </div>
    </Link>
</div>
<div className="col-md col-lg col-sm mt-5">
    <Link to={`/MovieDetails/438631`}>
        <div className="mt-3 cardc ">
            <img
                src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/14/14/alan-rickman-30.jpg?width=1200&auto=webp&quality=75`}
                className="card-img-topc"
                alt="moviePoster"
            />
            <div className="card-body">
                <div className="text-center">
                    <p className=" title-Toprated ">
                        ABCD ABCD
                    </p>
                   
                </div>
            </div>
        </div>
    </Link>
</div>
<div className="col-md col-lg col-sm mt-5 ">
    <Link to={`/MovieDetails/438631`}>
        <div className="mt-3 cardc ">
            <img
                src={`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/14/14/alan-rickman-30.jpg?width=1200&auto=webp&quality=75`}
                className="card-img-topc"
                alt="moviePoster"
            />
            <div className="card-body">
                <div className="text-center">
                    <p className=" title-Toprated ">
                        ABCD ABCD
                    </p>
                   
                </div>
            </div>
        </div>
    </Link>
</div>


</Slider>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}