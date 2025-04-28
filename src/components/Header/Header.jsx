import React, { useState } from 'react';
import './Header.css';

const Header = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigateTo = (page, breadcrumb) => {
    navigate(page, breadcrumb);
    setIsMenuOpen(false);
  };

  // Simplified English nav items
  const navItems = [
    { key: 'timeline', label: 'Timeline', path: 'timeline', crumbs: ['Home', 'Timeline'] },
    { key: 'new-learner', label: 'Belajar', path: 'new-learner', crumbs: ['Home', 'Beginner'] },
    { key: 'reading-guide', label: 'Panduan', path: 'reading-guide', crumbs: ['Home', 'Reading'] },
    { key: 'research', label: 'Research', path: 'research', crumbs: ['Home', 'Research'] },
    { key: 'explore-ideas', label: 'Explore', path: 'explore-ideas', crumbs: ['Home', 'Explore'] },
    { key: 'systematic-learning', label: 'Structured', path: 'systematic-learning', crumbs: ['Home', 'Structured'] }
  ];

  const showLibrarySubmenu = ['library', 'text-annotations', 'myth-of-sisyphus'].includes(currentPage);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a onClick={() => navigateTo('home', ['Home'])}>
            <img src="src/assets/Header/Logo.svg" alt="Logo" />
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

            <li className="library-menu">
              <a
                className={currentPage === 'library' ? 'active' : ''}
                onClick={() => navigateTo('library', ['Home', 'Library'])}
              >
                Library
              </a>
              {showLibrarySubmenu && (
                <ul className="sub-nav">
                  <li>
                    <a
                      className={currentPage === 'text-annotations' ? 'active' : ''}
                      onClick={() =>
                        navigateTo('text-annotations', ['Home', 'Library', 'Text Annotations'])
                      }
                    >
                      Text Annotations
                    </a>
                  </li>
                  <li>
                    <a
                      className={currentPage === 'myth-of-sisyphus' ? 'active' : ''}
                      onClick={() =>
                        navigateTo('myth-of-sisyphus', ['Home', 'Library', 'Text Annotations', 'Myth of Sisyphus'])
                      }
                    >
                      Myth of Sisyphus
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {navItems.map(item => (
              <li key={item.key}>
                <a
                  className={currentPage === item.key ? 'active' : ''}
                  onClick={() => navigateTo(item.path, item.crumbs)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <img src="src/assets/Header/Search.svg" alt="Search" />
          </button>
        </div>

        <div className="auth-buttons">
          <button className="btn login-btn">Sign In</button>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src="./assets/Header/Close.svg" alt="Close" />
          ) : (
            <img src="./assets/Header/Menu.svg" alt="Menu" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
