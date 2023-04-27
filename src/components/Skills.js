import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../images/img/meter1.svg";
import meter2 from "../images/img/meter2.svg";
import meter3 from "../images/img/meter3.svg";
import colorSharp from "../images/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Lorem ipsum</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt={{ meter1 }} />
                  <h5>Web development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={meter2} />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt={meter3} />
                  <h5>Logo Desing</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt={meter1} />
                  <h5>Front-End</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={meter2} />
                  <h5>Back-End</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt={meter2} />
                  <h5>Database</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt={colorSharp}
      />
    </section>
  );
};
