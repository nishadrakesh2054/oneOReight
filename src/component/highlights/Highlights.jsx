import React, { useRef, useEffect, useState } from "react";
import { useInView, animated, useSpring } from "@react-spring/web";
import "./Highlights.scss";
import { Container } from "react-bootstrap";
import video from "../../assets/video/reels.mp4";

const Highlights = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleAnimation = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 120, friction: 14 },
    delay: 500, // Slight delay for the subtitle animation
  });

  const subtitleAnimation = useSpring({
    opacity: subtitleInView ? 1 : 0,
    transform: subtitleInView ? "translateY(0px)" : "translateY(70px)",
    config: { tension: 120, friction: 14 },
    delay: 700, // Slight delay for the subtitle animation
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <div className="Highlights">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`background-video ${isVideoLoaded ? "loaded" : ""}`}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="dark-overlay"></div>
      <div className="content-overlay">
        <Container>
          <animated.h1 ref={titleRef} style={titleAnimation}>
            Our <span>Highlight</span> Reel
          </animated.h1>
          <animated.p
            ref={subtitleRef}
            style={subtitleAnimation}
            className="font-size-bold header-below-text"
          >
            We’ve partnered with ambitious brands to craft impactful campaigns.
            <br /> Here’s a glimpse of the bold moves we’ve made together.
          </animated.p>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
