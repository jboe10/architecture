import React, { useState }  from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import surfline from '../../images/surflineSmall.png';
import cuberto from '../../images/cuberto.png';
import cultish from '../../images/cultishSmall.png';
import bloodMoon from '../../images/bloodMoon.jpg'
import Alert from 'react-bootstrap/Alert'
import ProjectPageProject from '../modules/ProjectPage/ProjectPageProject';


export default function ProjectPage() {
  const [ showAlert, setShowAlert ] = useState(true);

  return (
    <>
      <Header/>
      <Alert style={{ textAlign: 'center'}} show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
        These Apps are hosted for free and make take some time to load.
      </Alert>
      <div className="project-page">
        <div className="project-page-wrap">
          <h1>Projects</h1>
          <div className="project-page-projects">
            <ProjectPageProject
             image={bloodMoon}
             name="Blood Moon Tie Dye"
             tech="React, SASS, Heroku, HTML5, JavaScript, Figma"
             address="https://gitwindows.herokuapp.com/"
           />
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
              image={cultish}
              name="Cultish"
              tech="React, SASS, Heroku, HTML5, NodeJs"
              address="#"
            />
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}
