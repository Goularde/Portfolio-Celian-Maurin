import { useContext } from "react";
// import EditableProjectCard from "../components/EditableProjectCard";
import HoverableProjectCard from "../components/HoverableProjectCard";
import { ProjectContext } from "../hook/useProject";

const Dashboard = () => {
  const { projects } = useContext(ProjectContext);

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
