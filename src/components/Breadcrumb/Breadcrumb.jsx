import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ paths, onNavigate }) => {
  return (
    <div className="breadcrumb-container">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          <span 
            className={`breadcrumb-item ${index === paths.length - 1 ? 'active' : ''}`}
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