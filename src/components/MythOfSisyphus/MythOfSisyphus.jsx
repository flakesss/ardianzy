import React from 'react';
import './MythOfSisyphus.css';

const MythOfSisyphus = () => {
  return (
    <section className="myth-of-sisyphus-section" id="myth-of-sisyphus">
      <div className="container">
        <div className="book-header">
          <div className="book-cover">
            <img src="./assets/MythOfSisyphus/Cover.jpg" alt="The Myth of Sisyphus Book Cover" className="book-cover-img" />
          </div>
          
          <div className="book-info">
            <h1 className="book-title">The Myth of Sisyphus</h1>
            <p className="book-author">Albert Camus (1942)</p>
            <div className="book-meta">
              <span className="book-meta-item">Eksistensialisme</span>
              <span className="book-meta-item">Absurdisme</span>
              <span className="book-meta-item">Filosofi</span>
            </div>
            <p className="book-summary">
              Esai filosofis yang membahas tentang absurditas kehidupan manusia, bunuh diri, dan pencarian makna dalam dunia yang tampaknya tidak beraturan. Karya ini adalah eksplorasi Camus tentang bagaimana kita harus menanggapi kenyataan bahwa kehidupan tidak memiliki makna bawaan.
            </p>
            <div className="book-actions">
              <button className="btn primary-btn">Baca Anotasi Lengkap</button>
              <button className="btn secondary-btn">Simpan ke Koleksi</button>
            </div>
          </div>
        </div>
        
        <div className="book-content">
          <h2 className="content-title">Tentang Buku Ini</h2>
          <p>
            "The Myth of Sisyphus" adalah karya filosofis penting Albert Camus yang diterbitkan pertama kali pada tahun 1942. Buku ini menggali "pertanyaan filosofis paling penting" menurut Camus: apakah hidup layak dijalani ketika kita menghadapi absurditas—ketidakcocokan antara kebutuhan manusia akan kejelasan dan dunia yang tidak masuk akal.
          </p>
          
          <p>
            Dalam mitologi Yunani, Sisifus dihukum oleh para dewa untuk selamanya mendorong batu besar ke atas bukit, hanya untuk melihatnya bergulir kembali ke bawah. Camus menggunakan mitos ini sebagai metafora kondisi manusia: kita semua terlibat dalam perjuangan tanpa akhir dan tanpa tujuan.
          </p>
          
          <blockquote>
            "Kita harus membayangkan Sisifus bahagia."
            <cite>— Albert Camus</cite>
          </blockquote>
          
          <p>
            Meskipun menghadapi situasi absurd, Camus menyimpulkan bahwa kita harus merangkul ketidakberartian ini. Ketika Sisifus mengakui ketidakbermaknaan tugasnya tetapi tetap mendorong batu itu, dia menjadi lebih kuat dari hukumannya. Kesadaran ini membuatnya bahagia, menegaskan pemberontakan melawan absurditas.
          </p>
          
          <h2 className="content-title">Tema Utama</h2>
          <div className="theme-list">
            <div className="theme-item">
              <h3>Absurditas</h3>
              <p>Penyelidikan tentang ketidakcocokan antara hasrat manusia akan makna dan dunia yang tampak acuh tak acuh.</p>
            </div>
            
            <div className="theme-item">
              <h3>Bunuh Diri Filosofis</h3>
              <p>Mengapa tidak mengakhiri hidup ketika menghadapi absurditas? Camus menentang penyelesaian ini.</p>
            </div>
            
            <div className="theme-item">
              <h3>Pemberontakan</h3>
              <p>Hidup penuh dengan pemberontakan, kebebasan, dan hasrat adalah cara untuk menghadapi ketidakbermaknaan hidup.</p>
            </div>
            
            <div className="theme-item">
              <h3>Kesadaran</h3>
              <p>Menyadari kondisi absurd kita adalah langkah pertama menuju kebahagiaan sejati.</p>
            </div>
          </div>
          
          <h2 className="content-title">Anotasi dan Kutipan Penting</h2>
          <div className="annotations">
            <div className="annotation">
              <div className="annotation-quote">"Tidak ada hari esok. Inilah alasan, selama ini, mengapa aku sepenuhnya memeluk kepuasan."</div>
              <div className="annotation-content">
                <p>Camus mengingatkan tentang urgensi hidup di masa kini, tanpa mengandalkan janji masa depan yang mungkin tidak pernah tiba.</p>
              </div>
            </div>
            
            <div className="annotation">
              <div className="annotation-quote">"Hidup akan lebih baik jika tidak bermakna."</div>
              <div className="annotation-content">
                <p>Tanpa makna bawaan, kita bebas menciptakan nilai hidup kita sendiri. Ini adalah kesempatan untuk kebebasan sejati.</p>
              </div>
            </div>
            
            <div className="annotation">
              <div className="annotation-quote">"Perjuangan itu sendiri menuju puncak sudah cukup untuk mengisi hati manusia."</div>
              <div className="annotation-content">
                <p>Proses perjuangan, bahkan dalam kesia-siaan, dapat memberikan makna dan tujuan.</p>
              </div>
            </div>
          </div>
          
          <div className="read-more">
            <button className="btn full-width-btn">Baca Anotasi Lengkap</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythOfSisyphus;