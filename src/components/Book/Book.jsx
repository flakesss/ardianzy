import React from 'react';
import './Book.css';

const Book = () => {
  return (
    <section className="book-section" id="books">
      <div className="container">
        <div className="book-content">
          <div className="book-info">
            <h2 className="book-title">
              Ardhianzy nulis novel! <span className="highlight">Udah baca belum?</span>
            </h2>
            <a href="#" className="btn">BELI</a>
          </div>
          <div className="book-image">
            <div className="book-cover">
              <div className="sample-book">
                <div className="sample-text">SAMPLE BOOK PHOTO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;