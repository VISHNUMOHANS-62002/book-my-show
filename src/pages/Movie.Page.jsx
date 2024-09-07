import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import MovieLayoutHoc from '../layouts/Movie.layout'
import axios from 'axios';

const MoviePage = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedrMovies] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `/movie/${id}/credits?&api_key=2d0b6996db8e7f8c292f9be225a60113`
      );
      setCast(getCast.data.cast);
    };
    requestCast();
  }, []);
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `/movie/${id}/similar?&api_key=2d0b6996db8e7f8c292f9be225a60113`
      );
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, []);
  useEffect(() => {
    const requestRecommendedrMovies = async () => {
      const getRecommendedrMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedrMovies(getRecommendedrMovies.data.results);
    };
    requestRecommendedrMovies();
  }, []);

  return <div>MoviePage</div>;
}

export default MovieLayoutHoc(MoviePage)