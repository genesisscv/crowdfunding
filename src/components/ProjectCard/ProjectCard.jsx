import React from "react";
// import { Link } from "react-router-dom";
import "./ProjectCard.css";
function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div className="project-card">
      {/* <Link to={`/project/${projectData.id}`}> */}
      <img src={projectData.image} />
      {/* </Link> */}
      <p id="main-title">{projectData.title}</p>
      <div id="details-text">
        <p> Description: {projectData.description}</p>
        <p>
          Pledges: No pledges have been submitted, be the first one to
          contribute!
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
