import "./App.css";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Dashboard from "./views/Dashboard";
const App = () => {
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
      </div>
    </>
  );
};

export default App;
