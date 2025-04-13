import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Hello World</h1>

      {/* Botão que leva para a página Sobre */}
      <Link to="/sobre">
        <button className="home-button">Ir para Sobre</button>
      </Link>
    </div>
  );
};

export default Home;
