import React from "react";
import "./Services.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import one from "../../assets/services/1.png";
import two from "../../assets/services/2.png";
import three from "../../assets/services/3.png";
import four from "../../assets/services/4.png";
import five from "../../assets/services/5.png";
import { useSpring, animated, useInView } from "@react-spring/web";

const AnimatedCard = ({ children, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    delay,
  });

  return (
    <animated.div ref={ref} style={props} className="galsscards">
      {children}
    </animated.div>
  );
};

const AnimatedButton = ({ children, delay, style }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const buttonProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    delay,
    config: { tension: 250, friction: 40 },
  });
  return (
    <animated.div
      ref={ref}
      style={{ ...buttonProps, ...style }}
      className="style-button-like"
    >
      {children}
    </animated.div>
  );
};

const Services = () => {
  return (
    <div className="Services" id="services">
      <Container>
        {/* <div className="inside-big-text-btns">
          <AnimatedButton
            delay={200}
            style={{ position: "absolute", left: "8%", bottom: "-40%" }}
          >
            Tech Solutions
          </AnimatedButton>
          <AnimatedButton
            delay={400}
            style={{ position: "absolute", left: "15%", top: "-20%" }}
          >
            Branding & Strategy
          </AnimatedButton>
          <AnimatedButton
            delay={600}
            style={{ position: "absolute", left: "35%", bottom: "-10%" }}
          >
            Merchandising
          </AnimatedButton>
          <AnimatedButton
            delay={800}
            style={{ position: "absolute", left: "60%", bottom: "-40%" }}
          >
            Multimedia Production
          </AnimatedButton>
          <AnimatedButton
            delay={1000}
            style={{ position: "absolute", left: "70%", top: "-10%" }}
          >
            Branded Content
          </AnimatedButton>
          <h1>OUR PLAYBOOK</h1>
        </div> */}

        <div className="inside-big-text-btns">
          <AnimatedButton
            delay={200}
            style={{ position: "absolute", left: "8%", bottom: "-40%" }}
          >
            Tech Solutions
          </AnimatedButton>
          <AnimatedButton
            delay={400}
            style={{ position: "absolute", left: "15%", top: "-20%" }}
          >
            Branding & Strategy
          </AnimatedButton>
          <AnimatedButton
            delay={600}
            style={{ position: "absolute", left: "35%", bottom: "-10%" }}
          >
            Merchandising
          </AnimatedButton>
          <AnimatedButton
            delay={800}
            style={{ position: "absolute", left: "60%", bottom: "-40%" }}
          >
            Multimedia Production
          </AnimatedButton>
          <AnimatedButton
            delay={1000}
            style={{ position: "absolute", left: "70%", top: "-10%" }}
          >
            Branded Content
          </AnimatedButton>
          <h1>OUR PLAYBOOK</h1>
        </div>
        <div className="text-below">
          <p className="header-below-text ">
            We bring strategy, creativity, and hustle to every project.
          </p>
        </div>
        <Row className="make-row mx-2">
          <Col md={6} lg={4} sm={12} className="innder-col ">
            <AnimatedCard delay={200}>
              <div className="imges-section image-size-one">
                <img src={one} alt="Branded Content" />
              </div>
              <h2>Branded Content</h2>
              <p className="font-size-16px">
                Stories that disrupt. From films to immersive campaigns, we
                shape narratives that leave lasting impressions.
              </p>
            </AnimatedCard>
          </Col>
          <Col md={6} lg={4} sm={12} className="innder-col">
            <AnimatedCard delay={400}>
              <div className="imges-section">
                <img src={two} alt="Branding & Strategy" />
              </div>
              <h2>Branding & Strategy</h2>
              <p className="font-size-16px">
                Data meets creativity. We craft brands that stand out with
                purpose, identity, and strategy that deliver.
              </p>
            </AnimatedCard>
          </Col>
          <Col md={6} lg={4} sm={12} className="innder-col">
            <AnimatedCard delay={600}>
              <div className="imges-section image-size-thired">
                <img src={three} alt="Multimedia Production" />
              </div>
              <h2>Multimedia Production</h2>
              <p className="font-size-16px">
                Cinematic visuals, dynamic animations, and social-first
                reels—designed to captivate and connect.
              </p>
            </AnimatedCard>
          </Col>
        </Row>

        <Row sm={1} md={2} className="below-row mx-2">
          <Col>
            <AnimatedCard delay={800}>
              <div className="imges-section-absolute">
                <img src={four} alt="Merchandising" />
              </div>
              <h2 className="pos-h-abso">Merchandising</h2>
              <p className="font-size-16px">
                From concept to execution, we create bespoke merchandise that
                amplifies your brand’s presence.
              </p>
            </AnimatedCard>
          </Col>
          <Col>
            <AnimatedCard delay={1200}>
              <div className="imges-section-absolute last-img">
                <img src={five} alt="Tech Solutions" />
              </div>
              <h2 className="pos-h-abso">Tech Solutions</h2>
              <p className="font-size-16px absou-text">
                Web platforms, digital tools, and tech-driven campaigns that
                perform as boldly as they look.
              </p>
            </AnimatedCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
