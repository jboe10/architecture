import React from 'react';
import NavItem from './NavItem';

export default function Navigation(props) {

  return (
    <>
      <nav className="nav-web">
        <NavItem link="/projects" name="Projects" headerColor={props.headerColor} />
        <NavItem link="/contact" name="Contact" headerColor={props.headerColor} />
      </nav>
    </>
  )
}
