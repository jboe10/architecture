import React, { Component } from 'react';
import logoRegular from '../../images/logo.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const d_block = "display-block";
const d_none = "display-none";
const d_flex = "display-flex";
const navMobileMenu = "nav-mobile-menu";

export default class HeaderMobileC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ff: ["FF"],
      hamburgerClass: d_block,
      xClass: d_none,
      mobileMenuClass: navMobileMenu
    };
  }

  hamburgerClickHandle = () => {
    if (this.state.hamburgerClass === d_block) {
      this.setState({
        hamburgerClass: d_none,
        xClass: d_block,
        mobileMenuClass: `${navMobileMenu} ${d_flex}`
      })
    } else {
      this.setState({
        hamburgerClass: d_block,
        xClass: d_none,
        mobileMenuClass: `${navMobileMenu} ${d_none}`
      })
    }
  }

  render() {
    return (
      <>
        <header className="header-mobile">
          <div className="header-mobile-wrap">
            <img src={logoRegular} alt="logo-regular"/>
            <div 
              className="nav-mobile-icon"
              onClick={this.hamburgerClickHandle}>
              <FontAwesomeIcon className={this.state.hamburgerClass} icon={faBars}/>
              <FontAwesomeIcon className={this.state.xClass} icon={faTimes}/>
            </div>
          </div>
        </header>
        <div className={this.state.mobileMenuClass}>
          <h2>About UsC</h2>
          <h2>ProjectsC</h2>
          <h2>NewsC</h2>
          <h2>SubmitC</h2>
        </div>
      </>
    )
  }
}
