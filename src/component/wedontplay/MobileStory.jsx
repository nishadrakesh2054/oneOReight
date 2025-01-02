import React, { useState } from "react";
import "./MobileStory.scss";

import { RxMinusCircled, RxPlusCircled } from "react-icons/rx";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSpring, animated, useInView } from "@react-spring/web";
import one from "../../assets/story/Group1.png";
import two from "../../assets/story/Group2.png";

const MobileStory = () => {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

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

  return (
    <div className="OurStory">
      <button
        className={`toggle-button ${activeSection === 1 ? "active" : ""}`}
        onClick={() => toggleSection(1)}
      >
        {activeSection === 1 ? (
          <>
            <div className="d-flex align-items-center justify-content-between mx-5  py-2">
              <p className="fs-2">01</p>
              <h4>OUR STORY</h4>
              <RxMinusCircled style={{ fontSize: "30px" }} />
            </div>
          </>
        ) : (
          <>
            <div className="border-for-down w-100 py-2 ">
              <div className="d-flex align-items-center justify-content-between  mx-5">
                <p className="fs-2 ">01</p>
                <h4 className="">OUR STORY</h4>
                <RxPlusCircled style={{ fontSize: "30px" }} />
              </div>
            </div>
          </>
        )}
      </button>
      {activeSection === 1 && (
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
                  game-winning shot in overtime, we take risks and make plays
                  that push boundaries. From the heart of Nepal, we bring bold
                  ideas to life for brands around the globe—crafted with care,
                  driven by impact.
                </p>
              </AnimatedElement>
            </Col>
          </Row>
        </Container>
      )}

      <button
        className={`toggle-button ${activeSection === 2 ? "active" : ""}`}
        onClick={() => toggleSection(2)}
      >
        {activeSection === 2 ? (
          <>
            <div className="d-flex align-items-center justify-content-between mx-5 py-2">
              <p className="fs-2">02</p>
              <h4>WHAT DO WE DO</h4>
              <RxMinusCircled style={{ fontSize: "30px" }} />
            </div>
          </>
        ) : (
          <>
            <div className="d-flex align-items-center justify-content-between mx-5 py-2">
              <p className="fs-2">02</p>
              <h4>WHAT DO WE DO</h4>
              <RxPlusCircled style={{ fontSize: "30px" }} />
            </div>
          </>
        )}
      </button>

      {activeSection === 2 && (
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
                    At One or Eight, we specialize in bold strategies and
                    creative campaigns for brands ready to disrupt their
                    industries. Whether it’s crafting unforgettable stories,
                    designing cutting-edge content, or building tools that
                    elevate your brand, we’re here to make a statement.
                  </p>
                  <div className="btns-more">
                    <Button variant="transparent">View More</Button>
                  </div>
                </AnimatedElement>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default MobileStory;
