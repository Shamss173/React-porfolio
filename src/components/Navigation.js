import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <>

<Navbar bg="dark" data-bs-theme="dark">
<Container>
<Navbar.Brand as={Link} to="/" ></Navbar.Brand>
        <Nav className="me-auto mx-auto">
          <Nav.Link as={Link} to="/" className="nav-item-hover">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-item-hover">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-item-hover">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/skills" className="nav-item-hover">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-item-hover">
            Contact
          </Nav.Link>
        </Nav>
        <Button variant="btn btn-success">
        <a target='blank' href='https://drive.google.com/file/d/1zekZiMNJhJLG6VO3Kgxe6GQw54FU5XXS/view?usp=drive_link' style={{ textDecoration: 'none', outline: 'none' }}>
  Download cv
</a>
        </Button>
      </Container>
    </Navbar>
     
    </>
  );
}

export default Navigation;
