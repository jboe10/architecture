import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NavItem from './NavItem'

export default function Navigation() {
  return (
    <>
    <nav className="nav-web">
      <NavItem link="/about" name="About us" />
      <NavItem link="/projects" name="Projects" />
      <NavItem link="/news" name="News" />
      <NavItem link="/contact" name="Contact" />
    </nav>
    <nav className="nav-mobile">
      <FontAwesomeIcon icon={faBars}/>
    </nav>
  </>
  )
}
