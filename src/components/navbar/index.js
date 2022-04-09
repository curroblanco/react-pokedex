import './logo.css';

import React from 'react';

import { ReactComponent as Logo } from './logo.svg';
import { Nav } from './navbarElements';

const Navbar = () => {
  return (
    <Nav className="navbar">
      <Logo className="dark-shadow" />
    </Nav>
  );
};

export default Navbar;
