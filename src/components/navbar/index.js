import React from "react";
import { Nav, NavLink } from "./navbarElements";
import { ReactComponent as Logo } from './logo.svg';
import './logo.css';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
        <Logo class="dark-shadow"/>
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
