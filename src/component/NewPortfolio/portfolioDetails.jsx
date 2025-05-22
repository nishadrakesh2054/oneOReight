// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Container, Button, Row, Col } from "react-bootstrap";
// import "./portDetails.scss";
// import portfolioItems from "./portdata";

// const PortfolioDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const item = portfolioItems.find((p) => p.id === parseInt(id));

//   if (!item) {
//     return (
//       <Container className="text-center pt-5 text-white">
//         <h2>Portfolio Item Not Found</h2>
//         <Button variant="light" onClick={() => navigate(-1)}>
//           Back to Portfolio
//         </Button>
//       </Container>
//     );
//   }

//   return (
//     <div
//       className="portfolio-details"
//       style={{ background: "#000000", minHeight: "100vh" }}
//     >
//       <Container>
//         <Button
//           variant="outline-light"
//           className="back-btn"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </Button>

//         {/* Client Header Section */}
//         <Row className="client-header align-items-center mb-5">
//           <Col md={4} className="logo-col mb-4 mb-md-0">
//             {item.logo && (
//               <img
//                 src={item.logo}
//                 alt={item.client}
//                 className="client-logo img-fluid"
//               />
//             )}
//           </Col>
//           <Col md={8} className="description-col">
//             <h1 className="client-name">{item.client}</h1>
//             {item.description && (
//               <p className="project-description">{item.description}</p>
//             )}
//           </Col>
//         </Row>

//         {/* Video Showcase */}
//         {item.videos && (
//           <section className="video-section mb-5">
//             <h3 className="section-title">Video Production</h3>

//             <div className="video-wrapper ratio ratio-16x9">
//               <video
//                 autoPlay
//                 muted
//                 playsInline
//                 loop
//                 className="project-video"
//                 style={{ width: "100%", height: "auto", borderRadius: "12px" }}
//               >
//                 <source src={item.videos} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </section>
//         )}

//         {/* Image Gallery Carousel */}
//         {item.images && (
//           <section className="gallery-section mb-5">
//             <h3 className="section-title">Project Gallery</h3>

//             <div className="image-grid">
//               {item.images.map((img, idx) => (
//                 <div className="portfolio-card" key={idx}>
//                   <img src={img} alt={`${item.client} ${idx + 1}`} />
//                   <div className="overlay">View More</div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default PortfolioDetails;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./portDetails.scss";
import portfolioItems from "./portdata";

const PortfolioDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = portfolioItems.find((p) => p.id === parseInt(id));

  if (!item) {
    return (
      <Container className="text-center pt-5 text-white">
        <h2>Portfolio Item Not Found</h2>
        <Button variant="light" onClick={() => navigate(-1)}>
          Back to Portfolio
        </Button>
      </Container>
    );
  }

  return (
    <div className="portfolio-details">
      <Container>
        <Button
          variant="outline-light"
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>

        {/* Client Header Section */}
        <Row className="client-header align-items-center mb-5 g-5">
          <Col md={4} className="logo-col mb-4 mb-md-0">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.client}
                className="client-logo img-fluid"
              />
            )}
          </Col>
          <Col md={8} className="description-col">
            <h1 className="client-name">{item.client}</h1>
            {item.description && (
              <p className="project-description">{item.description}</p>
            )}
          </Col>
        </Row>


        {item.images && (
          <section className="gallery-section mb-5">
            <h3 className="section-title">Project Gallery</h3>
            <p className="mx-3 mb-4">
              Maintaining 2 images per row across all screen sizes, as you
              requested.
            </p>

            <div className="image-grid">
              {item.images.map((imgObj, idx) => (
                <div className="portfolio-card" key={idx}>
                  <div className="card-inner">
                    <a
                      href={imgObj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={imgObj.src} alt={imgObj.title} />
                      <div className="card-content">
                        <h4 className="image-title">{imgObj.title}</h4>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* Video Showcase */}
        {item.videos && (
          <section className="video-section mb-5">
            <h3 className="section-title">Video Production</h3>
            <p className="mx-3">
              maintaining 2 images per row across all screen sizes, as you
              requested.
            </p>
            <div className="video-wrapper">
              <video autoPlay muted playsInline loop className="project-video">
                <source src={item.videos} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        )}
      </Container>
    </div>
  );
};

export default PortfolioDetails;
