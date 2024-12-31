import { animated, useInView, useSpring } from "@react-spring/web";
import React from "react";
import { Container } from "react-bootstrap";
import crossimg from "../../assets/Websitassets/cross.png";
import "./WeDontPlay.scss";

const AnimatedText = ({ children, delay }) => {
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
    <animated.p ref={ref} style={props} className="header-below-text">
      {children}
    </animated.p>
  );
};

const WeDontPlay = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleProps = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? "translateY(0px)" : "translateY(50px)",
  });

  const [crossRef, crossInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const crossProps = useSpring({
    opacity: crossInView ? 1 : 0,
    transform: crossInView ?  "translateY(0px)" : "translateY(100px)",
  });

  return (
    <>
      <div className="wedont-play">
        <Container>
          <animated.h1 ref={titleRef} style={titleProps}>
            We Don't Play Safe <br />
            <span>We Play to Win</span>
          </animated.h1>
          <div className="list-of-texts">
            <AnimatedText delay={200}>
              <p className="one-p header-below-text ">
                Risk the usual, or settle for ordinary.
              </p>
            </AnimatedText>
            <AnimatedText delay={400}>
              <p className="two-p header-below-text">
                Risk the usual, or settle for ordinary.
              </p>
            </AnimatedText>
            <AnimatedText delay={600}>
              <p className="three-p header-below-text ">
                Risk the usual, or settle for ordinary.
              </p>
            </AnimatedText>
            <AnimatedText delay={800}>
              <p className="four-p header-below-text ">
                Risk the usual, or settle for ordinary.
              </p>
            </AnimatedText>
            <AnimatedText delay={1000}>
              <p className="five-p header-below-text ">
                Risk the usual, or settle for ordinary.
              </p>
            </AnimatedText>
          </div>
        </Container>
        <div className="band-cross">
          <animated.img
            ref={crossRef}
            style={crossProps}
            src={crossimg}
            alt="band"
            className="cross-img"
          />
        </div>
      </div>
    </>
  );
};

export default WeDontPlay;
