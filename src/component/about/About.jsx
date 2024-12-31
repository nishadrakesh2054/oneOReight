import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <p className="font-size-16px">
              From the heart of Nepal, we bring bold ideas to life for brands
              around the globe—crafted with care, driven by impact. Our work
              combines creativity and precision to deliver stories that
              resonate, strategies that disrupt, and results that matter.
            </p>
          </Col>
          <Col>
            <div className="buttons-animations">
              <a href="#contact" className="btn btn-wave">
                Kick Off Your Project
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
