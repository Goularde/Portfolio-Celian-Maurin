import "./App.css";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Route } from "wouter";
import Dashboard from "./views/Dashboard";
const App = () => {
  return (
    <>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </>
  );
};

export default App;
