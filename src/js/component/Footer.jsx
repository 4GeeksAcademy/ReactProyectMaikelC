import React from 'react';

const Footer = () => {
  return (
    <footer className="footer container-fluid d-flex flex-column align-items-center py-3">
      <p>&copy; 2024 Landing Page</p>
      <a href="https://github.com/maikelcaardenas" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center">
        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" className="github-logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
        maikelcaardenas
      </a>
    </footer>
  );
};

export default Footer;
