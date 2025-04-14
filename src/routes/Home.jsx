import React, { useState } from 'react';
import './Home.css';

import Banner from '../assets/banner.png'

import Album1 from '../assets/Album1.jpg';
import Album2 from '../assets/Album2.jpg';
import Album3 from '../assets/Album3.jpg';
import Album4 from '../assets/Album4.jpg';

import PlanoFree from '../assets/plano-free.png'
import PlanoPadrao from '../assets/plano-padrao.png'
import PlanoPremium from '../assets/plano-premium.png'

const albums = [Album1, Album2, Album3, Album4];

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
        <section>
            <div className="green-text lg:w-200 m-20 text-3xl text-center">
            Melodia: Sua Música, Sua Forma
            </div>

            <div className="green-text lg:w-200 m-20 text-3xl text-center">
                Mais de 100 milhões de músicas, álbuns e podcasts esperando por você.
                Do hit do momento ao som que só você conhece, tudo num só play.
            </div>
      </section>

      <section className='flex items-center flex-col lg:flex-row'>
        <img src={Banner} alt="" className='w-150 m-20'/>
      <div>
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
      </div>
      </section>

      <section className="home-disk-bg w-full h-300 lg:h-100 m-5 flex flex-col items-center">
        <div className='plan-text flex justify-center m-10'>
            Junte-se a festa e faça parte de umas das maiores plataformas de streaming do MUNDO!
        </div>
        <div className='plan-type lg:flex'>
            <div className='flex flex-col items-center'>
                <img src={PlanoFree} alt="" className='w-75'/>
                <div className='plan-text'>Plano Free</div>
                <button className="album-escutar mt-3">Adquira Agora</button>
            </div>
            <div className='flex flex-col items-center'>
                <img src={PlanoPadrao} alt="" className='w-75'/>
                <div className='plan-text'>Plano Padrão</div>
                <button className="album-escutar mt-3">Adquira Agora</button>
            </div>
            <div className='flex flex-col items-center'>
                <img src={PlanoPremium} alt="" className='w-75'/>
                <div className='plan-text'>Plano Premium</div>
                <button className="album-escutar mt-3">Adquira Agora</button>
            </div>

        </div>
        
      </section>
    
     </div>
  );
};

export default Home;