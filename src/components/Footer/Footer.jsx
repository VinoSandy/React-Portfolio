import React from "react";
import  styles from './Footer.module.css'

function Footer(){
/*Footer created to display with year */
return (<footer className={styles.footer}>
        <p>
        &copy; Copyright:{new Date().getFullYear()} <span className={styles.span}>Vinothini Santhosh</span>
        </p> 
       </footer>)

}

export default Footer;