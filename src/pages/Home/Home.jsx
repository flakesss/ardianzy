import React from 'react';
import './Home.css';

const Home = ({ navigate }) => {
  // Mapping untuk breadcrumb labels
  const labelMap = {
    timeline: 'Timeline',
    'new-learner': 'Beginner',
    'reading-guide': 'Reading Guide',
    research: 'Research',
    'explore-ideas': 'Explore',
    'systematic-learning': 'Structured'
  };

  const navigateToCategory = (path) =>
    navigate(path, ['Home', labelMap[path]]);

  const goToLibrary = () =>
    navigate('library', ['Home', 'Library']);

  // Data sections
  const sections = [
    {
      id: 'timeline',
      badge: 'Kronologi Pemikiran',
      title: 'Timeline of Thoughts',
      description: 'Jelajahi perjalanan ide-ide filosofis sepanjang sejarah dari kuno hingga kontemporer.',
      buttonText: 'Lihat Timeline',
      path: 'timeline',
      backgroundAsset: 'src/assets/Background/Group 4990.svg',
      features: ['Filsafat Kuno','Era Pencerahan','Masa Modern','Pasca-Modern','Kontemporer']
    },
    {
      id: 'baru-belajar',
      badge: 'Panduan untuk Pemula',
      title: 'Baru Belajar?',
      description: 'Mulai perjalanan filosofis dengan panduan komprehensif kami.',
      buttonText: 'Mulai Belajar',
      path: 'new-learner',
      features: ['Tidak tahu jurusan','Tidak tahu pekerjaan','Tidak tahu passion','Tidak tahu tujuan hidup','Tidak tahu jati diri']
    },
    {
      id: 'reading-guide',
      badge: 'Rekomendasi Bacaan',
      title: 'Reading Guide',
      description: 'Panduan baca terstruktur untuk karya-karya filosofis penting.',
      buttonText: 'Akses Panduan',
      path: 'reading-guide',
      backgroundAsset: 'src/assets/Background/Group 4993.svg',
      features: ['Pemula','Menengah','Lanjut','Tema Populer','Diskusi Terkini']
    },
    {
      id: 'research',
      badge: 'Kajian Mendalam',
      title: 'Check Our Research',
      description: 'Penelitian dan analisis mendalam pada berbagai topik filosofis.',
      buttonText: 'Lihat Penelitian',
      path: 'research'
    },
    {
      id: 'explore-ideas',
      badge: 'Eksplorasi Bebas',
      title: 'Ingin Mengeksplor Ide-Ide?',
      description: 'Eksplor ide tanpa urutan tertentu sesuai minat Anda.',
      buttonText: 'Mulai Eksplorasi',
      path: 'explore-ideas',
      buttonClass: 'blue-btn',
      features: ['Bebas Pilih','Tanpa Urutan','Sesuai Minat','Konten Beragam','Eksplorasi Mandiri']
    },
    {
      id: 'systematic',
      badge: 'Pembelajaran Terstruktur',
      title: 'Belajar Sistematis',
      description: 'Jalur pembelajaran terstruktur dengan langkah demi langkah.',
      buttonText: 'Mulai Sistematis',
      path: 'systematic-learning',
      backgroundAsset: 'src/assets/Background/Group 4991.svg',
      features: ['Bertahap','Terencana','Evaluasi','Progres','Fondasi'],
      buttonClass: 'orange-btn'
    }
  ];

  // Data untuk grid Research
  const researchItems = [
    { id: 1, image: 'src/assets/Background/Vector.svg', title: 'Lorem Ipsum Dolor Sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.', link: '/research/1', spansTwo: false },
    { id: 2, image: 'src/assets/Background/Vector.svg', title: 'Lorem Ipsum Dolor Sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.', link: '/research/2', spansTwo: false },
    { id: 3, image: 'src/assets/Background/Vector.svg', title: 'Lorem Ipsum Dolor Sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.', link: '/research/3', spansTwo: true },
    { id: 4, image: 'src/assets/Background/Vector.svg', title: 'Lorem Ipsum Dolor Sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.', link: '/research/4', spansTwo: false },
    { id: 5, image: 'src/assets/Background/Vector.svg', title: 'Lorem Ipsum Dolor Sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.', link: '/research/5', spansTwo: false }
  ];

  return (
    <div className="home-page">
      {sections.map((section) => {
        // Render Research section
        if (section.id === 'research') {
          return (
            <section key="research" className="research-section container">
              <div className="research-header">
                <h2 className="research-title">{section.title}</h2>
                {/* Outline button untuk Explore */}
                <button
                  className="btn outline-btn research-badge"
                  onClick={() => navigateToCategory('research')}
                >
                  Explore
                </button>
              </div>
              <div className="research-grid">
                {researchItems.map((item) => (
                  <div key={item.id} className={`research-card ${item.spansTwo ? 'span-two' : ''}`}>
                    <img src={item.image} alt={item.title} />
                    <div className="card-overlay">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a href={item.link} className="card-link">View →</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        // Render Hero sections
        return (
          <section key={section.id} className="hero-section" id={section.id}>
            {section.backgroundAsset && (
              <div className="section-background">
                <img src={section.backgroundAsset} alt="Background Asset" />
              </div>
            )}
            <div className="container">
              <div className="hero-content">
                <div className="hero-badge">{section.badge}</div>
                <h1 className="hero-title">{section.title}</h1>
                <p className="hero-subtitle">{section.description}</p>
                <div className="hero-actions">
                  {section.id === 'reading-guide' ? (
                    <button
                      className="btn outline-btn"
                      onClick={() => navigateToCategory(section.path)}
                    >
                      {section.buttonText} →
                    </button>
                  ) : (
                    <button
                      className={`btn primary-btn ${section.buttonClass || ''}`}
                      onClick={() => navigateToCategory(section.path)}
                    >
                      {section.buttonText} <span>→</span>
                    </button>
                  )}
                </div>
                {section.features && (
                  <div className="hero-feature">
                    {section.features.map((feat, i) => (
                      <div key={i} className="hero-feature-item">
                        <span className="feature-label">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Siap untuk Mendalami Lebih Jauh?</h2>
          <p className="cta-text">Akses koleksi lengkap anotasi, analisis, dan panduan membaca kami.</p>
          <button className="btn cta-btn" onClick={goToLibrary}>Jelajahi Library</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
