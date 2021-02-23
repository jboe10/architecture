import React, { useState } from 'react';
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
    <>
      <header className="header-mobile">
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
        <h2>About Us</h2>
        <h2>Projects</h2>
        <h2>News</h2>
        <h2>Submit</h2>
      </div>
    </>
  )
}
