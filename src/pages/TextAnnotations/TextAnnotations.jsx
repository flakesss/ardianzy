import React, { useState } from 'react';
import './TextAnnotations.css';

const TextAnnotations = ({ navigate }) => {
  // State untuk filter dan pencarian
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Daftar filter
  const filters = [
    { id: 'all', name: 'Semua' },
    { id: 'existentialism', name: 'Eksistensialisme' },
    { id: 'stoicism', name: 'Stoikisme' },
    { id: 'metaphysics', name: 'Metafisika' },
    { id: 'ethics', name: 'Etika' },
    { id: 'epistemology', name: 'Epistemologi' }
  ];
  
  // Daftar buku dan anotasi
  const books = [
    {
      id: 1,
      title: 'The Myth of Sisyphus',
      author: 'Albert Camus',
      year: '1942',
      category: 'existentialism',
      description: 'Pandangan eksistensial tentang hidup dan kebermaknaan dalam kesia-siaan.',
      image: './assets/TextAnnotations/MythOfSisyphus.jpg',
      rating: 4.8,
      page: 'myth-of-sisyphus'
    },
    {
      id: 2,
      title: 'Meditations',
      author: 'Marcus Aurelius',
      year: '180 AD',
      category: 'stoicism',
      description: 'Pemikiran dan refleksi personal tentang prinsip hidup Stoik.',
      image: './assets/TextAnnotations/Meditations.jpg',
      rating: 4.7,
      page: 'meditations'
    },
    {
      id: 3,
      title: 'Being and Nothingness',
      author: 'Jean-Paul Sartre',
      year: '1943',
      category: 'existentialism',
      description: 'Eksplorasi kebebasan manusia dan tanggung jawab dalam eksistensialisme.',
      image: './assets/TextAnnotations/BeingAndNothingness.jpg',
      rating: 4.6,
      page: 'being-and-nothingness'
    },
    {
      id: 4,
      title: 'Beyond Good and Evil',
      author: 'Friedrich Nietzsche',
      year: '1886',
      category: 'ethics',
      description: 'Kritik terhadap moralitas tradisional dan filosofis sebelumnya.',
      image: './assets/TextAnnotations/BeyondGoodAndEvil.jpg',
      rating: 4.7,
      page: 'beyond-good-and-evil'
    },
    {
      id: 5,
      title: 'Man\'s Search for Meaning',
      author: 'Viktor Frankl',
      year: '1946',
      category: 'existentialism',
      description: 'Pencarian makna hidup melalui pengalaman di kamp konsentrasi Nazi.',
      image: './assets/TextAnnotations/SearchForMeaning.jpg',
      rating: 4.9,
      page: 'search-for-meaning'
    },
    {
      id: 6,
      title: 'Republic',
      author: 'Plato',
      year: '380 BC',
      category: 'ethics',
      description: 'Dialog tentang keadilan, struktur masyarakat ideal, dan jiwa manusia.',
      image: './assets/TextAnnotations/Republic.jpg',
      rating: 4.5,
      page: 'republic'
    },
    {
      id: 7,
      title: 'Critique of Pure Reason',
      author: 'Immanuel Kant',
      year: '1781',
      category: 'epistemology',
      description: 'Investigasi terhadap batas-batas dan struktur pengetahuan.',
      image: './assets/TextAnnotations/CritiqueOfPureReason.jpg',
      rating: 4.6,
      page: 'critique-of-pure-reason'
    },
    {
      id: 8,
      title: 'Metaphysics',
      author: 'Aristotle',
      year: '350 BC',
      category: 'metaphysics',
      description: 'Pemeriksaan terhadap hal-hal yang berada di luar alam fisik.',
      image: './assets/TextAnnotations/Metaphysics.jpg',
      rating: 4.4,
      page: 'metaphysics'
    }
  ];
  
  // Filter buku berdasarkan kategori dan pencarian
  const filteredBooks = books.filter(book => {
    const matchesFilter = activeFilter === 'all' || book.category === activeFilter;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Navigasi ke halaman anotasi buku
  const navigateToBook = (book) => {
    if (book.page === 'myth-of-sisyphus') {
      navigate('myth-of-sisyphus', ['Home', 'Library', 'Text Annotations', 'The Myth of Sisyphus']);
    } else {
      // Untuk contoh ini, buku lain belum diimplementasikan
      console.log(`Navigating to ${book.page}`);
    }
  };
  
  // Handle filter change
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };
  
  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="text-annotations-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">Text Annotations</h1>
            <p className="page-description">
              Analisis dan interpretasi mendalam tentang karya-karya filosofis yang telah mempengaruhi pemikiran manusia
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-tabs">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => handleFilterChange(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Cari judul atau penulis..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="search-icon">
                <img src="./assets/TextAnnotations/SearchIcon.svg" alt="Search" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid Section */}
      <section className="books-section">
        <div className="container">
          {filteredBooks.length > 0 ? (
            <div className="books-grid">
              {filteredBooks.map(book => (
                <div 
                  className="book-card" 
                  key={book.id}
                  onClick={() => navigateToBook(book)}
                >
                  <div className="book-image">
                    <img src={book.image} alt={book.title} className="book-img" />
                    <div className="book-rating">
                      <span className="rating-star">★</span> {book.rating}
                    </div>
                  </div>
                  <div className="book-content">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author} ({book.year})</p>
                    <p className="book-description">{book.description}</p>
                    <span className="book-link">Baca Anotasi <span>&rarr;</span></span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>Tidak ada hasil yang ditemukan</h3>
              <p>Coba gunakan kata kunci yang berbeda atau hapus filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Reading Guide Section */}
      <section className="reading-guide-section">
        <div className="container">
          <div className="guide-content">
            <div className="guide-info">
              <h2 className="guide-title">Panduan Membaca Filosofis</h2>
              <p className="guide-description">
                Pelajari cara memahami dan memperoleh nilai maksimal dari teks-teks filosofis klasik dan modern. Panduan kami akan membantu Anda untuk lebih memahami struktur argumen, konteks historis, dan ide-ide utama.
              </p>
              <button className="btn guide-btn">Akses Panduan</button>
            </div>
            <div className="guide-image">
              <img src="./assets/TextAnnotations/ReadingGuide.jpg" alt="Reading Guide" />
            </div>
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="request-section">
        <div className="container">
          <div className="request-content">
            <h2 className="request-title">Tidak menemukan buku yang Anda cari?</h2>
            <p className="request-description">
              Beritahu kami jika ada buku filosofis yang ingin Anda lihat analisnya
            </p>
            <button className="btn request-btn">Ajukan Permintaan</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextAnnotations;