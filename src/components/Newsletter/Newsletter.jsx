import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-container">
          <h2 className="newsletter-title">STAY INFORMED</h2>
          <p className="newsletter-desc">Receive a weekly email on ArtDianzy with latest insight</p>
          
          <form className="newsletter-form">
            <input type="email" placeholder="Email address" className="newsletter-input" />
            <button type="submit" className="btn newsletter-btn">SIGN UP</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;