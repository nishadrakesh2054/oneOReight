import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../../assets/portfolio/p1.png";
import p2 from "../../assets/portfolio/vidya.png";
import p3 from "../../assets/portfolio/p3.png";
import tdc from "../../assets/portfolio/tdc.jpeg";
import arrow from "../../assets/Websitassets/button-arrow.png";
import "./Portfolio.scss";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="portfolio" id="portfolio">
      <Container>
        <div className="main-text">
          <h1>Our Work</h1>
        </div>
        <div className="works-carousel">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px work-carousel"
          >
            <div className="img-cont">
              <Link target="_blank" to="https://thunderbolts.com.np/">
                <img src={arrow} alt="arrow" />
              </Link>
              <p>
                TDC — <br /> Website Design & Development
              </p>
              <img src={p1} alt="p1" />
            </div>
            <div className="img-cont">
              <Link target="_blank" to="https://thunderbolts.com.np/">
                <img src={arrow} alt="arrow" />
              </Link>
              <p>
                TDC — <br />
                Branding & Merchandise
              </p>
              <img src={tdc} alt="p1" />
            </div>
            <div className="img-cont">
              <Link
                target="_blank"
                to="https://play.google.com/store/apps/details?id=com.geezerbuild.vidya&pcampaignid=web_share"
              >
                <img src={arrow} alt="arrow" />
              </Link>
              <p>
                Vidya App — <br /> App Design & Development
              </p>
              <img src={p2} alt="p1" />
            </div>
            <div className="img-cont">
              <Link target="_blank" to="https://gems.edu.np/">
                <img src={arrow} alt="arrow" />
              </Link>
              <p>
                GEMS School — <br />
                Website Design & Development
              </p>
              <img src={p3} alt="p1" />
            </div>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
