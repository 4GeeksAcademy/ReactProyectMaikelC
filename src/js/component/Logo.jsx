import React from 'react';
import brunchLogo from '../../img/brunchLogo.jpg'

const Logo = () => {
  return (
    <img
      src={brunchLogo} // Cambia esto por la ruta de tu imagen
      alt="Logo"
      className="logo"
    />
  );
};

export default Logo;
