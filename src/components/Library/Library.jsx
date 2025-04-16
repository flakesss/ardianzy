import React from 'react';
import { useBreadcrumb } from '../../layouts/MainLayout';
import './Library.css';

const Library = () => {
  const { setPaths } = useBreadcrumb();
  
  const categories = [
    {
      id: 1,
      title: 'Text Annotations',
      description: 'Pendekatan mengenai beragam literatur klasik dan modern.',
      image: './assets/Library/TextAnnotations.jpg'
    },
    {
      id: 2,
      title: 'Video Essays',
      description: 'Diskusi filosofis dan eksistensial dalam format video.',
      image: './assets/Library/VideoEssays.jpg'
    },
    {
      id: 3,
      title: 'Audio Books',
      description: 'Koleksi audio buku dengan narasi mendalam.',
      image: './assets/Library/AudioBooks.jpg'
    },
    {
      id: 4,
      title: 'Original Works',
      description: 'Tulisan dan karya asli Ardhianzy.',
      image: './assets/Library/OriginalWorks.jpg'
    }
  ];
  
  const handleCategoryClick = (category) => {
    setPaths(['Home', 'Library', category.title]);
  };
  
  return (
    <section className="library-section" id="library">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Library</h2>
          <p className="section-subtitle">Kumpulan sumber pengetahuan dan berbagai perspektif kehidupan</p>
        </div>
        
        <div className="library-grid">
          {categories.map(category => (
            <div 
              className="library-card" 
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="library-image">
                <img src={category.image} alt={category.title} className="library-img" />
              </div>
              <div className="library-content">
                <h3 className="library-title">{category.title}</h3>
                <p className="library-description">{category.description}</p>
                <span className="library-link">EKSPLOR <span>&rarr;</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;