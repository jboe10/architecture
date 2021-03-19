import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import surfline from '../../images/surflineSmall.png';
import cuberto from '../../images/cuberto.png';
import cultish from '../../images/cultishSmall.png';
import git from '../../images/git.svg';

import ProjectPageProject from '../modules/ProjectPage/ProjectPageProject';


export default function ProjectPage() {
  return (
    <>
      <Header/>
      <div className="project-page">
        <div className="project-page-wrap">
          <h1>Projects</h1>
          <div className="project-page-projects">
            <ProjectPageProject
              image={surfline}
              name="Surfline"
              tech="React, SASS, Heroku, HTML5, NodeJs"
              address="https://stormy-thicket-96949.herokuapp.com/"
            />
            <ProjectPageProject
              image={cuberto}
              name="Cuberto"
              tech="React, SASS, Heroku, HTML5, NodeJs"
              address="https://cuberto11.herokuapp.com/"
            />
            <ProjectPageProject
              image={cultish}
              name="Cultish"
              tech="React, SASS, Heroku, HTML5, NodeJs"
              address="https://secret-river-01127.herokuapp.com/"
            />
            <ProjectPageProject
              image={git}
              name="Git For Windows Page"
              tech="React, SASS, Heroku, HTML5, NodeJs"
              address="https://gitwindows.herokuapp.com/"
            />
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}
