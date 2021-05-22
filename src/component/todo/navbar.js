import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import Login from './../auth/login';
import SignUp from './../auth/signUp';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">
      Home
    </Navbar.Brand>
    <Login />
    <SignUp />
  </Navbar>
  );
};

export default NavBar;
