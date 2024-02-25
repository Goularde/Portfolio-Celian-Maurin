import { useContext } from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { ProjectContext } from "../hook/useProject";

function Home() {
  const { projects } = useContext(ProjectContext);

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
