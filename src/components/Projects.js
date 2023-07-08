import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../images/img/project-img1.png";
import projImg2 from "../images/img/project-img2.jpg";
import projImg3 from "../images/img/project-img3.png";
import projImg4 from "../images/img/project-img4.png";
import projImg5 from "../images/img/project-img5.png";
import projImg6 from "../images/img/project-img6.png";
import projImg7 from "../images/img/project-img7.png";
import projImg8 from "../images/img/project-img8.png";
import projImg10 from "../images/img/project-img10.png";
import colorSharp2 from "../images/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects1 = [
    {
      title: "Videogame app",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://frontend-videogames-app.netlify.app/",
    },
    {
      title: "Dogs app",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://frontend-dogs-app.netlify.app/",
    },
    {
      title: "Pokemons app",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://frontend-pokemons-app.netlify.app/",
    },
    {
      title: "Fods app",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "https://frontend-foods-app.netlify.app/",
    },
    {
      title: "Weather app",
      description: "Design & Development",
      imgUrl: projImg5,
      url: "https://weatherapparb.netlify.app/",
    },
    {
      title: "Students app",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://students-app.netlify.app/",
    },
  ];

  const projects2 = [
    {
      title: "My first portfolio",
      description: "Desing & Development",
      imgUrl: projImg7,
      url: "https://portafolioarb.netlify.app/",
    },
    {
      title: "Movies app",
      description: "Desing & Development",
      imgUrl: projImg8,
      url: "https://moviesapparb.netlify.app/",
    },
    {
      title: "Tasks app",
      description: "Desing & Development",
      imgUrl: projImg10,
      url: "https://task-app-tsx.netlify.app/",
    },
  ];

  // add this function to handle the click event
  const handleProjectClick = (url) => {
    window.location.href = url;
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In my portfolio I present several projects that I have
                    developed successfully, using cutting-edge technologies such
                    as React, Redux, Express and PostgreSQL. My projects are
                    personalized and efficient solutions, built with a detailed
                    and results-oriented approach, and always meeting the
                    client's deadlines and needs.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.url)}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.url)}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>Comming soon more projects here...</h1>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt={colorSharp2}
      ></img>
    </section>
  );
};
