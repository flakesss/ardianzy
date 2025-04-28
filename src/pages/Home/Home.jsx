import React from 'react';
import TiltedCard from '../../components/TiltedCard';
import ScrollReveal from '../../components/ScrollReveal';
import './Home.css';

export default function Home({ navigate }) {
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

  // SECTION HERO
  const heroSections = [
    {
      id: 'timeline',
      badge: 'Kronologi Pemikiran',
      title: 'Timeline of Thoughts',
      description:
        'Jelajahi perjalanan ide-ide filosofis sepanjang sejarah dari kuno hingga kontemporer.',
      buttonText: 'Lihat Timeline',
      path: 'timeline',
      backgroundAsset: 'src/assets/Background/Group 4990.svg',
      features: [
        'Filsafat Kuno',
        'Era Pencerahan',
        'Masa Modern',
        'Pasca-Modern',
        'Kontemporer'
      ]
    },
    {
      id: 'baru-belajar',
      badge: 'Panduan untuk Pemula',
      title: 'Baru Belajar?',
      description: 'Mulai perjalanan filosofis dengan panduan komprehensif kami.',
      buttonText: 'Mulai Belajar',
      path: 'new-learner',
      features: [
        'Tidak tahu jurusan',
        'Tidak tahu pekerjaan',
        'Tidak tahu passion',
        'Tidak tahu tujuan hidup',
        'Tidak tahu jati diri'
      ]
    },
    {
      id: 'reading-guide',
      badge: 'Rekomendasi Bacaan',
      title: 'Reading Guide',
      description: 'Panduan baca terstruktur untuk karya-karya filosofis penting.',
      buttonText: 'Akses Panduan',
      path: 'reading-guide',
      backgroundAsset: 'src/assets/Background/Group 4993.svg',
      features: ['Pemula', 'Menengah', 'Lanjut', 'Tema Populer', 'Diskusi Terkini']
    }
  ];

  // DATA GRID RESEARCH
  const researchItems = [
    {
      id: 1,
      image:
        'src/assets/Background/Vector.svg',
      title: 'Lorem Ipsum Dolor Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      link: '/research/1',
      spansTwo: false
    },
    {
      id: 2,
      image:
        'src/assets/Background/Vector.svg',
      title: 'Lorem Ipsum Dolor Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      link: '/research/2',
      spansTwo: false
    },
    {
      id: 3,
      image:
        'src/assets/Background/Vector.svg',
      title: 'Lorem Ipsum Dolor Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      link: '/research/3',
      spansTwo: true
    },
    {
      id: 4,
      image:
        'src/assets/Background/Vector.svg',
      title: 'Lorem Ipsum Dolor Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      link: '/research/4',
      spansTwo: false
    },
    {
      id: 5,
      image:
        'src/assets/Background/Vector.svg',
      title: 'Lorem Ipsum Dolor Sit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
      link: '/research/5',
      spansTwo: false
    }
  ];

  // SECTION SETELAH RESEARCH
  const postResearchSections = [
    {
      id: 'explore-ideas',
      badge: 'Eksplorasi Bebas',
      title: 'Ingin Mengeksplor Ide-Ide?',
      description: 'Eksplor ide tanpa urutan tertentu sesuai minat Anda.',
      buttonText: 'Mulai Eksplorasi',
      path: 'explore-ideas',
      buttonClass: 'blue-btn',
      features: [
        'Bebas Pilih',
        'Tanpa Urutan',
        'Sesuai Minat',
        'Konten Beragam',
        'Eksplorasi Mandiri'
      ]
    },
    {
      id: 'systematic-learning',
      badge: 'Pembelajaran Terstruktur',
      title: 'Belajar Sistematis',
      description: 'Jalur pembelajaran terstruktur dengan langkah demi langkah.',
      buttonText: 'Mulai Sistematis',
      path: 'systematic-learning',
      backgroundAsset: 'src/assets/Background/Group 4991.svg',
      features: ['Bertahap', 'Terencana', 'Evaluasi', 'Progres', 'Fondasi'],
      buttonClass: 'orange-btn'
    }
  ];

  return (
    <div className="home-page">
      {/* HERO SECTIONS */}
      {heroSections.map((sec) => (
        <section key={sec.id} className="hero-section" id={sec.id}>
          {sec.backgroundAsset && (
            <div className="section-background">
              <img src={sec.backgroundAsset} alt="" />
            </div>
          )}
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">{sec.badge}</div>

              <h1 className="hero-title">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={8}
                  rotationEnd="bottom center"
                  wordAnimationEnd="center center"
                  className="hero-title"
                >
                  {sec.title}
                </ScrollReveal>
              </h1>

              <p className="hero-subtitle">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={2}
                  blurStrength={0}
                  rotationEnd="bottom center"
                  wordAnimationEnd="center center"
                  className="hero-subtitle"
                >
                  {sec.description}
                </ScrollReveal>
              </p>

              <div className="hero-actions">
                {sec.id === 'reading-guide' ? (
                  <button
                    className="btn outline-btn"
                    onClick={() => navigateToCategory(sec.path)}
                  >
                    {sec.buttonText} →
                  </button>
                ) : (
                  <button
                    className={`btn primary-btn ${sec.buttonClass || ''}`}
                    onClick={() => navigateToCategory(sec.path)}
                  >
                    {sec.buttonText} <span>→</span>
                  </button>
                )}
              </div>

              {sec.features && (
                <div className="hero-feature">
                  {sec.features.map((f, i) => (
                    <div key={i} className="hero-feature-item">
                      <span className="feature-label">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* RESEARCH SECTION */}
      <section className="research-section container">
        <div className="research-header">
          <h2 className="research-title">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={6}
              rotationEnd="bottom center"
              wordAnimationEnd="center center"
              className="research-title"
            >
              Check Our Research
            </ScrollReveal>
          </h2>
          <button
            className="btn outline-btn research-badge"
            onClick={() => navigateToCategory('research')}
          >
            Explore
          </button>
        </div>

        <p className="research-description">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={false}
            baseRotation={2}
            blurStrength={0}
            rotationEnd="bottom center"
            wordAnimationEnd="center center"
            className="research-description"
          >
            Penelitian dan analisis mendalam pada berbagai topik filosofis.
          </ScrollReveal>
        </p>

        <div className="research-grid">
          {researchItems.map((item) => (
            <div
              key={item.id}
              className={`research-card ${item.spansTwo ? 'span-two' : ''}`}
            >
              <TiltedCard
                imageSrc={item.image}
                altText={item.title}
                showTooltip={false}
                displayOverlayContent={true}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                overlayContent={
                  <div className="card-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={item.link} className="card-link">
                      View →
                    </a>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* POST-RESEARCH SECTIONS */}
      {postResearchSections.map((sec) => (
        <section key={sec.id} className="hero-section" id={sec.id}>
          {sec.backgroundAsset && (
            <div className="section-background">
              <img src={sec.backgroundAsset} alt="" />
            </div>
          )}
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">{sec.badge}</div>

              <h1 className="hero-title">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={8}
                  rotationEnd="bottom center"
                  wordAnimationEnd="center center"
                  className="hero-title"
                >
                  {sec.title}
                </ScrollReveal>
              </h1>

              <p className="hero-subtitle">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={2}
                  blurStrength={0}
                  rotationEnd="bottom center"
                  wordAnimationEnd="center center"
                  className="hero-subtitle"
                >
                  {sec.description}
                </ScrollReveal>
              </p>

              <div className="hero-actions">
                <button
                  className={`btn primary-btn ${sec.buttonClass || ''}`}
                  onClick={() => navigateToCategory(sec.path)}
                >
                  {sec.buttonText} <span>→</span>
                </button>
              </div>

              <div className="hero-feature">
                {sec.features.map((f, i) => (
                  <div key={i} className="hero-feature-item">
                    <span className="feature-label">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={3}
              blurStrength={4}
              rotationEnd="bottom center"
              wordAnimationEnd="center center"
              className="cta-title"
            >
              Siap untuk Mendalami Lebih Jauh?
            </ScrollReveal>
          </h2>
          <p className="cta-text">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={false}
              baseRotation={1}
              blurStrength={0}
              rotationEnd="bottom center"
              wordAnimationEnd="center center"
              className="cta-text"
            >
              Akses koleksi lengkap anotasi, analisis, dan panduan membaca kami.
            </ScrollReveal>
          </p>
          <button className="btn cta-btn" onClick={goToLibrary}>
            Jelajahi Library
          </button>
        </div>
      </section>
    </div>
  );
}
