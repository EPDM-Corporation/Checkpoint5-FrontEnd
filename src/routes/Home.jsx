import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Album1 from '../assets/Album1.jpg';
import Album2 from '../assets/Album2.jpg'

const albums = [Album1, Album2, Album1, Album1]; // você pode trocar esses depois

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : albums.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < albums.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="home-container flex flex-col items-center">
      <div className="green-text lg:w-200 m-20 text-3xl text-center">
        Mais de 100 milhões de músicas, álbuns e podcasts esperando por você.
        Do hit do momento ao som que só você conhece, tudo num só play.
      </div>

      <div className="flex items-center justify-center">
        <button className="album-button" onClick={handlePrev}>
          <div className="left-arrow"></div>
        </button>

        <div className="album-bg flex flex-col items-center w-60 p-10">
          <img src={albums[currentIndex]} alt="Álbum" className="w-40 h-40 rounded-lg shadow-lg" />
          <button className="album-escutar mt-3">Ouvir Agora</button>
        </div>

        <button className="album-button" onClick={handleNext}>
          <div className="right-arrow"></div>
        </button>
      </div>

      <div className="home-disk-bg w-full h-100 m-5" />
    </div>
  );
};

export default Home;