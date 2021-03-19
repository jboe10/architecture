import React , { useEffect, useRef, useState }from 'react';
import Navigation from '../modules/Navigation';
import HeaderMobile from './HeaderMobile';

const white = "white";
const black = "#262728";
const whiteHeader = "white-header";
const blackHeader = "black-header"
const hsu = "header-scroll-up";
const hsd = "header-scroll-down";
const hsbBlack = "header-space-bar-black";
const hsbWhite = "header-space-bar-white";

export default function Header(props) {
  const scrollUpClassName = (props.color === white)? `${whiteHeader} ${hsu}`: `${blackHeader} ${hsu}`;
  const scrollDownClassName = (props.color === white)? `${whiteHeader} ${hsd}`: `${blackHeader} ${hsd}`
  const headerSpaceBarClassName = (props.color === white)? `${hsbWhite}` : `${hsbBlack}`;
  const headerEle = useRef(null);
  const [ headerClass, setHeaderClass ] = useState("");
  const [ headerSpaceBarClass, setHeaderSpaceBarClass ] = useState("");
  
  // Fades in/out header based on scroll up/down
  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;
    const headerOpacityDeterminer = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > lastScrollPosition) {
        if (headerClass !== scrollDownClassName) {
          setHeaderClass(scrollDownClassName);
          console.log("scroll Down")
        }
      } else {
        if (headerEle !== null && headerClass !== scrollUpClassName) {
          setHeaderClass(scrollUpClassName);
          console.log("scroll up")
        }
      }
      lastScrollPosition = currentPosition;
    }
    
    window.addEventListener("scroll", headerOpacityDeterminer)
    
    return () => {
      window.removeEventListener("scroll",headerOpacityDeterminer);
    }
  }, [headerEle, headerClass, scrollUpClassName, scrollDownClassName])

  // Resets colors on mount!
  useEffect(() => {
    setHeaderClass(scrollUpClassName)
    setHeaderSpaceBarClass(headerSpaceBarClassName);
  }, [scrollUpClassName, headerSpaceBarClassName])
  
  return (
    <>
      <header ref={headerEle} className={headerClass}>
        <a href="/">
          <h1 style={{color: (props.color===white)? black : white}}>Portfolio</h1>
        </a>
        {/* <img src={(props.color === white)? logoWhite : logoRegular} width="100px" height="100px" alt="logo-header"/> */}
        <Navigation
          headerColor={props.color}
        />
      </header>
      <div className={headerSpaceBarClass}/>
      <HeaderMobile/>
    </>
  )
}
