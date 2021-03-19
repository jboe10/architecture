import React from 'react'

export default function ProjectPageProject(props) {
  return (
    <div className="project-page-project-wrap">
      <a href={props.address}>
        <div className="project-page-project">
          <img className="project-pic" src={props.image} alt="project"/>
            <h3>{props.name}</h3>
            <p>{props.tech}</p>
        </div>
      </a>
    </div>
  )
}
