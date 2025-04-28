import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../../assets/Websitassets/button-arrow.png";
import bSir from "../../assets/team/1.png";
import aSir from "../../assets/team/2.png";
import sajanSir from "../../assets/team/sajan.png";
import Lumanti from "../../assets/team/newteam/Lumanti.png";
import Rakesh from "../../assets/team/newteam/Rakesh.png";
import Rizn from "../../assets/team/newteam/Rijan.png";
import abisek from "../../assets/team/newteam/abhisek.png";
import reshma from "../../assets/team/newteam/Resma.png";
import shristi from "../../assets/team/newteam/Shristi.png";
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
      image: shristi,
      bg: "#FF7B4C",
      info: "Crafts compelling visuals and designs with a creative flair.",
    },
    {
      name: "Lumanti Maharjan",
      role: "Content Lead",
      image: Lumanti,
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
      name: "Sajan Subba",
      role: " Software Developer",
      image: sajanSir,
      bg: "#FF703D",
      info: "Guides teams and ensures flawless project execution..",
    },
    {
      name: "Abhishek Shakya",
      role: "Multimedia Producer",
      image: abisek,
      bg: "#F15F2B",
      info: "Creates and designs multimedia content such as videos, animations, and interactive media.",
    },

    {
      name: "Rizan Maharjan",
      role: "Jr. Graphics Designer",
      image: Rizn,
      bg: "#FF7B4C",
      info: "Designs engaging visuals and supports the creation of impactful graphic content.",
    },
    {
      name: "Resma Shrestha",
      role: "Sr. Graphics Designer",
      image: reshma,
      bg: "#FF8D65",
      info: "Crafts innovative designs, ensures brand consistency, and mentors junior designers.",
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
                  <p className="role">{member.role}</p>
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
