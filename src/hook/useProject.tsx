import { PropsWithChildren, createContext, useState } from "react";
import { ProjectContextType } from "../types/ProjectContextType";
import axios from "axios";

export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  getProjects: () => {},
});

export const ProjectContextProvider = ({ children }: PropsWithChildren) => {
  const [projects, setProjects] = useState<ProjectContextType["projects"]>([]);

  const getProjects = () => {
    axios
      .get(`http://localhost:5000/projects`)
      .then(function (response) {
        setProjects(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ProjectContext.Provider value={{ projects, getProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
