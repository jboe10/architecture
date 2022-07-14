import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ContactPageBanner() {
	return (
		<section className="contact-page-banner-wrap">
			<a href="/projects">
				<div className="contact-page-banner">
					<div className="contact-page-arrow-link">
						<p>
							Take a look at the rest of my Projects
							<FontAwesomeIcon icon={faArrowRight} />
						</p>
					</div>
				</div>
			</a>
		</section>
	);
}
