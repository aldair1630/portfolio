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
import projImg9 from "../images/img/project-img9.png";
import projImg10 from "../images/img/project-img10.png";
import projImg11 from "../images/img/project-img11.png";
import projImg12 from "../images/img/project-img12.png";
import projImg13 from "../images/img/project-img13.png";
import colorSharp2 from "../images/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

// New image imports for projects
import hostalAppImg from "../images/img/hostal app.png";
import networkAuditImg from "../images/img/network audit.png";
import auditorIntegralImg from "../images/img/Auditor integral.png";
import frpToolImg from "../images/img/FrpTool.png";
import beyondColombiaImg from "../images/img/beyond colombia.png";
import travelAgencyImg from "../images/img/travel agency.png";
import nextSportAppImg from "../images/img/next sport app.png";
import djMasterBeatImg from "../images/img/djalex master beat.png";
import infinityTechnologyImg from "../images/img/infinity technology.png";
import frpToolWebsiteImg from "../images/img/frptool-website.png";
import documentoAppImg from "../images/img/documento-app.jpeg";

const placeholderImg =
  "https://via.placeholder.com/400x300/6c63ff/ffffff?text=Project";

export const Projects = () => {
  const projects1 = [
    {
      title: "Videogame app",
      description: "APIRest, React, Redux, Express & PostgreSQL",
      imgUrl: projImg1,
      url: "https://frontend-videogames-app.netlify.app/",
    },
    {
      title: "Dogs app",
      description: "APIRest, React, Redux, Express & PostgreSQL",
      imgUrl: projImg2,
      url: "https://frontend-dogs-app.netlify.netlify.app/",
    },
    {
      title: "Pokemons app",
      description: "APIRest, React, Redux, Express & PostgreSQL",
      imgUrl: projImg3,
      url: "https://frontend-pokemons-app.netlify.app/",
    },
    {
      title: "Fods app",
      description: "APIRest, React, Redux, Express & PostgreSQL",
      imgUrl: projImg4,
      url: "https://frontend-foods-app.netlify.app/",
    },
    {
      title: "Weather app",
      description: "React & Bootstrap",
      imgUrl: projImg5,
      url: "https://weatherapparb.netlify.app/",
    },
    {
      title: "Students app",
      description: "React",
      imgUrl: projImg6,
      url: "https://students-app.com/",
    },
  ];

  const projects2 = [
    {
      title: "My first portfolio",
      description: "HTML, CSS & Javascript",
      imgUrl: projImg7,
      url: "https://portafolioarb.netlify.app/",
    },
    {
      title: "Movies app",
      description: "React",
      imgUrl: projImg8,
      url: "https://moviesapparb.netlify.app/",
    },
    {
      title: "Ecommerce",
      description: "React, Emotion, Redux, Stripe, MUI",
      imgUrl: projImg9,
      url: "https://ecommerce-arb.netlify.app/",
    },
    {
      title: "Tasks app",
      description: "React",
      imgUrl: projImg10,
      url: "https://task-app-tsx.netlify.app/",
    },
    {
      title: "NextJS app",
      description: "React, NextJS, NodeJS, Bootstrap",
      imgUrl: projImg11,
      url: "https://nextjs-firstproject-mu.vercel.app/",
    },
    {
      title: "Images Generator IA-Dalle",
      description: "Desing & Development",
      imgUrl: projImg12,
      url: "https://ia-dalle.vercel.app/",
    },
    {
      title: "Hotel Reservation",
      description: "JSS, Emotion, React, MUI",
      imgUrl: projImg13,
      url: "https://hotel-flame-theta.vercel.app/",
    },
  ];

  const projects3 = [
    {
      title: "Hostal App",
      description: "App for hostal management",
      imgUrl: hostalAppImg, // Updated
      url: "https://hostalapp.netlify.app/",
    },
    {
      title: "Network Audit",
      description: "Network auditing tool",
      imgUrl: networkAuditImg, // Updated
      url: "https://github.com/aldair1630/NetworkAudit",
    },
    {
      title: "Auditor Integral WiFi",
      description: "WiFi auditing tool",
      imgUrl: auditorIntegralImg, // Updated
      url: "https://github.com/aldair1630/AuditorIntegralWiFi",
    },
    {
      title: "FRP Tool Desktop",
      description: "Fast Reverse Proxy tool",
      imgUrl: frpToolImg, // Updated
      url: "https://github.com/aldair1630/frptool",
    },
    {
      title: "Beyond Colombia",
      description: "Travel and tourism app",
      imgUrl: beyondColombiaImg, // Updated
      url: "https://github.com/aldair1630/beyond-colombia",
    },
  ];

  const projects4 = [
    {
      title: "Documento App",
      description: "Document management app",
      imgUrl: documentoAppImg,
      url: "https://github.com/aldair1630/documentoapp",
    },
    {
      title: "Travel Agency App",
      description: "Travel booking application",
      imgUrl: travelAgencyImg, // Updated
      url: "https://travelscaal.netlify.app/",
    },
    {
      title: "Next Sport App",
      description: "Sports management application",
      imgUrl: nextSportAppImg, // Updated
      url: "https://nextsportapp.netlify.app/",
    },
    {
      title: "DJ Master Beat",
      description: "Music and DJ application",
      imgUrl: djMasterBeatImg, // Updated
      url: "https://djalexmasterbeat.com/",
    },
    {
      title: "Infinity Technology",
      description: "Technology services app",
      imgUrl: infinityTechnologyImg, // Updated
      url: "https://infinitytechnology.com.co/",
    },
  ];

  const projects5 = [
    {
      title: "FRP Tool Website",
      description: "Website for FRP Tool",
      imgUrl: frpToolWebsiteImg,
      url: "https://infinityfrptool.com/",
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
                      className="nav-pills mb-5 justify-content-center align-items-center flex-wrap"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Business Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Web Projects</Nav.Link>
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
                        <Row>
                          {projects3.map((project, index) => {
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
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {projects4.map((project, index) => {
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
                      <Tab.Pane eventKey="fifth">
                        <Row>
                          {projects5.map((project, index) => {
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
