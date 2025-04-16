import React from 'react';
import { useBreadcrumb } from '../../layouts/MainLayout';
import './Hero.css';

const Hero = () => {
  const { setPaths } = useBreadcrumb();

  const handleTestClick = () => {
    setPaths(['Home', 'Personality Test']);
    
    // Scroll ke section personality test
    const section = document.getElementById('personality-test');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="dots-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            TEMUKAN JATI DIRI<br />
            DAN WUJUDKAN<br />
            POTENSI DIRI
          </h1>
          <ul className="hero-list">
            <li>Tidak tahu jurusan</li>
            <li>Tidak tahu pekerjaan</li>
            <li>Tidak tahu passion</li>
            <li>Tidak tahu syarat kerja</li>
            <li>Tidak tahu target belajar</li>
          </ul>
          <div className="hero-cta">
            <button className="btn hero-btn" onClick={handleTestClick}>
              TES INI SEKARANG! <span>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="hero-background">
          <div className="hero-img-container">
            <img src="./assets/Hero/Crown.jpg" alt="Crown" className="hero-img" />
          </div>
        </div>
      </div>
      <div className="sidebar-cta">
        <p>
          Dapatkan semua masalahmu<br />
          <strong>Ter-Kepribadian-mu Sekarang</strong>
        </p>
      </div>
      
      <div className="chat-bubble">
        <img src="./assets/Hero/ChatBubble.svg" alt="Chat" />
      </div>
    </section>
  );
};

export default Hero;