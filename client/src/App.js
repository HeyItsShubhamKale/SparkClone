import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Contact />
    </div>
  );
};

export default App;
