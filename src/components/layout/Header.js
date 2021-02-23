import React , { useEffect, useRef, useState }from 'react';
import logoRegular from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';
import Navigation from '../modules/Navigation';

const white = "white";
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
        }
      } else {
        if (headerEle !== null && headerClass !== scrollUpClassName) {
          setHeaderClass(scrollUpClassName);
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
        <img src={(props.color === white)? logoWhite : logoRegular} width="100px" height="100px" alt="logo-header"/>
        <Navigation
          headerColor={props.color}
        />
      </header>
      <div className={headerSpaceBarClass}/>
    </>
  )
}
