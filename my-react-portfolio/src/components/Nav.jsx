import React from "react";
import styles from "./Nav.module.css";


function Nav(){

    return(<header className={styles.header}>
           <nav className={styles.menu}>
            <ul>
             <li><a href="#"> Home</a></li> 
             <li><a href="#"> About</a></li>
             <li><a href="#"> Skills</a></li>
             <li><a href="#"> Contact</a></li>        
            
            </ul>
          </nav>
          </header>)
}

export default Nav;