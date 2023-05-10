import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">      
        <Link to={`/projects/${project.id}`}>
        <img src={imgUrl} alt={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </Link>
      </div>
    </Col>
  );
};



  // <img src={project.imgUrl} alt={project.title} />
  // <h3>{project.title}</h3>
