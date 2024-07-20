import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";


const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="RESOURCES" title="Browse Our Resources " />
          <div className="content grid3">
            {online.map((course) => (
              <Link to={`/online/${course.courseName}`} key={course.courseName}>
                {/* Provide a unique 'key' prop for each Link */}
                <br></br>
                <div className="box">
                  <div className="img">
                    <img src={course.cover} alt={course.courseName} />
                    <img src={course.hoverCover} alt="" className="show" />
                  </div>
                  <h1 >{course.courseName}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;