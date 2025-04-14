import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header flex flex-col justify-center items-center ${scrolled ? 'scrolled' : ''}`}>
      <div>
        <div className="header-logo flex justify-center">
          <Link to="/Checkpoint5-FrontEnd/">🔥 Melodia</Link>
        </div>

        <nav className={`header-menu ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/Checkpoint5-FrontEnd/" className='hidden sm:block'>Home</Link>
          <Link to="/Checkpoint5-FrontEnd/sobre" className='hidden sm:block'>Sobre</Link>
          <Link to="/Checkpoint5-FrontEnd/depoimento" className='hidden sm:block'>Depoimentos</Link>
          <Link to="/Checkpoint5-FrontEnd/contato" className='hidden sm:block'>Contato</Link>
        </nav>
      </div>
      <button id="menu-btn" className={`sm:hidden text-3xl mobile-button ${scrolled ? 'scrolled' : ''}`} onClick={() => setIsOpen(!isOpen)} >
        ☰
      </button>
      {isOpen && (
        <div className='flex flex-col items-center block sm:hidden'>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
          <Link to="/depoimento" onClick={() => setIsOpen(false)}>Depoimento</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
}

