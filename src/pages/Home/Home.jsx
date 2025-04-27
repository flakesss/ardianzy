// Home.jsx
import React from 'react';
import './Home.css';

const Home = ({ navigate }) => {

  const navigateToCategory = (path) => {
    console.log(`Navigating to ${path}`);
  };

  // Navigasi ke Library
  const goToLibrary = () => {
    navigate('library', ['Home', 'Library']);
  };

  // Menu kategori navigasi
  const sections = [
    {
      id: 'timeline',
      badge: 'Kronologi Pemikiran',
      title: 'Timeline of Thoughts',
      description: 'Jelajahi perjalanan ide-ide filosofis sepanjang sejarah. Lihat bagaimana pemikiran berkembang dan saling mempengaruhi dari zaman kuno hingga kontemporer.',
      buttonText: 'Lihat Timeline',
      path: 'timeline',
      backgroundImage: 'src/assets/Background/crown-image.svg',
      features: ['Filsafat Kuno','Era Pencerahan','Masa Modern','Pasca-Modern','Kontemporer']
    },
    {
      id: 'baru-belajar',
      badge: 'Panduan untuk Pemula',
      title: 'Baru Belajar?',
      description: 'Memulai perjalanan filosofis dan intelektual bisa jadi menantang. Kami telah menyiapkan panduan komprehensif untuk membantu Anda memahami konsep-konsep dasar dan memulai perjalanan eksplorasi pemikiran dengan langkah yang tepat.',
      buttonText: 'Mulai Perjalanan Belajar',
      path: 'new-learner',
      backgroundImage: "src/assets/Background/Group 344.svg",
      features: ['Tidak tahu jurusan','Tidak tahu pekerjaan','Tidak tahu passion','Tidak tahu tujuan hidup','Tidak tahu jati diri']
    },
    {
      id: 'reading-guide',
      badge: 'Rekomendasi Bacaan',
      title: 'Reading Guide',
      description: 'Temukan panduan membaca terstruktur untuk karya-karya filosofis penting. Dari bacaan dasar hingga teks yang lebih kompleks, kami membantu Anda memahami konsep-konsep utama dengan lebih baik.',
      buttonText: 'Akses Panduan',
      path: 'reading-guide',
      backgroundImage: 'src/assets/Background/Group 4696.svg',
      features: ['Untuk Pemula','Tingkat Menengah','Tingkat Lanjut','Tema Populer','Diskusi Terkini']
    },
    {
      id: 'research',
      badge: 'Kajian Mendalam',
      title: 'Check Our Research',
      description: 'Pelajari penelitian dan analisis mendalam yang kami lakukan tentang berbagai topik filosofis. Temukan perspektif baru dan pemahaman yang lebih kaya.',
      buttonText: 'Lihat Penelitian',
      path: 'research',
      backgroundImage: './assets/Background/research-background.jpg',
      features: ['Karya Original','Analisis Mendalam','Interpretasi Teks','Studi Komparatif','Implikasi Praktis']
    },
    {
      id: 'explore-ideas',
      badge: 'Eksplorasi Bebas',
      title: 'Ingin Mengeksplor Ide-Ide?',
      description: 'Jelajahi beragam konsep dan pemikiran tanpa urutan tertentu. Cocok bagi Anda yang ingin mengeksplorasi topik sesuai dengan minat.',
      buttonText: 'Mulai Eksplorasi',
      path: 'explore-ideas',
      backgroundImage: '/src/assets/Background/explore-background.jpg',
      features: ['Bebas Memilih Topik','Tanpa Urutan Tertentu','Sesuai Minat','Konten Beragam','Eksplorasi Mandiri'],
      buttonClass: 'blue-btn'
    },
    {
      id: 'systematic',
      badge: 'Pembelajaran Terstruktur',
      title: 'Belajar Sistematis',
      description: 'Ikuti jalur pembelajaran terstruktur sesuai tingkat pemahaman Anda. Panduan langkah demi langkah untuk memahami konsep filosofis secara mendalam.',
      buttonText: 'Mulai Pembelajaran',
      path: 'systematic-learning',
      backgroundImage: '/src/assets/Background/systematic-background.jpg',
      features: ['Struktur Bertahap','Kurikulum Terencana','Evaluasi Pemahaman','Progres Terukur','Fondasi Kuat'],
      buttonClass: 'orange-btn'
    }
  ];

  return (
    <div className="home-page">
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`hero-section ${index === 0 ? 'main-hero' : 'sub-hero'}`}
          id={section.id}
        >
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">{section.badge}</div>
              <h1 className="hero-title">{section.title}</h1>
              <p className="hero-subtitle">{section.description}</p>
              <div className="hero-actions">
                <button
                  className={`btn primary-btn ${section.buttonClass || ''}`}
                  onClick={() => navigateToCategory(section.path)}
                >
                  {section.buttonText} <span>&rarr;</span>
                </button>
              </div>
            </div>
            <div className="hero-feature">
              {section.features.map((feature, i) => (
                <div key={i} className="hero-feature-item">
                  <span className="feature-label">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-background">
            <img
              src={section.backgroundImage}
              alt={`${section.title} Background`}
            />
          </div>
        </section>
      ))}

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
