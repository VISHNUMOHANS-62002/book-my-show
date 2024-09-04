import React, { useState } from 'react'
import HeroSlider from 'react-slick'
import {NextArrow ,PrevArrow} from './Arrows.Component'
const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/ug$5FVfCI3RV0ZwZtBV3HAV75ox.jpg",
      genre_ids: [16, 878, 28],
      id: 610150,
      original_langiage: "ja",
      original_title: "ドラゴンボール超 スーパーヒーロー",
      overview:
        "The Red Ribbon Army,an evil organization that was oncedestroyed by Gokuin the past,has been reformed by a group of people",
      popularity: 5953.989,
      poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
      release_date: "2022-06-11",
      title: "Dragon Ball Super:Super Hero",
      video: false,
      vote_average: 8,
      vote_count: 1426,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_langiage: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter,life is all about conquering fears and pushing limits",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgyUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
  ]);
 
  const settingsLG = {
    dots:true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase:"linear",
    
  };
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    cssEase: "linear",

  };
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image,index) => {
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src="{`https://image.tmdb.org/t/p/original${images.backdrop_path}`}"
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              ></img>
            </div>;
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image,index) => {
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src="{`https://image.tmdb.org/t/p/original${images.backdrop_path}`}"
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              ></img>
            </div>;
          })}
        </HeroSlider>
      </div>
    </>
  );
}

export default HeroCarousel