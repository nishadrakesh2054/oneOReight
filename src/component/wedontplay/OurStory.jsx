import React from "react";
import "./OurStory.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSpring, animated, useInView } from "@react-spring/web";
import one from "../../assets/story/Group1.png";
import two from "../../assets/story/Group2.png";

const AnimatedElement = ({ children, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    delay,
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const OurStory = () => {
  return (
    <div className="OurStory">
      <Container>
        <Row md={2} sm={1}>
          <Col>
            <AnimatedElement delay={200}>
              <div className="img-list-number">
                <img src={one} alt="one" />
              </div>
            </AnimatedElement>
          </Col>
          <Col className="ou-col">
            <AnimatedElement delay={400}>
              <h2>Our Story</h2>
              <p className="font-size-16px">
                Our name comes from the Japanese idiom 一か八か (ichika
                bachika), meaning <span>"all or nothing."</span> Just like a
                game-winning shot in overtime, we take risks and make plays that
                push boundaries. From the heart of Nepal, we bring bold ideas to
                life for brands around the globe—crafted with care, driven by
                impact.
              </p>
            </AnimatedElement>
          </Col>
        </Row>
      </Container>
      <div className="border-for-it">
        <Container>
          <Row className="ad-row-bor">
            <Col sm={12} md={6}>
              <AnimatedElement delay={600}>
                <div className="img-list-number">
                  <img src={two} alt="one" />
                </div>
              </AnimatedElement>
            </Col>
            <Col>
              <AnimatedElement delay={800}>
                <h2>What do we do</h2>
                <p className="font-size-16px">
                  At One or Eight, we specialize in bold strategies and creative
                  campaigns for brands ready to disrupt their industries.
                  Whether it’s crafting unforgettable stories, designing
                  cutting-edge content, or building tools that elevate your
                  brand, we’re here to make a statement.
                </p>
                <div className="btns-more">
                  <Button variant="transparent">View More</Button>
                </div>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurStory;
