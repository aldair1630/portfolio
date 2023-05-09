import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../images/img/project-img1.png";
import projImg2 from "../images/img/project-img2.png";
import projImg3 from "../images/img/project-img3.png";
import colorSharp2 from "../images/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Videogame app",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://videogamesarb.up.railway.app/"
    },
    {
      title: "Pokemon app",
      description: "Design & Development",
      imgUrl: projImg2,
      url:"https://frontend-pokemons-app-production.up.railway.app/"
    },
    {
      title: "Foods app",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Movies app",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Students app",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "My first portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
      url:"https://portafolioarb.netlify.app/"
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
                          {projects.map((project, index) => {
                            return <ProjectCard
                            key={index}
                            {...project}
                            onClick={() => handleProjectClick(project.url)}
                          />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          My Pokemon Project is a web application that allows
                          users to search, filter, and view detailed information
                          about Pokemon. The app is built using technologies
                          like React, Redux, and an external Pokémon API,
                          allowing for a dynamic and efficient user experience.
                          In addition, the application has features such as
                          state management and routing, which makes it complete
                          and consistent. It is also designed with an intuitive
                          and attractive interface so that users can enjoy the
                          Pokémon search experience. Overall, my Pokemon project
                          is a showcase of my web development skills, and I'm
                          excited to share it as part of my portfolio.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
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
