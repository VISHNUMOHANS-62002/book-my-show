import React, { useState } from 'react'
import Defaultlayout from '../layouts/Default.layout'

import EntertaimentCard from '../components/Entertaiment/EntertaimentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'


const HomePage = () => {
  const [recommendedMovies,setRecommendedMovies]=useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertaiment
        </h1>
        <EntertaimentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="" className="" />
          </div>
          <PosterSlider
            title="Premiers"
            subtitle="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
        <PosterSlider
          title="Online Streaming Events"
          subtitle="Online Streaming Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default Defaultlayout(HomePage)