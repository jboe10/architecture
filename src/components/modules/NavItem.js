import React, { useRef, useState } from 'react'

export default function NavItem(props) {

  const navItem = useRef(null);
  const navItemHoverBar = useRef(null);
  const [hoverBar, setHoverBar] = useState("nav-item-hover");

  const enterNavItem = () => {
    if (navItemHoverBar.current !== null) {
      setHoverBar(`nav-item-hover on-enter`);
    }
  }
  const exitNavItem = () => {
    if (navItemHoverBar.current !== null) {
      setHoverBar(`nav-item-hover on-exit`);
    }
  }

  return (
    <a href={props.link} ref={navItem} onMouseEnter={enterNavItem} onMouseLeave={exitNavItem}>
      <div className="nav-item-hover-wrap">
        <div className={hoverBar} ref={navItemHoverBar}/>
      </div>
      <div className="text">
        {props.name}
      </div>
    </a>
  )
}
