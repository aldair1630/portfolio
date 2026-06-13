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

const placeholderImg = "https://via.placeholder.com/400x300/6c63ff/ffffff?text=Project";

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
      url: "https://github.com/aldair1630/students-app",
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
      url: "https://github.com/aldair1630/hostal-app",
    },
    {
      title: "Sistema POS",
      description: "Point of Sale System",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/Sistema-POS",
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
      title: "FRP Tool",
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
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/documentoapp",
    },
    {
      title: "Travel Agency App",
      description: "Travel booking application",
      imgUrl: travelAgencyImg, // Updated
      url: "https://github.com/aldair1630/travel-agency-app",
    },
    {
      title: "Next Sport App",
      description: "Sports management application",
      imgUrl: nextSportAppImg, // Updated
      url: "https://github.com/aldair1630/next-sport-app",
    },
    {
      title: "DJ Master Beat",
      description: "Music and DJ application",
      imgUrl: djMasterBeatImg, // Updated
      url: "https://github.com/aldair1630/djmasterbeat",
    },
    {
      title: "Infinity Technology",
      description: "Technology services app",
      imgUrl: infinityTechnologyImg, // Updated
      url: "https://github.com/aldair1630/infinitytechnology",
    },
    {
      title: "YouTube Automation Tool",
      description: "Automation tool for YouTube",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/youtube_automation_tool",
    },
  ];

  const projects5 = [
    {
      title: "YouTube Automation (Advanced)",
      description: "Advanced YouTube automation",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/aldair_youtube_automation_tool",
    },
    {
      title: "Port Scanner GUI",
      description: "Graphical port scanner",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/PortScannerGUI",
    },
    {
      title: "FRP Tool Website",
      description: "Website for FRP Tool",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/frptool-website",
    },
    {
      title: "Repara Facil",
      description: "Repair management app",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/ReparaFacil",
    },
    {
      title: "Hacking Tool",
      description: "Security testing tool",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/hackingtool",
    },
    {
      title: "Generative AI for Beginners",
      description: "Learning resource for AI",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/generative-ai-for-beginners",
    },
  ];

  const projects6 = [
    {
      title: "WhatsApp Hacking",
      description: "WhatsApp security research",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/WhatsAppHacking",
    },
    {
      title: "Electron POS App",
      description: "POS system with Electron",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/electron-pos-app",
    },
    {
      title: "Electro Estelar API",
      description: "API for Electro Estelar",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/electroestelar-api",
    },
    {
      title: "Electro Estelar",
      description: "E-commerce platform",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/electroestelar",
    },
    {
      title: "Conteo Technical Test",
      description: "Technical test project",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/conteotechnicaltest",
    },
    {
      title: "Tienda Colombia Digital",
      description: "Digital store platform",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/tienda-colombia-digital",
    },
  ];

  const projects7 = [
    {
      title: "SST",
      description: "Safety and health at work",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/SST",
    },
    {
      title: "Video Presentation Mom",
      description: "Video presentation project",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/Video-Presentation-Mom",
    },
    {
      title: "Metodologías para Análisis de Datos",
      description: "Data analysis methodologies",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/Metodolog-as-para-el-An-lisis-de-Datos",
    },
    {
      title: "Folleto",
      description: "Brochure project",
      imgUrl: placeholderImg,
      url: "https://github.com/aldair1630/Folleto-",
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
                      <Nav.Item>
                        <Nav.Link eventKey="sixth">Security & Network</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="seventh">Learning & Other</Nav.Link>
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
                      <Tab.Pane eventKey="sixth">
                        <Row>
                          {projects6.map((project, index) => {
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
                      <Tab.Pane eventKey="seventh">
                        <Row>
                          {projects7.map((project, index) => {
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
