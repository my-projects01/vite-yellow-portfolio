// import React from 'react'
import { name } from "../details";
import "../styles/NavBar.css";
import { ActivePage } from "../types/Other";

interface NavBarProps {
  display: ActivePage;
  setDisplay: (value: ActivePage) => void;
}

const NavBar = ({display, setDisplay }: NavBarProps) => {
  const className = `${display !== 'home' ? 'navListText' : ''}`

  return (
    <header className="header-container">
      <div className="nav-name">{name}</div>
      <div className="menuIcon"><strong></strong></div>
      <nav>
        <ul>
          <li><a className={className} onClick={() => { setDisplay('home') }}>Home</a></li>
          <li><a className={className} onClick={() => { setDisplay('about') }}>About</a></li>
          <li><a className={className} onClick={() => { setDisplay('projects') }}>Projects</a></li>
          <li><a className={className} onClick={() => { setDisplay('contact') }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
