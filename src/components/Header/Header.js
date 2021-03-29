import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            EDI Solutions
          </Navbar.Brand>
          <Navbar.Toggle
            className="menu-icon"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={1} as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/clients">
                Clients
              </Nav.Link>
              <Nav.Link eventKey={3} as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link eventKey={4} as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link
                eventKey={5}
                as={Link}
                to="/contact"
                className="phone-number"
              >
                +1 (909) 861-1188
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
