import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import TextAnnotations from './pages/TextAnnotations/TextAnnotations';
import MythOfSisyphus from './pages/MythOfSisyphus/MythOfSisyphus';

// Import CSS
import './index.css';

// Simple router implementation for multiple pages
function App() {
  // Current page state (default: home)
  const [currentPage, setCurrentPage] = useState('home');
  // Current breadcrumb path
  const [breadcrumbPath, setBreadcrumbPath] = useState(['Home']);

  // Navigate to a specific page
  const navigate = (page, path) => {
    setCurrentPage(page);
    if (path) {
      setBreadcrumbPath(path);
    }
  };

  // Render current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'library':
        return <Library navigate={navigate} />;
      case 'text-annotations':
        return <TextAnnotations navigate={navigate} />;
      case 'myth-of-sisyphus':
        return <MythOfSisyphus navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <MainLayout 
      currentPage={currentPage} 
      navigate={navigate} 
      breadcrumbPath={breadcrumbPath}
    >
      {renderPage()}
    </MainLayout>
  );
}

export default App;