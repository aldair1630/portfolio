import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../images/img/color-sharp.png";
import html from "../images/img/icons8-html.svg";
import css from "../images/img/icons8-css.svg";
import javascript from "../images/img/icons8-javascript-logo.svg";
import react from "../images/img/icons8-react.svg";
import redux from "../images/img/icons8-redux.svg";
import nodejs from "../images/img/icons8-nodejs.svg";
import postgresql from "../images/img/icons8-postgresql.svg";
import mongodb from "../images/img/icons8-mongodb.svg";
import php from "../images/img/icons8-php-logo.svg";
import wordpress from "../images/img/icons8-wordpress.svg";
import bootstrap from "../images/img/icons8-bootstrap.svg";
import tailwind from "../images/img/icons8-tailwind-css.svg";
import java from "../images/img/icons8-java.svg";
import python from "../images/img/icons8-python.svg";
import csharp from "../images/img/icons8-c.svg";
import git from "../images/img/icons8-git.svg";
import github from "../images/img/icons8-github.svg";
import nextjs from "../images/img/icons8-nextjs.svg";
import mysql from "../images/img/icons8-mysql.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
              <p>
                I work in web development, frontend skills, I focus on the
                visible part of a website, what the user sees and interacts
                with. I have knowledge of HTML, CSS, JavaScript and popular
                frameworks like React. It is also important to highlight that I
                have web design and user experience (UX) skills to create an
                attractive and easy-to-use website.
                <br />
                <br />
                My backend skills are focused on the behind the scenes of the
                website, allowing everything to run smoothly. I have knowledge
                in Javascript programming languages ​​with express.
                Additionally, I have skills in databases like MySQL, Postgres
                and Sequelize, web servers, and application architecture to
                ensure everything runs smoothly behind the scenes. It is also
                important to highlight that I have web security skills to ensure
                that the website is safe and reliable.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 3000ms linear"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt={html} />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt={css} />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt={javascript} />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt={react} />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nextjs} alt={nextjs} />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={redux} alt={redux} />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt={nodejs} />
                  <h5>ExpressJS</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt={mysql} />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={postgresql} alt={postgresql} />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt={mongodb} />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={php} alt={php} />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={wordpress} alt={wordpress} />
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt={bootstrap} />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt={tailwind} />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={java} alt={java} />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt={python} />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={csharp} alt={csharp} />
                  <h5>C Sharp</h5>
                </div>
                <div className="item">
                  <img src={git} alt={git} />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={github} alt={github} />
                  <h5>GitHub</h5>
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
