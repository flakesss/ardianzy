import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigate to page and update breadcrumb
  const navigateTo = (page, breadcrumb) => {
    navigate(page, breadcrumb);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a onClick={() => navigateTo('home', ['Home'])}>
            <img src="src/assets/Header/Logo.svg" alt="Ardhianzy Logo" />
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <a 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => navigateTo('home', ['Home'])}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                className={currentPage === 'library' ? 'active' : ''}
                onClick={() => navigateTo('library', ['Home', 'Library'])}
              >
                Library
              </a>
            </li>
            <li>
              <a 
                className={currentPage === 'text-annotations' ? 'active' : ''}
                onClick={() => navigateTo('text-annotations', ['Home', 'Library', 'Text Annotations'])}
              >
                Text Annotations
              </a>
            </li>
            <li>
              <a 
                className={currentPage === 'myth-of-sisyphus' ? 'active' : ''}
                onClick={() => navigateTo('myth-of-sisyphus', ['Home', 'Library', 'Text Annotations', 'The Myth of Sisyphus'])}
              >
                The Myth of Sisyphus
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="search-container">
          <input type="text" placeholder="Cari yang kamu butuhkan..." />
          <button className="search-button">
            <img src="src/assets/Header/Search.svg" alt="Search" />
          </button>
        </div>
        
        <div className="auth-buttons">
          <button className="btn login-btn">Masuk</button>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="./assets/Header/Close.svg" alt="Close Menu" />
          ) : (
            <img src="./assets/Header/Menu.svg" alt="Open Menu" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;