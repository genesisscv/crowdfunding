import React, { useState, useEffect } from "react";
// import { allProjects } from "../data"; Use this if you want to test dummy data
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Banner from "../components/Banner/Banner"
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
        },[]);

    return (
        <div>
            <Banner />
            <div id= "project-list">
            {projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
            })}
            </div>
        </div>
    
    );
    
    
}

export default HomePage;