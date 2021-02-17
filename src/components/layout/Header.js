import React , { useEffect, useRef, useState }from 'react';
import logo from '../../images/logo.png';
import Navigation from '../modules/Navigation';


export default function Header() {
  const scrollUpClassName = "header-scroll-up";
  const scrollDownClassName = "header-scroll-down";
  const headerEle = useRef(null);
  const [ headerClass, setHeaderClass ] = useState("");
  
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
  }, [headerEle, headerClass])


  return (
    <header ref={headerEle} className={headerClass}>
      <img src={logo} width="100px" height="100px" alt="logo-header"/>
      <Navigation/>
    </header>
  )
}
