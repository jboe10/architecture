import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../modules/Navigation';

export default function Header() {
  return (
    <header>
      <img src={logo} width="100px" height="100px" alt="logo-header"/>
      <Navigation/>
    </header>
  )
}
