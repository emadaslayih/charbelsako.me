import React from "react"

import ProjectList from "./ProjectList"
// import CourseList from './CourseList';
import SkillList from "./SkillList"
import Experience from "./Experience"
import BackgroundImage from "./BackgroundImage"

import image2 from "../images/image1.jpg"
import image3 from "../images/image2.jpg"
import styles from "./styles"

export default function Home() {
  return (
    <div style={styles.mainContent}>
      <BackgroundImage image={image3} />
      <Experience />
      <ProjectList />
      <BackgroundImage image={image2} />
      <SkillList />
      {/* <CourseList /> */}
    </div>
  )
}
