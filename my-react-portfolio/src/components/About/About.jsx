import React from "react";
import styles from "./About.module.css"

function About(){

    return (<section>
            <div className={styles.content}>
                <h3><span className={styles.span}>Welcome to My Portfolio!</span></h3>
                <p>Hello, and thank you for visiting! I'm <span className={styles.span}>Vinothini Santhosh</span>, a dedicated professional with a passion for crafting exceptional web experiences. 
                   With a background in software testing and a keen eye for detail, I've embarked on an exciting journey into front-end web development, 
                   where I merge my love for technology with my creative drive.</p>
                <p>Having spent valuable years as a Test Engineer, I've honed my skills in ensuring the functionality and quality of software products.
                   Now, I'm leveraging that expertise to bring designs to life and create seamless, user-friendly interfaces. My transition to front-end development 
                   is fueled by a desire to be at the forefront of innovation and to contribute to shaping the digital landscape.</p>
               </div>
                <div className={styles.skill}>
                <h3><span className={styles.span}>Skills</span></h3>
                
               <table className={styles.table}>
       
                 <tr>
                 <td>Technologies</td>
                 <td>HTML5, CSS,BootStrap,JavaScript,<br/>
                     Jquery,ES6,React,<br/>
                     Node + npm,REST API's</td>
                 </tr>
                 <tr>
                 <td>Test Libraries</td>
                 <td>Jest, Vitest+RTL </td>
                 </tr>
                 <tr>
                 <td>Version Control and Deployment</td>
                 <td>GIT, Netlify</td>
                 </tr>
                 </table>
               </div>
               
           </section>)
}

export default About;