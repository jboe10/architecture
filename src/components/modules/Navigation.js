import React from 'react'
import NavItem from './NavItem'

export default function Navigation() {
  return (
    <nav>
      <NavItem link="/about" name="About us" />
      <NavItem link="/projects" name="Projects" />
      <NavItem link="/news" name="News" />
      <NavItem link="/contact" name="Contact" />
    </nav>
  )
}
