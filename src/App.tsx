import "./App.css";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Dashboard from "./views/Dashboard";
import { ProjectContext } from "./hook/useProject";
import { useContext, useEffect } from "react";
import EditableProjectCard from "./components/EditableProjectCard";

const App = () => {
  const { getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-wrap bg-slate-900 justify-center align-center gap-5 p-5">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/edit/:projectId">
          {(params) => <EditableProjectCard projectId={params.projectId} />}
        </Route>
      </div>
    </>
  );
};

export default App;
