import React from "react";
import ProfileImage from "../../assets/profile_Img.png"
import styles from "./Home.module.css"

function Home(){


    return(<section className={styles.content}>
           <div className={styles.container}>
           <div className={styles.homeText}>
            <p> Hi there!, I 'm </p>
            <h3 >Vinothini Santhosh</h3>
            <p> A Front End Web Developer passionate about creating<br/>
                intractive web applications </p>
           </div>
           <div className={styles.image}>
            <img src={ProfileImage}></img>
           </div>
           </div>
          </section>)
}
export default Home;