

// export default App;
import { Suspense, lazy } from "react";
import { useSpring, animated } from "@react-spring/web";
import Loading from "./component/loading/Loading";
import { useMediaQuery } from "react-responsive";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";


// Lazy load all components
const CustomNavbar = lazy(() => import("./component/navBar/Navbar"));
const HeroSection = lazy(() => import("./component/heroSection/HeroSection"));
const About = lazy(() => import("./component/about/About"));
const WeDontPlay = lazy(() => import("./component/wedontplay/WeDontPlay"));
const Services = lazy(() => import("./component/services/Services"));
const Highlights = lazy(() => import("./component/highlights/Highlights"));
// const Portfolio = lazy(() => import("./component/portfolio/Portfolio"));
const NewPortfolio = lazy(() => import("./component/NewPortfolio/NewPortfolio"));
const PortfolioDetails = lazy(() => import("./component/NewPortfolio/portfolioDetails"));
const OurTeams = lazy(() => import("./component/ourteam/OurTeams"));
const Contact = lazy(() => import("./component/contact/Contact"));
const Footer = lazy(() => import("./component/footer/Footer"));
const OurStory = lazy(() => import("./component/wedontplay/OurStory"));
const OurMobileStory = lazy(() => import("./component/wedontplay/MobileStory"));
const Policy = lazy(() => import("./component/Privacy/Policy"));

const AnimatedSection = ({ children, index }) => {
  const props = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: index * 200,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

function MainContent({ isMobile }) {
  const sections = [
    { id: "hero", component: HeroSection },
    { id: "about", component: About },
    { id: "wedontplay", component: WeDontPlay },
    { 
      id: "story", 
      component: isMobile ? OurMobileStory : OurStory 
    },
    { id: "services", component: Services },
    { id: "highlights", component: Highlights },
    // { id: "portfolio", component: Portfolio },
    { id: "portfolio", component: NewPortfolio },
    { id: "team", component: OurTeams },
    { id: "contact", component: Contact },
    { id: "footer", component: Footer },
  ];

  return (
    <main>
      {sections.map(({ id, component: Component }, index) => (
        <AnimatedSection key={id} index={index}>
          <Component />
        </AnimatedSection>
      ))}
    </main>
  );
}

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const location = useLocation();
  const isPolicyPage = location.pathname === "/privacypolicy";

  return (
    <>
      <Suspense fallback={<Loading />}>
        {!isPolicyPage && <CustomNavbar />}
    
        <Routes>
          <Route 
            path="/" 
            element={<MainContent isMobile={isMobile} />} 
          />
          <Route path="/privacypolicy" element={<Policy />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
        
      </Suspense>
    </>
  );
}

export default App;