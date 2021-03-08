import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import image from '../../images/projectImage1.jpeg';
import ProjectPageProject from '../modules/ProjectPage/ProjectPageProject';


export default function ProjectPage() {
  return (
    <div className="project-page">
      <Header/>
      <div className="project-page-projects">
        <ProjectPageProject
          image={image}
          name="Project One"
          tech="React, SASS, Heroku, HTML5, NodeJs"
          number="1"
        />
        <ProjectPageProject
          image={image}
          name="Project One"
          tech="React, SASS, Heroku, HTML5, NodeJs"
          number="2"
        />
        <ProjectPageProject
          image={image}
          name="Project One"
          tech="React, SASS, Heroku, HTML5, NodeJs"
          number="3"
        />
      </div>
      <Footer/>
    </div>
  )
}
