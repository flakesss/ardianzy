import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import './MainLayout.css';

const MainLayout = ({ children, currentPage, navigate, breadcrumbPath }) => {
  // Handle breadcrumb navigation
  const handleBreadcrumbClick = (index) => {
    // Get the corresponding page from breadcrumb path
    const path = breadcrumbPath.slice(0, index + 1);
    
    // Map breadcrumb path item to page route
    let targetPage = 'home';
    if (path.includes('Library')) targetPage = 'library';
    if (path.includes('Text Annotations')) targetPage = 'text-annotations';
    if (path.includes('The Myth of Sisyphus')) targetPage = 'myth-of-sisyphus';
    
    // Navigate to the page
    navigate(targetPage, path);
    
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-layout">
      <Header 
        currentPage={currentPage} 
        navigate={navigate}
      />
      
      {/* Breadcrumb area */}
      <div className="page-breadcrumb">
        <div className="breadcrumb-wrapper">
          <Breadcrumb 
            paths={breadcrumbPath} 
            onNavigate={handleBreadcrumbClick} 
          />
        </div>
      </div>
      
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;