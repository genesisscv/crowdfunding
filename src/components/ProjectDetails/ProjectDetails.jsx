import React from "react";
import "./ProjectDetails.css";

export default function ProjectDetails(props) {
  const { projectData } = props;
  return (
    <div className="details-container">
      <h2 id="main-title">{projectData.title}</h2>
      <img id="details-image" src={projectData.image} alt="project" />

      <h3>{projectData.description}</h3>
      {/* <h3>Created at: {projectData.date_created}</h3> */}
    </div>
  );
}
