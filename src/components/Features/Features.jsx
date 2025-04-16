import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section" id="personality-test">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">IQ</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10">TEST</text>
              </svg>
            </div>
            <h3 className="feature-title">IQ Test</h3>
            <p className="feature-desc">Tes kecerdasan IQ</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Temperament</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Visual-Visual</text>
              </svg>
            </div>
            <h3 className="feature-title">Temperament</h3>
            <p className="feature-desc">Visual-Visual</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Trtype</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10">9 types</text>
              </svg>
            </div>
            <h3 className="feature-title">Trtype</h3>
            <p className="feature-desc">9 types</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">DISC</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10">Based on real world</text>
              </svg>
            </div>
            <h3 className="feature-title">DISC</h3>
            <p className="feature-desc">Decided on the job's mood</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Archetype</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">12 types based on four factors</text>
              </svg>
            </div>
            <h3 className="feature-title">Archetype</h3>
            <p className="feature-desc">12 types based on four factors</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Mental Alignment</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Character's moral compass</text>
              </svg>
            </div>
            <h3 className="feature-title">Mental Alignment</h3>
            <p className="feature-desc">Character's moral compass</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Big Five</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Scientifically well-established</text>
              </svg>
            </div>
            <h3 className="feature-title">Big Five</h3>
            <p className="feature-desc">Scientifically well-established</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" stroke="white" strokeWidth="2"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="12">Attitudinal Psyche</text>
                <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="8">Drive three disposition</text>
              </svg>
            </div>
            <h3 className="feature-title">Attitudinal Psyche</h3>
            <p className="feature-desc">Drive three disposition</p>
          </div>
        </div>
      </div>
      
      <div className="newsletter-banner">
        <div className="container">
          <div className="newsletter-content">
            <h3>STAY INFORMED</h3>
            <p>Receive a weekly email on ArtDianzy with latest insight</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button className="btn">SIGN UP</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;