import React from 'react';
import './Library.css';

const Library = ({ navigate }) => {
  // Kategori Library
  const categories = [
    {
      id: 1,
      title: 'Text Annotations',
      description: 'Pendekatan mendalam tentang karya-karya filosofis klasik dan modern.',
      image: './assets/Library/TextAnnotations.jpg',
      count: '24 Buku',
      page: 'text-annotations'
    },
    {
      id: 2,
      title: 'Video Essays',
      description: 'Analisis visual mendalam tentang konsep-konsep filosofis penting.',
      image: './assets/Library/VideoEssays.jpg',
      count: '16 Video',
      page: 'video-essays'
    },
    {
      id: 3,
      title: 'Audio Books',
      description: 'Narasi dan pembahasan filosofis dalam format audio.',
      image: './assets/Library/AudioBooks.jpg',
      count: '12 Audio',
      page: 'audio-books'
    },
    {
      id: 4,
      title: 'Research Papers',
      description: 'Eksplorasi akademis mengenai berbagai topik filosofis kontemporer.',
      image: './assets/Library/ResearchPapers.jpg',
      count: '18 Paper',
      page: 'research-papers'
    },
    {
      id: 5,
      title: 'Original Works',
      description: 'Karya-karya orisinil kami terkait pemikiran filosofis dan eksistensial.',
      image: './assets/Library/OriginalWorks.jpg',
      count: '9 Karya',
      page: 'original-works'
    },
    {
      id: 6,
      title: 'Study Groups',
      description: 'Forum dan kelompok diskusi untuk topik-topik filosofis spesifik.',
      image: './assets/Library/StudyGroups.jpg',
      count: '7 Grup',
      page: 'study-groups'
    }
  ];

  // Koleksi Terbaru
  const newAdditions = [
    {
      id: 1,
      title: 'The Myth of Sisyphus',
      author: 'Albert Camus',
      category: 'Text Annotations',
      image: './assets/Library/MythOfSisyphus.jpg',
      page: 'myth-of-sisyphus'
    },
    {
      id: 2,
      title: 'Meditations on First Philosophy',
      author: 'René Descartes',
      category: 'Text Annotations',
      image: './assets/Library/Meditations.jpg',
      page: 'meditations'
    },
    {
      id: 3,
      title: 'Existentialism is a Humanism',
      author: 'Jean-Paul Sartre',
      category: 'Video Essays',
      image: './assets/Library/Existentialism.jpg',
      page: 'existentialism'
    }
  ];

  // Navigasi ke Text Annotations
  const goToTextAnnotations = () => {
    navigate('text-annotations', ['Home', 'Library', 'Text Annotations']);
  };

  // Navigasi ke Myth of Sisyphus
  const goToMythOfSisyphus = () => {
    navigate('myth-of-sisyphus', ['Home', 'Library', 'Text Annotations', 'The Myth of Sisyphus']);
  };

  // Navigasi ke kategori lain
  const navigateToCategory = (category) => {
    if (category.page === 'text-annotations') {
      goToTextAnnotations();
    } else {
      // Untuk contoh ini, semua kategori lain belum diimplementasikan
      console.log(`Navigating to ${category.page}`);
    }
  };

  // Navigasi ke item koleksi
  const navigateToItem = (item) => {
    if (item.page === 'myth-of-sisyphus') {
      goToMythOfSisyphus();
    } else {
      // Untuk contoh ini, item lain belum diimplementasikan
      console.log(`Navigating to ${item.page}`);
    }
  };

  return (
    <div className="library-page">
      {/* Library Header */}
      <section className="library-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Library</h1>
            <p className="page-description">
              Jelajahi koleksi lengkap anotasi, analisis, dan konten mendalam kami tentang filosofi dan pemikiran.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kategori</h2>
            <p className="section-subtitle">Telusuri berbagai jenis konten yang kami tawarkan</p>
          </div>
          
          <div className="categories-grid">
            {categories.map(category => (
              <div 
                className="category-card" 
                key={category.id}
                onClick={() => navigateToCategory(category)}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.title} className="category-img" />
                  <div className="category-count">{category.count}</div>
                </div>
                <div className="category-content">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <span className="category-link">Jelajahi <span>&rarr;</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Additions Section */}
      <section className="new-additions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Koleksi Terbaru</h2>
            <p className="section-subtitle">Konten terbaru yang ditambahkan ke library kami</p>
          </div>
          
          <div className="additions-grid">
            {newAdditions.map(item => (
              <div 
                className="addition-card" 
                key={item.id}
                onClick={() => navigateToItem(item)}
              >
                <div className="addition-image">
                  <img src={item.image} alt={item.title} className="addition-img" />
                  <div className="addition-category">{item.category}</div>
                </div>
                <div className="addition-content">
                  <h3 className="addition-title">{item.title}</h3>
                  <p className="addition-author">{item.author}</p>
                  <span className="addition-link">Baca Sekarang <span>&rarr;</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-collection">
        <div className="container">
          <div className="collection-content">
            <div className="collection-info">
              <h2 className="collection-title">Filosofi Eksistensial</h2>
              <p className="collection-description">
                Koleksi komprehensif tentang karya-karya dan pemikiran eksistensialis utama, termasuk Camus, Sartre, Kierkegaard, dan lainnya.
              </p>
              <button className="btn collection-btn" onClick={goToTextAnnotations}>
                Jelajahi Koleksi
              </button>
            </div>
            <div className="collection-image">
              <img src="./assets/Library/ExistentialCollection.jpg" alt="Existential Philosophy Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-content">
            <h2 className="search-title">Cari di Library</h2>
            <p className="search-description">
              Temukan konten spesifik dari koleksi lengkap kami
            </p>
            <div className="search-form">
              <input type="text" placeholder="Cari berdasarkan judul, penulis, atau topik..." className="search-input" />
              <button className="btn search-btn">Cari</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;