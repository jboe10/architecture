import React from 'react';
import RecentProjectItem from './RecentProjectItem';
import surfline from '../../../images/surflineSmall.png';
import cuberto from '../../../images/cubertoLarg.jpg';

export default function RecentProjectSection() {
	return (
		<section className="recent-projects">
			<div className="recent-projects-wrap">
				<div className="proj-item">
					<h3>
						<a href="/projects">
							Recent <span>Projects</span>
						</a>
					</h3>
				</div>
				<div className="project-col-1">
					<RecentProjectItem
						image={surfline}
						category="Surfline"
						designer="Front/Back/DevOps"
					/>
				</div>
				<div className="project-col-2">
					<RecentProjectItem
						image={cuberto}
						category="Cuberto"
						designer="Front/DevOps"
					/>
				</div>
			</div>
		</section>
	);
}
