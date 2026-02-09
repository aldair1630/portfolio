import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../images/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "UI/UX Designer",
    "Frontend Web Developer",
    "Backend Web Developer",
    "Full Stack Web Developer",
  ];
  const [text, setText] = useState("");
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200); // Reducir este valor para hacer que el texto se agregue más rápido
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Aldair `}
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Junior Web Developer", "Junior Web Designer", "Junior UI/UX Designer", " Junior Full Stack Web Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a developer with experience building web projects using
                    React, Redux, Express and PostgreSQL. I have worked on
                    several successful self-made projects, my skills in React
                    and Redux allow me to create dynamic and efficient user
                    interfaces, while my experience in Express and PostgreSQL
                    allow me to create strong and secure back-end solutions. I
                    also have skills in state management, routing and user
                    authentication in web applications. I can implement high
                    quality solutions in the frontend and backend, generating a
                    complete user experience, oriented to details and focused on
                    results. I am committed to excellence in programming and am
                    always looking to improve and learn new technologies.
                  </p>
                  <button
                    onClick={() =>
                      // (window.location.href = "mailto:djaldair14@gmail.com")
                      (window.location.href = "https://wa.me/+573128531245")
                    }
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
