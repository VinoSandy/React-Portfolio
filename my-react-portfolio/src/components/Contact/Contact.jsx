import React from "react";
import styles from "./Contact.module.css"



function Contact(){

    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h3><span className={styles.span}>Let's Connect</span></h3>
            <p>I'm excited about the possibilities that lie ahead in my journey as a front-end web developer, and 
                I'm always eager to collaborate on new projects or discuss opportunities. 
                Whether you're a fellow developer, a potential employer, or someone with a shared passion 
                for web development,I'd love to connect! Feel free to reach out via [Contact Information] and 
                let's explore how we can bring your ideas to life.</p>
        </div>
        <div className={styles.contact}>
            <h3><span className={styles.span}>Contact Me</span></h3>
            <p>santhoshkumarvinothini@gmail.com</p>
        </div>
        <div className={styles.imgIcon}>
        <a href="mailto:santhoshkumarvinothini@gmail.com" target="_blank">
        <img src="src/assets/email.png"></img>
        </a>
        <a href="https://github.com/VinoSandy" target="_blank">
        <img src="src/assets/github.png"></img>
        </a>
        <a href="" target="_blank">
        <img src="src/assets/linkedin.png"></img>
        </a>

        </div>
        

    </section>
    )
}

export default Contact;