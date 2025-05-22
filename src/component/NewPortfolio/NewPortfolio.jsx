import React, { useState } from "react";
import "./NewPortfolio.scss";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import portfolioItems from "./portdata";

const NewPortfolio = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/portfolio/${item.id}`, { state: item });
  };

  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <div className="main-text">
          <h1>Our Work</h1>
          <p className="font-size-16px text-center text-light">
            We collaborate with bold brands to craft standout digital
            experiences, powerful visuals, and strategic impact.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div
              className="portfolio-card"
              key={item.id}
              onClick={() => handleNavigate(item)}
            >
              <img src={item.img} alt={item.client} />
              <div className="overlay">
                <h3>{item.client}</h3>
                <div className="work-type">{item.work}</div>
                <FaLongArrowAltRight />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewPortfolio;
