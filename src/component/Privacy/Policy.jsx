import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./policy.scss";
import { useNavigate } from "react-router-dom";
import { FaHome, FaLock } from "react-icons/fa";

const Policy = () => {
  const navigate = useNavigate();
  return (
    <div className="privacy ">
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center py-4 mb-4 border-bottom">
            
              <Button
                variant="light"
                onClick={() => navigate("/")}
                className="d-flex align-items-center gap-2 px-2 py-1 rounded-pill shadow-sm"
                style={{
                  background:
                    "linear-gradient(to right, #fff 0%, #f8f9fa 100%)",
                  border: "1px solid #C82B2E",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right,rgb(255, 255, 255) 0%,rgb(248, 87, 103) 100%)";
                  e.currentTarget.style.borderColor = "#b71c1c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(to right, #fff 0%, #f8f9fa 100%)";
                  e.currentTarget.style.borderColor = "#dc3545";
                }}
              >
                <FaHome
                  className="text-danger"
                  style={{ transition: "all 0.3s ease" }}
                />
                <span
                  className="text-danger fw-normal"
                  style={{ letterSpacing: "0.5px" }}
                >
                   Return
                </span>
              </Button>

              {/* Centered title with icon */}
              <div className="position-absolute start-50 translate-x-middle d-flex align-items-center">
                <FaLock className="fs-4 text-light me-2" />
                <h2 className="m-0 text-light fw-normal">Privacy Policy</h2>
              </div>
            </div>

            <p>
              <strong>Effective Date:</strong> Jan 1, 2024
            </p>

            <h5 className="mt-4">Introduction</h5>
            <p className="font-size-16px">
              Welcome to <strong>One or Eight</strong>. Our name comes from the
              Japanese idiom
              <em> 一か八か (ichika bachika)</em>, meaning "all or nothing."
              Like a game-winning shot in overtime, we take risks and push
              boundaries. From the heart of Nepal, we bring bold ideas to life
              for brands around the globe—crafted with care, driven by impact.
            </p>

            <h5 className="mt-4">Information We Collect</h5>
            <ul className="font-size-16px">
              <li>
                <strong>Personal Information:</strong> Name, email, and contact
                details (if provided by the user).
              </li>
              <li>
                <strong>Usage Data:</strong> information, interactions, and
                analytics to enhance our services.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> Used for performance
                optimization and app improvements.
              </li>
            </ul>

            <h5 className="mt-4">How We Use Your Information</h5>
            <ul className="font-size-16px">
              <li>Deliver and improve our app experience.</li>
              <li>Provide customer support and respond to inquiries.</li>
              <li>Enhance security and prevent unauthorized access.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h5 className="mt-4">Information Sharing</h5>
            <p className="font-size-16px">
              We do not sell or share personal data with third parties except:
            </p>
            <ul className="font-size-16px">
              <li>When required by law or to enforce legal rights.</li>
              <li>
                With trusted service providers assisting in app operations.
              </li>
            </ul>

            <h5 className="mt-4">Data Security</h5>
            <p className="font-size-16px">
              We implement security measures to protect your data, but no system
              is 100% secure. Users are encouraged to take precautions when
              sharing information.
            </p>

            <h5 className="mt-4">Your Rights</h5>
            <p className="font-size-16px">You have the right to:</p>
            <ul className="font-size-16px">
              <li>Request access or deletion of your data.</li>
              <li>Opt out of certain data collection practices.</li>
            </ul>

            <h5 className="mt-4">Third-Party Services</h5>
            <p className="font-size-16px">
              Our app may contain links to third-party services with their own
              privacy policies. We are not responsible for their practices.
            </p>

            <h5 className="mt-4">Updates to This Policy</h5>
            <p className="font-size-16px">
              We may update this policy as needed. Changes will be posted on
              this page with a revised effective date.
            </p>

            <h5 className="mt-4">Contact Us</h5>
            <p className="font-size-16px">
              If you have any questions, feel free to contact us:
            </p>
            <p className="font-size-16px">
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@1or8.com.np" className="text-light">
                contact@1or8.com.np
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="https://1or8.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                https://1or8.com.np
              </a>
              <br />
              <strong>Address:</strong> Sanepa Lalitpur / Dhapakhel, Kathmandu,
              Nepal
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Policy;
