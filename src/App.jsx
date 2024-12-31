import React, { Suspense, lazy } from "react";
import { useSpring, animated } from "@react-spring/web";
import Loading from "./component/loading/Loading";

// Lazy load all components
const CustomNavbar = lazy(() => import("./component/navBar/Navbar"));
const HeroSection = lazy(() => import("./component/heroSection/HeroSection"));
const About = lazy(() => import("./component/about/About"));
const WeDontPlay = lazy(() => import("./component/wedontplay/WeDontPlay"));
const Services = lazy(() => import("./component/services/Services"));
const Highlights = lazy(() => import("./component/highlights/Highlights"));
const Portfolio = lazy(() => import("./component/portfolio/Portfolio"));
const OurTeams = lazy(() => import("./component/ourteam/OurTeams"));
const Contact = lazy(() => import("./component/contact/Contact"));
const Footer = lazy(() => import("./component/footer/Footer"));
const OurStory = lazy(() => import("./component/wedontplay/OurStory"));

const AnimatedSection = ({ children, index }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: index * 200, // Dynamically calculate delay
  });

  return <animated.div style={props}>{children}</animated.div>;
};

function App() {
  const sections = [
    { component: HeroSection },
    { component: About },
    { component: WeDontPlay },
    { component: OurStory },
    { component: Services },
    { component: Highlights },
    { component: Portfolio },
    { component: OurTeams },
    { component: Contact },
    { component: Footer },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <CustomNavbar />
      <main>
        {sections.map((Section, index) => (
          <AnimatedSection key={index} index={index}>
            <Section.component />
          </AnimatedSection>
        ))}
      </main>
    </Suspense>
  );
}

export default App;
