// import { allProjects } from "../data"; Use this if you want to test dummy data
import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Banner from "../components/Banner/Banner";

function HomePage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  if (!projectList) return <p>Loading projects...</p>;

  return (
    <div>
      <Banner />
      <div>
        <p id="home-main-title">Explore all the projects</p>
      </div>
      <div id="project-list">
        {projectList.map((projectData, key) => {
          return <ProjectCard key={key} projectData={projectData} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
