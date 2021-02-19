import React, { useState, useEffect } from 'react'

const white = "white";
const textBlack = "text-black";
const textWhite = "text-white";
export default function NavItem(props) {
  const [hoverBar, setHoverBar] = useState("nav-item-hover");
  const textClass = (props.headerColor === white)? textBlack : textWhite;
  return (
    <a 
      href={props.link} 
      onMouseEnter={() => setHoverBar(`nav-item-hover on-enter`)} 
      onMouseLeave={() => setHoverBar(`nav-item-hover on-exit`)}>
      <div className="nav-item-hover-wrap">
        <div className={hoverBar}/>
      </div>
      <div className={textClass}>
        {props.name}
      </div>
    </a>
  )
}
