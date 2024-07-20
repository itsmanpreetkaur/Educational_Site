import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import SignUp from "./components/signup/signup";
import Login from "./components/signup/login";

import CourseHome from "./components/allcourses/CourseHome";
import Notfound from "./components/home/Notfound";
import CourseDetails from "./components/allcourses/CourseDetails";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resources" element={<CourseHome />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/online/:courseName" element={<CourseDetails />} />
        
          
        </Routes>
        
      </Router>
    </>
  );
}

export default App;