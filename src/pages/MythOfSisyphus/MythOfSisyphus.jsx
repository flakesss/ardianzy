import React, { useState } from 'react';
import './MythOfSisyphus.css';

const MythOfSisyphus = () => {
  // State untuk tab yang aktif
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mengubah tab yang aktif
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  
  // Data anotasi
  const annotations = [
    {
      id: 1,
      page: 23,
      quote: "Tidak ada hari esok. Inilah alasan, selama ini, mengapa aku sepenuhnya memeluk kepuasan.",
      annotation: "Camus mengingatkan tentang urgensi hidup di masa kini, tanpa mengandalkan janji masa depan yang mungkin tidak pernah tiba. Cara pandang ini adalah inti dari filosofi absurdisme - menerima ketidakpastian dan menghargai momen saat ini."
    },
    {
      id: 2,
      page: 45,
      quote: "Hidup akan lebih baik jika tidak bermakna.",
      annotation: "Pernyataan paradoks ini mewakili inti dari filsafat Camus. Ia menyarankan bahwa tanpa makna bawaan dari alam semesta, kita bebas menciptakan nilai hidup kita sendiri. Ini adalah kesempatan untuk kebebasan sejati, tidak terikat pada makna yang sudah ada sebelumnya."
    },
    {
      id: 3,
      page: 119,
      quote: "Perjuangan itu sendiri menuju puncak sudah cukup untuk mengisi hati manusia.",
      annotation: "Ini adalah kesimpulan terkenal Camus tentang mitos Sisifus. Meskipun tugas Sisifus sia-sia (mendorong batu ke atas bukit hanya untuk melihatnya jatuh lagi), Camus berpendapat bahwa proses perjuangan itu sendiri dapat memberikan makna dan tujuan. Ini adalah respons eksistensial terhadap absurditas kehidupan."
    },
    {
      id: 4,
      page: 78,
      quote: "Kita harus membayangkan Sisifus bahagia.",
      annotation: "Frasa ikonik yang mengakhiri esai. Camus berpendapat bahwa dengan menerima ketidakberartian dari kondisinya, Sisifus melampaui takdirnya. Kesadaran akan absurditas kehidupannya adalah kekuatan yang membuatnya triumfal, bukan dikalahkan. Ini adalah inti dari cara Camus memandang absurdisme sebagai filosofi pembebasan."
    },
    {
      id: 5,
      page: 55,
      quote: "Dunia yang bisa dijelaskan meski dengan alasan yang buruk adalah dunia yang akrab. Tetapi sebaliknya, di alam semesta yang tiba-tiba terampas dari ilusi dan cahaya, manusia merasa asing.",
      annotation: "Camus menggambarkan momen ketika seseorang menyadari absurditas kehidupan - ketika penjelasan yang biasa dan nyaman tentang dunia runtuh. Ini adalah momen penting dalam perjalanan eksistensial, saat seseorang menghadapi kenyataan bahwa alam semesta tidak memiliki makna inheren."
    }
  ];
  
  // Data untuk bagian Konteks
  const contextData = {
    historical: "Ditulis selama Perang Dunia II, ketika Camus aktif dalam gerakan Resistensi Prancis melawan pendudukan Nazi. Diterbitkan pada tahun 1942, konteks ini sangat relevan karena banyak yang menghadapi absurditas teror, kematian, dan penderitaan yang tampaknya tidak bermakna.",
    philosophical: "Esai ini berdiri di persimpangan tradisi filosofis eksistensialisme dan absurdisme. Meskipun Camus menolak label 'eksistensialis', karya ini mengeksplorasi tema-tema seperti kebebasan, pilihan, dan makna hidup yang merupakan inti dari eksistensialisme.",
    literary: "Bagian dari 'Siklus Absurd' Camus, yang juga termasuk novel 'The Stranger' dan drama 'Caligula'. Bersama-sama, mereka mengeksplorasi gagasan absurditas dari perspektif berbeda - filosofis, naratif, dan dramatis."
  };
  
  // Data untuk bagian Tema Utama
  const themes = [
    {
      id: 1,
      title: "Absurditas",
      description: "Tema sentral adalah ketidakcocokan antara keinginan manusia untuk makna dan rasionalitas versus ketidakpedulian alam semesta. Camus menyebut benturan ini sebagai 'absurd'."
    },
    {
      id: 2,
      title: "Bunuh Diri Filosofis",
      description: "Camus menolak bunuh diri sebagai tanggapan logis terhadap absurditas. Ia juga menolak apa yang ia sebut 'bunuh diri filosofis' - mencari pelarian melalui harapan, agama, atau sistem filosofis lainnya."
    },
    {
      id: 3,
      title: "Pemberontakan",
      description: "Solusi Camus adalah pemberontakan - menghadapi absurditas secara langsung dan hidup dengan penuh semangat meskipun tahu bahwa hidup tidak memiliki makna bawaan."
    },
    {
      id: 4,
      title: "Kebebasan dan Nilai",
      description: "Tanpa makna yang ditentukan sebelumnya, manusia bebas untuk menciptakan nilai mereka sendiri dan hidup otentik sesuai dengan pilihan mereka sendiri."
    }
  ];
  
  // Data untuk bagian konsep penting
  const concepts = [
    {
      id: 1,
      title: "Kesadaran Absurd",
      description: "Menurut Camus, momen ketika seseorang mengenali ketidakcocokan antara keinginan akan kejelasan dan ketidakrasionalan dunia adalah titik awal untuk hidup otentik."
    },
    {
      id: 2,
      title: "Manusia Absurd",
      description: "Orang yang hidup dengan kesadaran penuh akan absurditas kehidupan tanpa menyerah pada keputusasaan atau pelarian ke dalam ilusi penghiburan."
    },
    {
      id: 3,
      title: "Pemberontakan Metafisik",
      description: "Menolak untuk menerima kondisi manusia seperti yang diberikan, sambil tetap hidup di dalamnya - menantang alam semesta dengan kesadaran."
    },
    {
      id: 4,
      title: "Sisifus sebagai Metafora",
      description: "Sisifus mewakili kondisi manusia - terlibat dalam perjuangan yang tampaknya sia-sia tetapi menemukan makna dalam perjuangan itu sendiri."
    }
  ];

  return (
    <div className="myth-of-sisyphus-page">
      {/* Book Header */}
      <section className="book-header">
        <div className="container">
          <div className="book-header-content">
            <div className="book-cover">
              <img src="./assets/MythOfSisyphus/Cover.jpg" alt="The Myth of Sisyphus Book Cover" />
            </div>
            
            <div className="book-info">
              <h1 className="book-title">The Myth of Sisyphus</h1>
              <p className="book-author">Albert Camus (1942)</p>
              
              <div className="book-meta">
                <span className="meta-item">
                  <img src="./assets/MythOfSisyphus/CategoryIcon.svg" alt="Category" />
                  Eksistensialisme
                </span>
                <span className="meta-item">
                  <img src="./assets/MythOfSisyphus/PagesIcon.svg" alt="Pages" />
                  123 Halaman
                </span>
                <span className="meta-item">
                  <img src="./assets/MythOfSisyphus/RatingIcon.svg" alt="Rating" />
                  4.8/5.0
                </span>
              </div>
              
              <p className="book-summary">
                "The Myth of Sisyphus" adalah esai filosofis Albert Camus yang menggali pertanyaan tentang bunuh diri dan makna hidup di dunia yang absurd. Camus menggunakan mitos Yunani tentang Sisifus, yang dihukum mendorong batu ke atas bukit selamanya, sebagai metafora untuk kondisi manusia. Melalui esai ini, ia mengembangkan filosofi absurdismenya dan berpendapat bahwa meskipun hidup mungkin tidak memiliki makna bawaan, kita dapat menemukan nilai dalam pemberontakan dan penerimaan.
              </p>
              
              <div className="book-actions">
                <button className="btn primary-btn">Baca Buku</button>
                <button className="btn secondary-btn">Tandai untuk Dibaca Nanti</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="book-navigation">
        <div className="container">
          <div className="tabs-container">
            <button 
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => changeTab('overview')}
            >
              Ikhtisar
            </button>
            <button 
              className={`tab ${activeTab === 'annotations' ? 'active' : ''}`}
              onClick={() => changeTab('annotations')}
            >
              Anotasi
            </button>
            <button 
              className={`tab ${activeTab === 'context' ? 'active' : ''}`}
              onClick={() => changeTab('context')}
            >
              Konteks
            </button>
            <button 
              className={`tab ${activeTab === 'themes' ? 'active' : ''}`}
              onClick={() => changeTab('themes')}
            >
              Tema Utama
            </button>
            <button 
              className={`tab ${activeTab === 'concepts' ? 'active' : ''}`}
              onClick={() => changeTab('concepts')}
            >
              Konsep Penting
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="tab-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-content">
              <h2 className="content-title">Tentang "The Myth of Sisyphus"</h2>
              <p>
                "The Myth of Sisyphus" adalah karya filosofis penting Albert Camus yang membahas apa yang ia sebut sebagai "pertanyaan filosofis paling penting" - apakah hidup layak dijalani. Ditulis selama Perang Dunia II dan diterbitkan pertama kali pada tahun 1942, esai ini mengeksplorasi gagasan tentang absurditas kehidupan dan bagaimana manusia dapat menemukan cara untuk hidup secara bermakna dalam alam semesta yang tidak memiliki tujuan atau makna bawaan.
              </p>
              
              <p>
                Dalam esai ini, Camus menjelajahi berbagai respon terhadap absurditas, seperti bunuh diri, harapan religius, dan pemberontakan. Ia menggunakan mitos Yunani tentang Sisifus, yang dihukum oleh para dewa untuk selamanya mendorong batu besar ke atas bukit hanya untuk melihatnya jatuh kembali, sebagai metafora untuk kondisi manusia.
              </p>
              
              <blockquote>
                "Kita harus membayangkan Sisifus bahagia."
                <cite>— Albert Camus</cite>
              </blockquote>
              
              <p>
                Kesimpulan Camus yang terkenal - "Kita harus membayangkan Sisifus bahagia" - menyiratkan bahwa meskipun kehidupan mungkin tampak absurd, kesadaran dan penerimaan akan kondisi ini bisa menjadi sumber kekuatan dan bahkan kebahagiaan. Ketika Sisifus turun kembali untuk mengambil batunya, ia sadar akan nasibnya, dan dalam kesadaran inilah ia melampaui takdirnya.
              </p>
              
              <div className="content-section">
                <h3 className="section-title">Signifikansi Karya</h3>
                <p>
                  "The Myth of Sisyphus" adalah bagian dari "Siklus Absurd" Camus, bersama dengan novel "The Stranger" dan drama "Caligula". Karya ini telah memberikan pengaruh besar terhadap filosofi eksistensial dan terus menjadi bacaan penting bagi siapa saja yang mengeksplorasi pertanyaan tentang makna hidup, kebebasan, dan tanggung jawab manusia dalam dunia yang tampaknya acuh tak acuh.
                </p>
                <p>
                  Esai ini juga mencerminkan posisi politik dan moral Camus selama periode pergolakan sejarah, menawarkan respon terhadap kekerasan dan penderitaan masa perang yang menekankan martabat manusia dan penolakan terhadap keputusasaan.
                </p>
              </div>
              
              <div className="overview-image">
                <img src="./assets/MythOfSisyphus/Sisyphus.jpg" alt="Sisyphus Illustration" />
                <p className="image-caption">Ilustrasi Sisifus mendorong batu ke atas bukit, metafora sentral dalam esai Camus.</p>
              </div>
            </div>
          )}

          {/* Annotations Tab */}
          {activeTab === 'annotations' && (
            <div className="annotations-content">
              <h2 className="content-title">Anotasi Utama</h2>
              
              <div className="annotations-container">
                {annotations.map(item => (
                  <div className="annotation-card" key={item.id}>
                    <div className="annotation-header">
                      <div className="page-number">Halaman {item.page}</div>
                    </div>
                    <div className="annotation-quote">
                      "{item.quote}"
                    </div>
                    <div className="annotation-text">
                      {item.annotation}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="annotations-cta">
                <p>Lihat lebih dari 50 anotasi mendalam untuk seluruh buku</p>
                <button className="btn full-annotations-btn">Akses Anotasi Penuh</button>
              </div>
            </div>
          )}

          {/* Context Tab */}
          {activeTab === 'context' && (
            <div className="context-content">
              <h2 className="content-title">Konteks Historis dan Filosofis</h2>
              
              <div className="context-section">
                <h3 className="section-title">Konteks Historis</h3>
                <p>{contextData.historical}</p>
                
                <div className="context-image">
                  <img src="./assets/MythOfSisyphus/HistoricalContext.jpg" alt="World War II Context" />
                  <p className="image-caption">Prancis di bawah pendudukan Nazi, konteks penulisan "The Myth of Sisyphus".</p>
                </div>
              </div>
              
              <div className="context-section">
                <h3 className="section-title">Konteks Filosofis</h3>
                <p>{contextData.philosophical}</p>
              </div>
              
              <div className="context-section">
                <h3 className="section-title">Konteks Sastra</h3>
                <p>{contextData.literary}</p>
                
                <div className="related-works">
                  <h4>Karya-Karya Terkait dari Camus</h4>
                  <div className="related-grid">
                    <div className="related-item">
                      <img src="./assets/MythOfSisyphus/TheStranger.jpg" alt="The Stranger" />
                      <h5>The Stranger</h5>
                      <p>Novel (1942)</p>
                    </div>
                    <div className="related-item">
                      <img src="./assets/MythOfSisyphus/Caligula.jpg" alt="Caligula" />
                      <h5>Caligula</h5>
                      <p>Drama (1944)</p>
                    </div>
                    <div className="related-item">
                      <img src="./assets/MythOfSisyphus/TheRebel.jpg" alt="The Rebel" />
                      <h5>The Rebel</h5>
                      <p>Esai (1951)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Themes Tab */}
          {activeTab === 'themes' && (
            <div className="themes-content">
              <h2 className="content-title">Tema-Tema Utama</h2>
              
              <div className="themes-grid">
                {themes.map(theme => (
                  <div className="theme-card" key={theme.id}>
                    <h3 className="theme-title">{theme.title}</h3>
                    <p className="theme-description">{theme.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="themes-analysis">
                <h3 className="section-title">Analisis Tematik</h3>
                <p>
                  Tema-tema dalam "The Myth of Sisyphus" saling terkait dalam kerangka filosofis Camus tentang absurdisme. Absurditas menjadi titik awal - kesadaran akan ketidakcocokan antara keinginan manusia untuk makna dan ketidakmampuan dunia untuk memberikannya. Dari sini, Camus mengeksplorasi potensi respon: bunuh diri (yang ia tolak), "bunuh diri filosofis" seperti harapan religius (yang ia kritik), dan pemberontakan yang ia dukung.
                </p>
                <p>
                  Keterkaitan tema-tema ini menunjukkan bahwa Camus tidak hanya menawarkan kritik nihilistik, tetapi filosofi afirmatif. Meskipun mengakui ketiadaan makna bawaan, ia berpendapat untuk kebebasan, tindakan, dan nilai yang diciptakan manusia. Pemberontakan menjadi sumber martabat manusia dan bahkan kebahagiaan yang mungkin dalam menghadapi absurditas.
                </p>
              </div>
            </div>
          )}

          {/* Concepts Tab */}
          {activeTab === 'concepts' && (
            <div className="concepts-content">
              <h2 className="content-title">Konsep-Konsep Filosofis Penting</h2>
              
              <div className="concepts-grid">
                {concepts.map(concept => (
                  <div className="concept-card" key={concept.id}>
                    <h3 className="concept-title">{concept.title}</h3>
                    <p className="concept-description">{concept.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="concepts-illustration">
                <img src="./assets/MythOfSisyphus/ConceptMap.jpg" alt="Concept Map" />
                <p className="image-caption">Peta konseptual yang menunjukkan hubungan antara ide-ide kunci dalam "The Myth of Sisyphus".</p>
              </div>
              
              <div className="concepts-influence">
                <h3 className="section-title">Pengaruh dan Relevansi</h3>
                <p>
                  Konsep-konsep yang dikembangkan Camus dalam "The Myth of Sisyphus" telah mempengaruhi berbagai bidang di luar filosofi, termasuk psikologi, sastra, dan seni. Gagasan tentang kesadaran absurd dan respons pemberontakan telah menjadi cara penting untuk memahami kondisi manusia dalam dunia modern.
                </p>
                <p>
                  Relevansi karya ini bertahan hingga hari ini, karena manusia terus mencari makna dalam dunia yang semakin kompleks dan sering terasa acuh tak acuh. Pendekatan Camus menawarkan cara untuk menghadapi tantangan eksistensial ini dengan kejujuran dan integritas, tanpa menyerah pada keputusasaan atau pelarian ke dalam ilusi penghiburan.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Discussion Section */}
      <section className="discussion-section">
        <div className="container">
          <div className="discussion-header">
            <h2 className="discussion-title">Diskusi dan Refleksi</h2>
            <p className="discussion-subtitle">
              Bergabunglah dengan percakapan tentang "The Myth of Sisyphus" dan bagikan pemikiran Anda
            </p>
          </div>
          
          <div className="discussion-prompt">
            <h3 className="prompt-title">Pertanyaan Reflektif</h3>
            <ul className="prompt-list">
              <li>Bagaimana Anda memahami kesimpulan Camus bahwa "kita harus membayangkan Sisifus bahagia"?</li>
              <li>Apakah menyadari absurditas kehidupan adalah beban atau pembebasan? Mengapa?</li>
              <li>Bagaimana konsep "pemberontakan" Camus berbeda dari pesimisme atau nihilisme?</li>
              <li>Apa relevansi pemikiran Camus dalam menghadapi tantangan personal atau sosial saat ini?</li>
            </ul>
          </div>
          
          <div className="join-discussion">
            <button className="btn discussion-btn">Bergabung dengan Forum Diskusi</button>
            <button className="btn share-btn">Bagikan Refleksi Pribadi</button>
          </div>
        </div>
      </section>

      {/* Reading Recommendations */}
      <section className="recommendations-section">
        <div className="container">
          <h2 className="recommendations-title">Bacaan Terkait</h2>
          
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <div className="recommendation-image">
                <img src="./assets/MythOfSisyphus/BeingAndNothingness.jpg" alt="Being and Nothingness" />
              </div>
              <div className="recommendation-content">
                <h3 className="recommendation-title">Being and Nothingness</h3>
                <p className="recommendation-author">Jean-Paul Sartre</p>
                <p className="recommendation-description">
                  Eksplorasi komprehensif tentang kebebasan eksistensial dan tanggung jawab dari perspektif yang berbeda namun terkait dengan Camus.
                </p>
              </div>
            </div>
            
            <div className="recommendation-card">
              <div className="recommendation-image">
                <img src="./assets/MythOfSisyphus/FearAndTrembling.jpg" alt="Fear and Trembling" />
              </div>
              <div className="recommendation-content">
                <h3 className="recommendation-title">Fear and Trembling</h3>
                <p className="recommendation-author">Søren Kierkegaard</p>
                <p className="recommendation-description">
                  Pendekatan eksistensial Kierkegaard tentang iman dan absurditas menawarkan kontras menarik dengan posisi Camus.
                </p>
              </div>
            </div>
            
            <div className="recommendation-card">
              <div className="recommendation-image">
                <img src="./assets/MythOfSisyphus/TheRebel.jpg" alt="The Rebel" />
              </div>
              <div className="recommendation-content">
                <h3 className="recommendation-title">The Rebel</h3>
                <p className="recommendation-author">Albert Camus</p>
                <p className="recommendation-description">
                  Eksplorasi lanjutan Camus tentang konsep pemberontakan, memperluas ide-ide yang dimulai dalam "The Myth of Sisyphus".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MythOfSisyphus;