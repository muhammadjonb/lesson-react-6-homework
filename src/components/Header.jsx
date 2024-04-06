import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Header = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {user ? (
                <NavLink to="/profile">
                  <Nav.Link as="span">{user.username}</Nav.Link>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <Nav.Link as="span">Login</Nav.Link>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default Header;
