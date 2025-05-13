import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router';



function NavBar() {
  return (
    <Navbar expand="md" className="navbar-custom" fixed="top">
      <Container>
      <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
        Runa
      </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/projects">Project</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
