import React from 'react';
import { useBreadcrumb } from '../../layouts/MainLayout';
import './TextAnnotations.css';

const TextAnnotations = () => {
  const { setPaths } = useBreadcrumb();
  
  const books = [
    {
      id: 1,
      title: 'The Myth of Sisyphus',
      author: 'Albert Camus',
      description: 'Pandangan eksistensial tentang hidup dan kebermaknaan dalam kesia-siaan.',
      image: './assets/TextAnnotations/MythOfSisyphus.jpg',
      published: '1942'
    },
    {
      id: 2,
      title: 'Meditations',
      author: 'Marcus Aurelius',
      description: 'Pemikiran dan refleksi personal tentang prinsip hidup Stoik.',
      image: './assets/TextAnnotations/Meditations.jpg',
      published: '180 AD'
    },
    {
      id: 3,
      title: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      description: 'Pendalaman tentang konsep manusia super dan kematian Tuhan.',
      image: './assets/TextAnnotations/Zarathustra.jpg',
      published: '1883'
    },
    {
      id: 4,
      title: 'Being and Nothingness',
      author: 'Jean-Paul Sartre',
      description: 'Eksplorasi kebebasan manusia dan tanggung jawab dalam eksistensialisme.',
      image: './assets/TextAnnotations/BeingAndNothingness.jpg',
      published: '1943'
    },
    {
      id: 5,
      title: 'Man\'s Search for Meaning',
      author: 'Viktor Frankl',
      description: 'Pencarian makna hidup melalui pengalaman di kamp konsentrasi Nazi.',
      image: './assets/TextAnnotations/SearchForMeaning.jpg',
      published: '1946'
    },
    {
      id: 6,
      title: 'Letters from a Stoic',
      author: 'Seneca',
      description: 'Nasihat dan pandangan hidup dari filosof Stoik terkemuka.',
      image: './assets/TextAnnotations/LettersFromAStoic.jpg',
      published: '65 AD'
    }
  ];
  
  const handleBookClick = (book) => {
    setPaths(['Home', 'Library', 'Text Annotations', book.title]);
  };
  
  return (
    <section className="text-annotations-section" id="text-annotations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Text Annotations</h2>
          <p className="section-subtitle">Analisis dan interpretasi karya-karya literatur filosofis klasik dan modern</p>
        </div>
        
        <div className="books-grid">
          {books.map(book => (
            <div 
              className="book-card" 
              key={book.id}
              onClick={() => handleBookClick(book)}
            >
              <div className="book-image">
                <img src={book.image} alt={book.title} className="book-img" />
              </div>
              <div className="book-content">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author} ({book.published})</p>
                <p className="book-description">{book.description}</p>
                <span className="book-link">BACA ANOTASI <span>&rarr;</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextAnnotations;