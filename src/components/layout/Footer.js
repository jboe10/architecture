import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<footer>
			<div className="footer-wrap">
				<div className="footer-sub">
					<h4>Contact</h4>
					<ul>
						<li>Jonathan Boe</li>
						<li>Email me for inquiries!</li>
						<li>@jdboe2018@gmail.com</li>
					</ul>
				</div>
				<div className="footer-sub">
					<div className="footer-socialss">
						<h4>Socials</h4>
						<a href="https://www.linkedin.com/in/jonathan-d-boe/">
							<FontAwesomeIcon icon={faLinkedin} />
							Linked In
						</a>
						<a href="https://github.com/jboe10">
							<FontAwesomeIcon icon={faGithub} />
							Git Hub
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
