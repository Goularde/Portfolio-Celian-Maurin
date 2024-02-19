import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectType } from "../types/ProjectType";
// import EditableProjectCard from "../components/EditableProjectCard";
import HoverableProjectCard from "../components/HoverableProjectCard";

const Dashboard = () => {
  const [projects, setProjects] = useState<ProjectType[]>();
  // const [selectedProject, setSelectedProject] = useState<ProjectType[]>();
  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then(function (response) {
        setProjects(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {projects &&
        projects.map((project, index) => {
          return <HoverableProjectCard key={index} project={project} />;
        })}
    </>
  );
};
export default Dashboard;
