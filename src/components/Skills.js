import { Container, Row, Col } from "react-bootstrap";
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
  const labelAbbr = (label) =>
    (label || "")
      .split(/[^A-Za-z0-9]+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  const slugMap = {
    Vite: "vite",
    Firebase: "firebase",
    AWS: "amazonaws",
    Android: "android",
    "React Native": "react",
    Electron: "electron",
    "Auth0": "auth0",
    Jest: "jest",
    jQuery: "jquery",
    JSON: "json",
    JWT: "jsonwebtokens",
    Kotlin: "kotlin",
    Flutter: "flutter",
    Linux: "linux",
    MariaDB: "mariadb",
    "Material UI": "mui",
    Azure: "microsoftazure",
    npm: "npm",
    Postman: "postman",
    Prisma: "prisma",
    RapidAPI: "rapidapi",
    "REST API": "swagger",
    Sequelize: "sequelize",
    SQLite: "sqlite",
    SQL: "microsoftsqlserver",
    Stripe: "stripe",
    "Styled Components": "styledcomponents",
  };
  const brandColor = {
    AWS: "FF9900",
    Azure: "0078D4",
    RapidAPI: "0099FF",
    SQL: "CC2927",
    Linux: "FFFFFF",
    SQLite: "4F9DBD",
  };
  const fallbackIconUrlFor = (label) => {
    if (label === "AWS")
      return "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg";
    if (label === "Azure")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg";
    if (label === "RapidAPI")
      return "https://www.vectorlogo.zone/logos/rapidapi/rapidapi-icon.svg";
    if (label === "SQL")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg";
    return null;
  };
  const iconUrlFor = (label) => {
    if (label === "AWS") return fallbackIconUrlFor(label);
    const slug = slugMap[label];
    if (!slug) return fallbackIconUrlFor(label);
    const color = brandColor[label];
    return color
      ? `https://cdn.simpleicons.org/${slug}/${color}`
      : `https://cdn.simpleicons.org/${slug}`;
  };
  const skills = [
    { img: html, label: "HTML" },
    { img: css, label: "CSS" },
    { img: javascript, label: "JavaScript" },
    { img: react, label: "React" },
    { img: nextjs, label: "NextJS" },
    { img: redux, label: "Redux" },
    { img: nodejs, label: "ExpressJS" },
    { img: mysql, label: "MySQL" },
    { img: postgresql, label: "PostgreSQL" },
    { img: mongodb, label: "MongoDB" },
    { img: php, label: "PHP" },
    { img: wordpress, label: "WordPress" },
    { img: bootstrap, label: "Bootstrap" },
    { img: tailwind, label: "Tailwind CSS" },
    { img: java, label: "Java" },
    { img: python, label: "Python" },
    { img: csharp, label: "C Sharp" },
    { img: git, label: "Git" },
    { img: github, label: "GitHub" },
    { img: null, label: "Vite" },
    { img: null, label: "Firebase" },
    { img: null, label: "AWS" },
    { img: null, label: "Android" },
    { img: null, label: "React Native" },
    { img: null, label: "Electron" },
    { img: null, label: "Auth.js" },
    { img: null, label: "Auth0" },
    { img: null, label: "Jest" },
    { img: null, label: "jQuery" },
    { img: null, label: "JSON" },
    { img: null, label: "JWT" },
    { img: null, label: "Kotlin" },
    { img: null, label: "Flutter" },
    { img: null, label: "Linux" },
    { img: null, label: "MariaDB" },
    { img: null, label: "Material UI" },
    { img: null, label: "Azure" },
    { img: null, label: "npm" },
    { img: null, label: "Postman" },
    { img: null, label: "Prisma" },
    { img: null, label: "RapidAPI" },
    { img: null, label: "REST API" },
    { img: null, label: "Sequelize" },
    { img: null, label: "SQLite" },
    { img: null, label: "SQL" },
    { img: null, label: "Stripe" },
    { img: null, label: "Styled Components" },
  ];

  const skillsLoop = [...skills, ...skills];

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
              <div className="skills-marquee" aria-label="Carrusel continuo de habilidades">
                <div className="skills-track">
                  {skillsLoop.map((s, idx) => (
                    <div className={`item${s.img ? "" : " no-logo"}`} key={idx}>
                      {s.img ? (
                        <img src={s.img} alt={`${s.label} logo`} loading="lazy" />
                      ) : iconUrlFor(s.label) ? (
                        <img
                          src={iconUrlFor(s.label)}
                          alt={`${s.label} logo`}
                          loading="lazy"
                          onError={(e) => {
                            const f = fallbackIconUrlFor(s.label);
                            if (f && e.currentTarget.src !== f) {
                              e.currentTarget.src = f;
                            }
                          }}
                        />
                      ) : (
                        <span className="no-logo-badge">{labelAbbr(s.label)}</span>
                      )}
                      <h5>{s.label}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Decorative background"
      />
    </section>
  );
};
