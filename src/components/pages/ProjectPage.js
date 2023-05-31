import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import alwaysClosed from '../../images/alwaysClosed.png';
import surfline from '../../images/surflineSmall.png';
import cuberto from '../../images/cuberto.png';
import bloodMoon from '../../images/bloodMoon.jpg';
import Alert from 'react-bootstrap/Alert';
import ProjectPageProject from '../modules/ProjectPage/ProjectPageProject';

const react = 'React';
const sass = 'SASS';
const heroku = 'Heroku';
const html = 'HTML5';
const javaScript = 'JavaScript';
const figma = 'Figma';
const node = 'Node.js';
const mg = 'Mongoose';
const mongo = 'MongoDB';

export default function ProjectPage() {
	const [showAlert, setShowAlert] = useState(true);

	return (
		<>
			<Header />
			<div className="project-page">
				<div className="project-page-wrap">
					<h1>Projects</h1>
					<div className="project-page-projects">
						<ProjectPageProject
							image={surfline}
							name="Surfline"
							tech={`${react}, ${sass}, ${heroku}, ${html}, ${node}, ${mongo}, ${mg}`}
							address="https://surfline.d1fv70iy7n1uma.amplifyapp.com/"
						/>
						<ProjectPageProject
							image={cuberto}
							name="Cuberto"
							tech={`${react}, ${sass}, ${heroku}, ${html}, ${javaScript}`}
							address="https://cuberto.d2fawjc4lewxq1.amplifyapp.com/"
						/>
						<ProjectPageProject
							image={bloodMoon}
							name="Blood Moon Tie Dye"
							tech={`${react}, ${sass}, ${heroku}, ${html}, ${javaScript}, ${figma}`}
							address="https://tie-dye.dr4lt3230agyr.amplifyapp.com/"
						/>
						<ProjectPageProject
							image={alwaysClosed}
							name="Always Closed Tattoo Parlor"
							tech={`${react}, ${sass}, ${heroku}, ${html}, ${javaScript} ${figma}`}
							address="https://always-closed.d1yae4t6md8dqg.amplifyapp.com/"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
