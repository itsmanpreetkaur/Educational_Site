import "./App.css";
import Header from "./components/common/header/Header"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About"; 
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import SignUp from "./components/signup/signup"
import CourseHome from "./components/allcourses/CourseHome"
function App() {
  return (
    <>
         <Router>
            <Header />
            <Routes>
              <Route exact path='/home' element = {< Home />} />
              <Route exact path='/about' element = {< About />} />
              <Route exact path='/contact' element = {< Contact />} />
              <Route exact path='/resources' element = {< CourseHome />} />
              <Route exact path='/signup' element = {< SignUp />} />
            </Routes>
            <Footer />
         </Router>
        
        
    </>
  )
}

export default App