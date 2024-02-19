import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectType } from "../types/ProjectType";
import EditableProjectCard from "../components/EditableProjectCard";

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
    <div className="flex flex-wrap bg-slate-900 justify-center align-center gap-5 p-5">
      {projects &&
        projects.map((project, index) => {
          return <EditableProjectCard key={index} project={project} />;
        })}
    </div>
  );
};
export default Dashboard;
