// src/components/Breadcrumb.jsx
import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ paths, onNavigate }) => {
  // Jika bukan array, atau kurang dari 3 level, atau level ke-2 bukan 'Library', maka sembunyikan
  if (
    !Array.isArray(paths) ||
    paths.length < 3 ||
    paths[1] !== 'Library'
  ) {
    return null;
  }

  return (
    <div className="breadcrumb-container">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="breadcrumb-separator">/</span>
          )}
          <span
            className={`breadcrumb-item ${
              index === paths.length - 1 ? 'active' : ''
            }`}
            onClick={() => onNavigate(index)}
          >
            {path}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
