import React from 'react'

export default function RecentProjectItem(props) {
  return (
    <div 
      style={{"backgroundImage": `url(${props.image})`}} 
      className="recent-project-item">
      <div className="designer-info-wrap">
        <div className="designer-info">
          <h5>{props.category}</h5>
          <h3>{props.designer}</h3>
        </div>
      </div>
    </div>
  )
}