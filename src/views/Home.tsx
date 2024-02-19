import { useEffect, useState } from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import { ProjectType } from "../types/ProjectType";

function Home() {
  const [projects, setProjects] = useState<ProjectType[]>();
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
          return <ProjectCard key={index} project={project} />;
        })}
    </>
  );
}

export default Home;
