import React from 'react'
import Nav from 'react-bootstrap/Nav'
import styles from "../styles/styles.css"
import { DiGithub } from "react-icons/di";
import logo from "../styles/f-to-covid-19-us.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function NavBar() {
    return (
      <div>
      <div class="logo">
      <Link to="/"><img src={logo} alt = "logo"></img></Link>
    </div>
        <div className="navItems">
            <Nav>
    
            <ul className="navLinks">
             <Link to="/">
             Home </Link>
        
     
              <Link to="/About">About</Link>
    
              </ul>
        <Nav.Item>
          <Nav.Link href="https://github.com/fjkiani/no-to-covid" target="_blank"><DiGithub/></Nav.Link>
     </Nav.Item>

</Nav>
        </div>
        </div>

    )
}
