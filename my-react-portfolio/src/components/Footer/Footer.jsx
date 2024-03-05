import React from "react";
import  styles from './Footer.module.css'

function Footer(){

return (<footer className={styles.footer}>
        <p>
         By Vinothini Santhosh 💛 {new Date().getFullYear()} 
        </p> 
       </footer>)

}

export default Footer;