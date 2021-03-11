import React from 'react'

export default function ProjectPageProject(props) {
  return (
    <a href={`projects/${props.number}`}>
      <div className="project-page-project">
        <img className="project-pic" src={props.image} alt="project"/>
          <h3>{props.name}</h3>
          <p>{props.tech}</p>
      </div>
    </a>
  )
}
