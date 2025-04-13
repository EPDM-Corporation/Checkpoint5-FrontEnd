import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">🔥 Melodia</Link>
      </div>
      <nav className="header-menu">
        <Link to="/sobre">Sobre</Link>
        <Link to="/depoimento">Depoimentos</Link>
      </nav>
    </header>
  );
}

