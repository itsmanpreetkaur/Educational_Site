import React from "react";
import { useParams } from "react-router-dom";
import { online } from "../../dummydata";
import Back from "../common/back/Back";
import "./CourseDetails.css";
const CourseDetails = () => {
  const { courseName } = useParams();
// Find the course based on the courseName
  const course = online.find((c) => c.courseName === courseName);
  if (!course) {
    return <div>Course not found.</div>;
  }
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };
  return (
    <>
      <Back title ="Course Details" />
     <section className="course">
     <h1>{course.courseName}</h1>
      <div className="container4">   
      <div className="box5">
      <a
          href={course.InterviewQuestions}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
        Interview Questions
        </a>
      </div>

      <div className="box6">
      <a
          href={course.SubjectNotes}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Subject Notes
        </a>
      </div>
      <div className="box7"> <a
          href={course.VideoLectures}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Video Lectures
        </a></div>
    </div>
     </section>
    </>
    
  );
};

export default CourseDetails;