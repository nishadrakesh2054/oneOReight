import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../../assets/Websitassets/button-arrow.png";
import bSir from "../../assets/team/1.png";
import aSir from "../../assets/team/2.png";
import sMaam from "../../assets/team/3.png";
import nSir from "../../assets/team/4.png";
// import lMaam from "../../assets/team/5.png";
import Rakesh from "../../assets/team/RAKESH.png";
import Rizn from "../../assets/team/RIJAN.png";

import "./TeamCarousel.scss";

const TeamCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFlip = (index) => {
    // If the card is already flipped, set it back to null
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      // Flip the new card and reset the previous one
      setFlippedIndex(index);
    }
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 786 }, items: 3 },
    mobile: { breakpoint: { max: 786, min: 0 }, items: 2 },
  };

  const teamMembers = [
    {
      name: "BARUN KHADKA",
      role: "DIRECTOR",
      image: bSir,
      bg: "#F15F2B",
      info: "Oversees overall strategy and drives innovation within the organization.",
    },
    {
      name: "Abin Shakya",
      role: "Director",
      image: aSir,
      bg: "#FF703D",
      info: "Leads teams, oversees strategy, and ensures seamless execution of projects.",
    },
    {
      name: "Shristi Shakya",
      role: "Senior  Designer",
      image: sMaam,
      bg: "#FF7B4C",
      info: "Crafts compelling visuals and designs with a creative flair.",
    },
    {
      name: "Lumanti Maharjan",
      role: "Content Lead",
      image: nSir,
      bg: "#FF8D65",
      info: "Leads content strategies and ensures impactful storytelling.",
    },
    {
      name: "Er.Rakesh  Sahani",
      role: "Software Developer",
      image: Rakesh,
      bg: "#FF7B4C",
      info: "Develops and implements efficient software solutions while optimizing application performance.",
    },

    {
      name: "Rizan Maharjan",
      role: "Jr. Graphics Designer",
      image: Rizn,
      bg: "#FF703D",
      info: "Designs engaging visuals and supports the creation of impactful graphic content.",
    },
  ];

  return (
    <div className="TeamCarousel">
      <Container>
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px team-carousel"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-card ${flippedIndex === index ? "flipped" : ""}`}
              style={{ background: member.bg }}
            >
              <div className="card-front">
                <div className="bio-texts">
                  <p className="name">{member.name}</p>
                  <p>{member.role}</p>
                </div>
                <img src={member.image} alt={member.name} />
                <button onClick={() => handleFlip(index)}>
                  <img src={arrow} alt="Flip" />
                </button>
              </div>
              <div className="card-back">
                <p>{member.info}</p>
                <button onClick={() => handleFlip(index)}>
                  <img src={arrow} alt="Flip" />
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default TeamCarousel;
