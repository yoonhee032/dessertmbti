import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import RouterChangeTracker from "./component/RouterChangeTracker";
import "./App.css";

function App() {
  
  return (
    <>
      <RouterChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
