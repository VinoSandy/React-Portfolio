import React from "react";
import  { Link } from "react-router-dom"
import styles from "./Nav.module.css";

//NavBar
/*React Router used for page navigation */
function Nav(props){

    return(<header className={styles.header}>
           <nav className={styles.menu}>
            <ul>
              
             <li><Link to="/">Home</Link></li> 
             <li> <Link to="/about">About</Link></li>
             <li> <Link to="/projects">Projects</Link></li>
             <li><Link to="/contact">Contact</Link></li>        
            </ul>
          </nav>
          </header>)
}

export default Nav;