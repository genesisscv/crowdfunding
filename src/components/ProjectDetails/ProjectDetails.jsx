import React from "react";
import "./ProjectDetails.css";

export default function ProjectDetails(props) {
  const { projectData } = props;
  return (
    <div className="details-container">
      <img src={projectData.image} alt="project" />
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
    </div>
  );
}
