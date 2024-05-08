import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import HomePage from "./HomePage"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} /> 
      </Routes>
    </>
  );
};

export default App;
