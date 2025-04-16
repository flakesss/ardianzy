import React, { useState } from 'react';
import './Merchandise.css';

const Merchandise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Sample Book",
      image: "/merchandise-1.jpg"
    },
    {
      id: 2,
      name: "Sample Book",
      image: "/merchandise-2.jpg"
    },
    {
      id: 3,
      name: "Sample Book",
      image: "/merchandise-3.jpg"
    },
    {
      id: 4,
      name: "Sample Book",
      image: "/merchandise-4.jpg"
    },
    {
      id: 5,
      name: "Sample Book",
      image: "/merchandise-5.jpg"
    }
  ];
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? Math.ceil(products.length / 4) - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === Math.ceil(products.length / 4) - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="merchandise-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Support us dengan beli merchandise :)</h2>
          <a href="#" className="btn shop-btn">SHOP ALL <span>&rarr;</span></a>
        </div>
        
        <div className="merchandise-carousel">
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="product-grid">
                {products.map(product => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image">
                      <div className="sample-product">
                        <div className="sample-text">SAMPLE BOOK PHOTO</div>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
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

export default Merchandise;