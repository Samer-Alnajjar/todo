import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">
      Home
    </Navbar.Brand>
  </Navbar>
  );
};

export default NavBar;
