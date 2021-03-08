import React, { Component } from 'react'
import logoRegular from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';
import Navigation from '../modules/Navigation';
import HeaderMobile from './HeaderMobile';

const white = "white";
const whiteHeader = "white-header";
const blackHeader = "black-header"
const hsu = "header-scroll-up";
const hsd = "header-scroll-down";
const hsbBlack = "header-space-bar-black";
const hsbWhite = "header-space-bar-white";

export default class HeaderC extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      headerClass: "",
      headerSpaceBarClass: "",
    }
    this.headerEle = React.createRef();
  }

  componentDidMount() {
    const scrollUpClassName = (this.props.color === white)? `${whiteHeader} ${hsu}`: `${blackHeader} ${hsu}`;
    const scrollDownClassName = (this.props.color === white)? `${whiteHeader} ${hsd}`: `${blackHeader} ${hsd}`
    const headerSpaceBarClassName = (this.props.color === white)? `${hsbWhite}` : `${hsbBlack}`;

    let lastScrollPosition = window.pageYOffset;
    this.headerOpacityDeterminer = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > lastScrollPosition) {
        if (this.state.headerClass !== scrollDownClassName) {
          this.setState({headerClass: scrollDownClassName});
        }
      } else {
        if (this.headerEle !== null && this.state.headerClass !== scrollUpClassName) {
          this.setState({headerClass: scrollUpClassName});
        }
      }
      lastScrollPosition = currentPosition;
    }
    
    window.addEventListener("scroll", this.headerOpacityDeterminer)
    this.setState({
      headerClass: scrollUpClassName,
      headerSpaceBarClass: headerSpaceBarClassName
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerOpacityDeterminer)
  }

  
  render() {
    return (
      <>
        <header ref={this.headerEle} className={this.state.headerClass}>
          <img src={(this.props.color === white)? logoWhite : logoRegular} width="100px" height="100px" alt="logo-header"/>
          <Navigation
            headerColor={this.props.color}
          />
        </header>
        <div className={this.state.headerSpaceBarClass}/>
        <HeaderMobile/>
        {/* <HeaderMobileC/> */}
    </>
    )
  }
}
