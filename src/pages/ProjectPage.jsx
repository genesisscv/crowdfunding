import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";


function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, []);
    return (
        <ProjectDetails projectData={projectData} />
    );
}
export default ProjectPage;