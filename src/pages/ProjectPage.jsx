import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import UserDetail from "../components/UserDetail/UserDetail";
// import PledgeForm from "../components/PledgeForm/PledgeForm";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  // loading state starts

  if (!projectData) {
    return <h3>Loading project ...</h3>;
  }

  // loading state ends

  return (
    <div>
      <ProjectDetails projectData={projectData} />

      {/* <div>
        
        <ul>
          {projectData.pledges.map((pledgeData, key) => {
            return (
              <li>
                ${pledgeData.amount} from {pledgeData.supporter}
              </li>
            );
          })}
        </ul>
      </div>  */}
      {/* <PledgeForm projectId={id} /> */}
      <div id="text-box">
        <p> Description: {projectData.description}</p>
        <p>
          Pledges: No pledges have been submitted, be the first one to
          contribute!
        </p>
        {/* <h3>Created at: {projectData.date_created}</h3> */}
      </div>
      <p id="project-owner">
        Project owner:<br></br>
        <UserDetail userId={projectData.owner} />
      </p>
    </div>
  );
}
export default ProjectPage;
