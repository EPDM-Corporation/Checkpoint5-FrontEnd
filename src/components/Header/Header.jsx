import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header flex flex-col justify-center items-center">
    <div>
      <div className="header-logo flex justify-center">
        <Link to="/">🔥 Melodia</Link>
      </div>

      <nav className="header-menu">
        <Link to="/" className='hidden sm:block'>Home</Link>
        <Link to="/sobre" className='hidden sm:block'>Sobre</Link>
        <Link to="/depoimento" className='hidden sm:block'>Depoimentos</Link>
        <Link to="/contato" className='hidden sm:block'>Contato</Link>
      </nav>
    </div>
    <button id="menu-btn" className="sm:hidden text-3xl" onClick={() => setIsOpen(!isOpen)} >
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

