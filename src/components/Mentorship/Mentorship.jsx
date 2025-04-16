import React from 'react';
import './Mentorship.css';

const Mentorship = () => {
  return (
    <section className="mentorship-section" id="mentorship">
      <div className="container">
        <div className="mentorship-content">
          <div className="mentorship-info">
            <h2 className="mentorship-title">
              Mentorship langsung<br />
              bersama Ardhianzy
            </h2>
            <a href="#" className="btn">IKUT MENTORSHIP <span>&rarr;</span></a>
          </div>
          <div className="mentorship-image">
            {/* Replace with actual mentorship image */}
            <img src="/mentorship-image.jpg" alt="Mentorship with Ardhianzy" className="mentorship-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;