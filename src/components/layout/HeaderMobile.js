import React, { useState, useEffect, useRef } from 'react';
import logoRegular from '../../images/logo.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const d_block = "display-block";
const d_none = "display-none";
const d_flex = "display-flex";
const navMobileMenu = "nav-mobile-menu";

export default function HeaderMobile() {

  const [ hamburgerClass, setHamburgerClass ] = useState(d_block);
  const [ xClass, setXClass ] = useState(d_none)
  const [ mobileMenuClass, setMobileMenuClass ] = useState(navMobileMenu);
  const mobileHeaderElement = useRef(null);

  const hamburgerClickHandle = () => {
    if (hamburgerClass === d_block) {
      setHamburgerClass(d_none)
      setXClass(d_block)
      setMobileMenuClass(`${navMobileMenu} ${d_flex}`);
    } else {
      setHamburgerClass(d_block)
      setXClass(d_none)
      setMobileMenuClass(`${navMobileMenu} ${d_none}`);
    }
  }

  return (
    <div className="header-nav-mobile">
      <header className="header-mobile" ref={mobileHeaderElement}>
        <div className="header-mobile-wrap">
          <img src={logoRegular} alt="logo-regular"/>
          <div 
            className="nav-mobile-icon"
            onClick={hamburgerClickHandle}>
            <FontAwesomeIcon className={hamburgerClass} icon={faBars}/>
            <FontAwesomeIcon className={xClass} icon={faTimes}/>
          </div>
        </div>
      </header>
      <div className={mobileMenuClass}>
        <a href="/projects">
          <h2>Projects</h2>
        </a>
        <a href="/games">
          <h2>Games</h2>
        </a>
        <a href="/contact">
          <h2>Contact</h2>
        </a>
      </div>
    </div>
  )
}
