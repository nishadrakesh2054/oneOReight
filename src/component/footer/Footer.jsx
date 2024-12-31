import React from "react";
import { Button, Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import location from "../../assets/Websitassets/location.png";
import mail from "../../assets/Websitassets/mail.png";
import call from "../../assets/footer/call.png";
import "./Footer.scss";

const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:+977 9801973976";
  };
  return (
    <div className="Footer">
      <Container>
        <div className="tex-footers">
          <div className="logo-footer">
            <img src={logo} alt="logo" />
            <div className="getin-mb">
              <p>GET IN TOUCH</p>
              <Button onClick={handleCall}>
                <img src={call} alt="call" />
              </Button>
            </div>
          </div>
          <div className="email-location">
          <p className="icon-text ">
              <span>
                <img src={call} alt="mail" />
              </span>
             +977 9801973976
            </p>
            <p className="icon-text ">
              <span>
                <img src={mail} alt="mail" />
              </span>
              contact@1or8.com.np
            </p>
            <p className="icon-text">
              <span>
                <img src={location} alt="location" />
              </span>
              Dhapakhel, Kathmandu, Nepal
            </p>
          </div>
          <div className="quick-links">
            <p className="quick-links-p">Quick Links</p>
            <div className="quick-link-list">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a> <a href="#team">Our team</a>{" "}
              <a href="#portfolio">Portfolio</a>{" "}
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="copy-rights">
            <p>Copyright@ 2024 oneoreight all Rights reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
