import React from 'react';
import RecentProjectItem from './RecentProjectItem';
import img from '../../../images/projectImage1.jpeg';

export default function RecentProjectSection() {
  return (
    <section className="recent-projects">
      <div className="recent-projects-wrap">
        <h3>Recent projects</h3>
        <div className="project-col-1">
          <RecentProjectItem
            image={img}
            designer="Deichman Bjorvika"
            category="Office"
          />
          <RecentProjectItem
            image={img}
            designer="Deichman Bjorvika"
            category="Office"
          />
        </div>
        <div className="project-col-2">
          <RecentProjectItem
            image={img}
            designer="Deichman Bjorvika"
            category="Office"
          />
            <RecentProjectItem
            image={img}
            designer="Deichman Bjorvika"
            category="Office"
          />
        </div>
      </div>
    </section>
  )
}
