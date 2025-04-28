import React from "react";
import "./OurTeams.scss";
import { Container, Row, Col } from "react-bootstrap";
import TeamCarousel from "./TeamCarousel";

const OurTeams = () => {
  return (
    <div className="OurTeams" id="team">
      <Container>
    

        <div className="text-team">
          <h1>The Playmakers</h1>
          <p className="header-below-text ">
            <span>
              Bold ideas come to life when daring minds come together.
            </span>{" "}
            <br />
            Meet the strategists, creators, and innovators behind One or Eight.
          </p>
        </div>
      </Container>
      <TeamCarousel />
    </div>
  );
};

export default OurTeams;
