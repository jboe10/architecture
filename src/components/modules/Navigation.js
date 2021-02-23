import React from 'react';
import NavItem from './NavItem';

export default function Navigation(props) {

  return (
    <>
      <nav className="nav-web">
        <NavItem link="/about" name="About us" headerColor={props.headerColor} />
        <NavItem link="/projects" name="Projects" headerColor={props.headerColor} />
        <NavItem link="/news" name="News" headerColor={props.headerColor} />
        <NavItem link="/submit" name="Submit" headerColor={props.headerColor} />
      </nav>
    </>
  )
}
