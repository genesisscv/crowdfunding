import React from "react";
import "./ProjectDetails.css";

export default function ProjectDetails(props) {
  const { projectData } = props;
  return (
        <div className="details-container">
      <img src={projectData.image} alt="project" />
      <h2>{projectData.title}</h2>
      <h3>Created at: {projectData.date_created}</h3>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
