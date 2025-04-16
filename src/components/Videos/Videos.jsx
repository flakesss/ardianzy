import React, { useState } from 'react';
import './Videos.css';

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: 'PERILAKU SALAH',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: '/video-thumbnail-1.jpg'
    },
    {
      id: 2,
      title: 'SEMBUHKAN DUKA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: '/video-thumbnail-2.jpg'
    },
    {
      id: 3,
      title: 'ANIME REVIEW 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: '/video-thumbnail-3.jpg'
    },
    {
      id: 4,
      title: 'TEMAN ITU MATI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: '/video-thumbnail-4.jpg'
    },
    {
      id: 5,
      title: 'TEMAN ITU HIDUP',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      thumbnail: '/video-thumbnail-5.jpg'
    }
  ];
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? videos.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === videos.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="videos-section" id="my-work">
      <div className="container">
        <h2 className="section-title">Tonton video terbaru dari Ardhianzy</h2>
        
        <div className="videos-carousel">
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {videos.map((video, index) => (
                <div className="carousel-item" key={video.id}>
                  <div className="video-thumbnail">
                    <div className="video-overlay">
                      <div className="play-button">
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="rgba(255, 255, 255, 0.2)" />
                          <path d="M15 12L10 15V9L15 12Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                    <div className="thumbnail-placeholder" style={{ backgroundImage: `url(${video.thumbnail})` }}></div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-navigation">
            <button className="carousel-nav prev" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="carousel-nav next" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;