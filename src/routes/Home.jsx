import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container flex items-center">
            <div className='green-text lg:w-200 m-20 text-3xl'> Mais de 100 milhões de músicas,
                 álbuns e podcasts esperando por você.
                  Do hit do momento ao som que só você 
                  conhece tudo num só play.</div>
            <div className='flex items-center'>
                <div className='album-button'>
                    <div className='left-arrow'></div>
                </div>
                <div className='album-bg'>

                </div>
                <div className='album-button'>
                    <div className='right-arrow'></div>
                </div>
            </div>

            <div className='home-disk-bg w-full h-100 m-5'>

            </div>
    </div>
  );
};

export default Home;
