import React, { useState } from 'react'

export default function NavItem(props) {
  const [hoverBar, setHoverBar] = useState("nav-item-hover");

  return (
    <a 
      href={props.link} 
      onMouseEnter={() => setHoverBar(`nav-item-hover on-enter`)} 
      onMouseLeave={() => setHoverBar(`nav-item-hover on-exit`)}>
      <div className="nav-item-hover-wrap">
        <div className={hoverBar}/>
      </div>
      <div className="text">
        {props.name}
      </div>
    </a>
  )
}
