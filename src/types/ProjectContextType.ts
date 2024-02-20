import { ProjectType } from "./ProjectType";

export type ProjectContextType = {
  projects: ProjectType[];
  getProjects: () => void;
};
