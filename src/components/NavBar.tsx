// import React from 'react'
import { name } from "../details";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header className="header-container">
        <div className="nav-name">{name}</div>
        <div className="menuIcon"><strong></strong></div>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar
