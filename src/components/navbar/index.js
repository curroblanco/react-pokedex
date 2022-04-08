import React from "react";
import { Nav } from "./navbarElements";
import { ReactComponent as Logo } from "./logo.svg";
import "./logo.css";

const Navbar = () => {
  return (
    <Nav class="Navbar">
      <Logo class="dark-shadow" />
    </Nav>
  );
};

export default Navbar;
