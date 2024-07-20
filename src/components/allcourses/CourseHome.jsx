import React from 'react'
import Back from "../common/back/Back"
import OnlineCourses from "./OnlineCourses"
import Footer from "../common/footer/Footer"
const CourseHome = () => {
  return (
    <>
      <Back title = "Explore Resources" />
      <OnlineCourses />
      <Footer />
    </>
  )
}

export default CourseHome
