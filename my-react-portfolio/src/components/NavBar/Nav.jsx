import React from "react";
import styles from "./Nav.module.css";


function Nav(props){

    return(<header className={styles.header}>
           <nav className={styles.menu}>
            <ul>
             <li><a href="#home" 
                   onClick={()=>props.handlePageChange('Home')}> Home</a></li> 
             <li><a href="#about" 
                  onClick={()=>props.handlePageChange('About')}> About</a></li>
             <li><a href="#projects"
                  onClick={()=>props.handlePageChange('Projects')}> Projects</a></li>
             <li><a href="#contact"
                  onClick={()=>props.handlePageChange('Contact')}> Contact</a></li>        
            
            </ul>
          </nav>
          </header>)
}

export default Nav;