import  { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { scrollToElement } from "./scrollFunction";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar expansion

  const handleScroll = (elementId) => {
    scrollToElement(elementId, 1000); // Scroll to the section over 1 second
    setExpanded(false); // Collapse navbar after link is clicked
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="custom-navbar"
      fixed="top"
      expanded={expanded} // Controlled by state
    >
      <Container className="nav-container">
        <Navbar.Brand onClick={() => handleScroll("home")}>
          <img src={logo} alt="1OR8" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} // Toggle state
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handleScroll("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll("about")}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleScroll("services")}>
              Service
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("portfolio")}>
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("team")}>Our Team</Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
