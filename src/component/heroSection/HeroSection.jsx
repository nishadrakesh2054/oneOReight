import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import { Container } from "react-bootstrap";
import logo3d from "../../assets/hero/logo3d.png";
import elips1 from "../../assets/hero/Ellipse1.png";
import elips2 from "../../assets/hero/Ellipse2.png";
import { Animated } from "react-animated-css";
import "animate.css";
import { useSpring, animated, config } from "@react-spring/web";
import { Link } from "react-router-dom";

const HeroSection = () => {
	const sectionRef = useRef(null);
	const [{ scrollY }, setScrollY] = useSpring(() => ({ scrollY: 0 }));

	const handleScroll = () => {
		setScrollY({ scrollY: window.scrollY });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const logoTransform = scrollY.to((y) => `translateY(${y * 0.5}px)`);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate__fadeIn");
				} else {
					entry.target.classList.remove("animate__fadeIn");
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<div className="hero-section " ref={sectionRef} id="home">
			<Container>
				<div className="overlay">
					<div className="content">
						<Animated
							animationIn="fadeInUp"
							animationInDuration={1000}
							isVisible={true}
						>
							<h1>
								For Brands <br /> That Play to Win, <br />
								<span> Not to Blend In.</span>
							</h1>
						</Animated>
						<Animated
							animationIn="fadeInUp"
							animationInDuration={1000}
							animationInDelay={200}
							isVisible={true}
						>
							<p className="font-size-16px">
								We're your partner in bold media moves that
								challenge conventions and drive results.
							</p>
						</Animated>
						<Animated
							animationIn="fadeInUp"
							animationInDuration={1000}
							animationInDelay={400}
							isVisible={true}
						>
							<div className="btn-main-her">
								<a
									className="btn btn-outline-light animate__animated cool-hover"
									href="#contact"
								>




                                    
									Let's Collaborate
								</a>
							</div>
						</Animated>
					</div>
				</div>
			</Container>
			<div className="backgrond-imges-gradents-ellips">
				<Animated
					animationIn="zoomOut"
					animationInDuration={1000}
					isVisible={true}
				>
					<animated.div
						className="hero-logo-div d-flex"
						style={{ transform: logoTransform }}
					>
						<img
							src={logo3d}
							alt="logo"
							className="hero-img hero-logo"
						/>
					</animated.div>
				</Animated>
				<Animated
					animationIn="fadeInLeft"
					animationInDuration={1000}
					isVisible={true}
				>
					<img
						src={elips1}
						alt="elllipos"
						className="hero-img elipsone"
					/>
				</Animated>
				<Animated
					animationIn="fadeInRight"
					animationInDuration={1000}
					isVisible={true}
				>
					<img
						src={elips2}
						alt="ellips"
						className="hero-img elipstwo"
					/>
				</Animated>
			</div>
		</div>
	);
};

export default HeroSection;
