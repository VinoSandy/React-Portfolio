import React from "react";
import ProfileImage from "../../assets/profile_Img.png"
import styles from "./Home.module.css"

function Home(){


    return(<section className={styles.content}>
           <div className={styles.container}>

           <div className={styles.image}>
            <img src={ProfileImage} alt="Profile" ></img>
           </div>

           <div className={styles.homeText}>
            <p> Hi there!, I 'm </p>
            <h3><span className={styles.span}>Vinothini</span> Santhosh</h3>
            <p><span className={styles.span}> A Front End Web Developer</span> passionate about creating<br/>
                intractive web applications </p>
           </div>
           
           </div>
          </section>)
}
export default Home;