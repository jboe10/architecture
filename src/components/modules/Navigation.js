import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavItem from './NavItem'

const navWhite = "nav-mobile mobile-white"
const navBlack = "nav-mobile mobile-black"
const white = "white";
export default function Navigation(props) {

  const mobileNavClass = (props.headerColor === white)? navBlack : navWhite; 

  return (
    <>
    <nav className="nav-web">
      <NavItem link="/about" name="About us" headerColor={props.headerColor} />
      <NavItem link="/projects" name="Projects" headerColor={props.headerColor} />
      <NavItem link="/news" name="News" headerColor={props.headerColor} />
      <NavItem link="/submit" name="Submit" headerColor={props.headerColor} />
    </nav>
    <nav className={mobileNavClass}>
      <FontAwesomeIcon icon={faBars}/>
    </nav>
  </>
  )
}
