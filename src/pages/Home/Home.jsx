import React from 'react';
import './Home.css';

const Home = ({ navigate }) => {
  // Menu kategori navigasi
  const menuItems = [
    {
      id: 1,
      title: 'Baru Belajar?',
      path: 'new-learner'
    },
    {
      id: 2,
      title: 'Timeline of Thoughts',
      path: 'timeline'
    },
    {
      id: 3,
      title: 'Reading Guide',
      path: 'reading-guide'
    },
    {
      id: 4,
      title: 'Check Our Research',
      path: 'research'
    }
  ];

  // Learning Path options
  const learningPaths = [
    {
      id: 1,
      title: 'Ingin Mengeksplor Ide-Ide?',
      description: 'Jelajahi beragam konsep dan pemikiran tanpa urutan tertentu.',
      icon: './assets/Home/Explore.svg',
      color: '#3a86c8',
      buttonText: 'Mulai Eksplorasi',
      path: 'explore-ideas'
    },
    {
      id: 2,
      title: 'Belajar Sistematis?',
      description: 'Ikuti jalur pembelajaran terstruktur sesuai tingkat pemahaman Anda.',
      icon: './assets/Home/Systematic.svg',
      color: '#e16745',
      buttonText: 'Mulai Pembelajaran',
      path: 'systematic-learning'
    }
  ];

  // Navigasi ke halaman detail dari kategori
  const navigateToCategory = (item) => {
    console.log(`Navigating to ${item.path}`);
    // Contoh implementasi navigasi sebenarnya jika diperlukan
  };

  // Navigasi ke Library
  const goToLibrary = () => {
    navigate('library', ['Home', 'Library']);
  };

  return (
    <div className="home-page">
      {/* Hero Section - Baru Belajar */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Panduan untuk Pemula</div>
            <h1 className="hero-title">Baru Belajar?</h1>
            <p className="hero-subtitle">
              Memulai perjalanan filosofis dan intelektual bisa jadi menantang. Kami telah menyiapkan 
              panduan komprehensif untuk membantu Anda memahami konsep-konsep dasar dan memulai 
              perjalanan eksplorasi pemikiran dengan langkah yang tepat.
            </p>
            <div className="hero-actions">
              <button className="btn primary-btn">
                Mulai Perjalanan Belajar <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-background">
          <img src="./assets/Home/NewLearner.jpg" alt="Baru Belajar Background" />
        </div>
      </section>

      {/* Main Navigation Menu */}
      <section className="main-menu-section">
        <div className="container">
          <nav className="main-navigation">
            <ul className="menu-list">
              {menuItems.map(item => (
                <li 
                  key={item.id} 
                  className="menu-item"
                  onClick={() => navigateToCategory(item)}
                >
                  <a className="menu-link">
                    {item.title}
                    <span className="menu-arrow">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="learning-paths-section">
        <div className="container">
          <div className="learning-paths-container">
            {learningPaths.map(path => (
              <div 
                className="learning-path-card" 
                key={path.id}
                style={{ '--path-color': path.color }}
              >
                <div className="path-icon">
                  <img src={path.icon} alt={path.title} />
                </div>
                <div className="path-content">
                  <h3 className="path-title">{path.title}</h3>
                  <p className="path-description">{path.description}</p>
                  <button 
                    className="btn path-btn"
                    onClick={() => navigateToCategory(path)}
                  >
                    {path.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Konten Unggulan</h2>
            <p className="section-subtitle">Jelajahi beberapa analisis dan anotasi terbaik kami</p>
          </div>
          
          <div className="featured-content">
            <div className="featured-main" onClick={() => navigate('myth-of-sisyphus', ['Home', 'Library', 'Text Annotations', 'The Myth of Sisyphus'])}>
              <div className="featured-image">
                <img src="./assets/Home/MythOfSisyphus.jpg" alt="The Myth of Sisyphus" />
              </div>
              <div className="featured-info">
                <span className="featured-tag">Featured Analysis</span>
                <h3 className="featured-title">The Myth of Sisyphus</h3>
                <p className="featured-author">Albert Camus</p>
                <p className="featured-excerpt">
                  Eksplorasi mendalam mengenai makna hidup di tengah absurditas eksistensi manusia.
                </p>
                <span className="featured-link">Baca Anotasi <span>&rarr;</span></span>
              </div>
            </div>
            
            <div className="featured-secondary">
              <div className="featured-card" onClick={() => navigateToCategory({path: 'timeline'})}>
                <div className="card-image">
                  <img src="./assets/Home/FeaturedTimeline.jpg" alt="Timeline Philosophy" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Timeline of Western Philosophy</h4>
                  <span className="card-link">Lihat Timeline <span>&rarr;</span></span>
                </div>
              </div>
              
              <div className="featured-card" onClick={() => navigateToCategory({path: 'new-learner'})}>
                <div className="card-image">
                  <img src="./assets/Home/FeaturedBeginners.jpg" alt="Philosophy for Beginners" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">Filosofi untuk Pemula: Panduan Langkah Awal</h4>
                  <span className="card-link">Mulai Belajar <span>&rarr;</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Siap untuk Mendalami Lebih Jauh?</h2>
            <p className="cta-text">
              Akses koleksi lengkap anotasi, analisis, dan panduan membaca kami.
            </p>
            <button className="btn cta-btn" onClick={goToLibrary}>
              Jelajahi Library
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;