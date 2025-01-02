import React, { useState } from "react";
import "./Contact.scss";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import link from "../../assets/contact/linkedin.png";
import insta from "../../assets/contact/insta.png";
import mail from "../../assets/contact/mail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState(null); // State for success/error message

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q88h9xh", // Replace with your EmailJS service ID
        "template_ndypstt", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          to_name: "1OR8 Team",
          message: formData.message,
          reply_to: formData.email,
          email: formData.email,
        },
        "RBNOfpel9yNYFWR2J" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setFeedback({ success: true, message: "Message sent successfully!" });
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          setFeedback({
            success: false,
            message: "Failed to send the message. Please try again.",
          });
        }
      );
  };

  return (
    <div className="Contact" id="contact">
      <Container>
        <div className="text-contact">
          <h1>Let’s Game Plan Together</h1>
          <p className="header-below-text">
            Ready to make bold moves? Let’s craft something extraordinary.
            <br />
            <span>Get in touch today.</span>
          </p>
        </div>
        <div className="form-area">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="name">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <div className="button-lets-talk">
              <Button type="submit" variant="transparent" >
                Let’s Talk
              </Button>
            </div>
            {/* Feedback message */}
            {feedback && (
              <p
                style={{
                  marginTop: "10px",
                  color: feedback.success ? "green" : "red",
                }}
              >
                {feedback.message}
              </p>
            )}
          </Form>
        </div>
        <div className="text-contact-fotter">
          <p className="font-size-16px">
            For collaborations, partnerships, or just to chat about bold ideas,{" "}
            <br /> reach out to us:
          </p>
          <div className="social-logos">
            <a href="mailto:contact@1or8.com.np">
              <img src={mail} alt="mail" />
            </a>
            <Link to="https://www.instagram.com/oneoreight.np/" target="_blank">
              <img src={insta} alt="insta" />
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/company/oneoreight">
              <img src={link} alt="linkedin" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
