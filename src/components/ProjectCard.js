import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

// <img src={project.imgUrl} alt={project.title} />
// <h3>{project.title}</h3>
