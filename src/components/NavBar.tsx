import { name } from "../details";
import "../styles/NavBar.css";
import { ActivePage } from "../types/Other";
import DarkModeButton from "./DarkModeButton";

interface NavBarProps {
  display: ActivePage;
  setDisplay: (value: ActivePage) => void;
}

const NavBar = ({display, setDisplay }: NavBarProps) => {
  const className = `${display !== 'home' ? 'navListText' : ''}`

  return (
    <header className="header-container">
      <div className="nav-name" onClick={() => { setDisplay('home') }}>{name}</div>
      <div className="menuIcon"><strong></strong></div>
      
      <div style={{display:"inline-flex"}}>
        <nav>
        <ul>
          <li><a className={className} onClick={() => { setDisplay('home') }}>Home</a></li>
          <li><a className={className} onClick={() => { setDisplay('about') }}>About</a></li>
          <li><a className={className} onClick={() => { setDisplay('projects') }}>Projects</a></li>
          <li><a className={className} onClick={() => { setDisplay('contact') }}>Contact</a></li>
        </ul>
      </nav>
      <DarkModeButton />
      </div>
    </header>
  )
}

export default NavBar
