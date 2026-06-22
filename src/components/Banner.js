import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../images/img/header-img.svg";
import colorSharp2 from "../images/img/color-sharp2.png"; // Asumiendo que esta imagen también se importa
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = ({ data }) => {
  // Destructure props, provide defaults
  const { texts, paragraphs } = data || {
    texts: ["Web Developer", "Full Stack Developer", "UI/UX Designer"],
    paragraphs:
      "I am a software developer passionate about creating innovative and efficient web applications. With experience in modern technologies like React, Node.js, and databases, I focus on delivering high-quality solutions that exceed expectations.",
  };
  const toRotate = texts || []; // Default to empty array if texts is not provided

  // State for cycling through words
  const [loopNum, setLoopNum] = useState(0);
  // State to track if we are currently deleting text
  const [isDeleting, setIsDeleting] = useState(false);
  // State for the current text being displayed
  const [text, setText] = useState("");
  // Define animation speeds
  const typingSpeed = 150; // ms per character
  const deletingSpeed = 70; // ms per character
  const pauseBetweenWords = 1000; // ms pause after word is fully typed or deleted

  // State to manage the time delay for the next animation frame
  // This delta is updated based on typing/deleting speeds and pauses
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Initial delta

  // useEffect hook to manage the typewriter effect interval
  useEffect(() => {
    // Ensure toRotate has content to avoid errors
    if (toRotate.length === 0) return;

    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup function to clear the interval on component unmount or when dependencies change
    return () => clearInterval(ticker);
  }, [delta, text, isDeleting, loopNum, toRotate]); // Dependencies for the effect. 'delta' changes trigger re-renders.

  // The 'tick' function handles the logic for typing and deleting text.
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    if (!isDeleting) {
      // Typing phase
      let updatedText = fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (updatedText === fullText) {
        // Word fully typed, pause then start deleting
        setIsDeleting(true);
        setDelta(pauseBetweenWords); // Set pause duration
      } else {
        setDelta(typingSpeed); // Set typing duration
      }
    } else {
      // Deleting phase
      if (text === "") {
        // Deletion complete, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500); // Pause before typing next word
      } else {
        // Continue deleting
        let updatedText = fullText.substring(0, text.length - 1);
        setText(updatedText);
        setDelta(deletingSpeed); // Set deleting duration
      }
    }
  };

  // The component must return JSX
  return (
    <section className="banner" id="home">
      <style>
        {`
          .txt-rotate .wrap {
            border-right: 2px solid #fff;
            padding-right: 5px;
          }
        `}
      </style>
      <Container>
        <Row className="align-items-center">
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
                    Hi! I'm Aldair{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>{paragraphs}</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/+573243630818",
                        "_blank",
                        "noopener,noreferrer",
                      )
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt={colorSharp2}
      ></img>
    </section>
  );
};

export default Banner;
