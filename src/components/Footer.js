import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
import navIcon1 from "../images/img/nav-icon1.svg";
import navIcon2 from "../images/img/nav-icon2.svg";
import navIcon3 from "../images/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt={logo} className="logo-arb" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aldair1630/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt={navIcon1} />
              </a>
              <a
                href="https://www.facebook.com/yosoyaldair"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt={navIcon2} />
              </a>
              <a
                href="https://www.github.com/aldair1630/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt={navIcon3} />
              </a>
              <p>Copyright 2023. All Rights Reserver</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
