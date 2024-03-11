import React from "react";
import styles from  "./Projects.module.css";






function Projects({key,title, appLink,repo,image }){

    return ( 
        <section className={styles.container}>
          <div className={styles.card} key={key}>
          <img src={image} alt={title} className={styles.projectImage} />
          <div className={styles.content}>
           <h4 className={styles.projectTitle}>{title}</h4>
            <div className={styles.projectLinks}>
            <a href={appLink } target="_blank">App</a>
            <span className={styles.linkSpacer}></span>
            <a href={repo} target="_blank">Git-Repo</a>
            </div>
          </div>
        </div>                  
    </section>             
    )
}

export default Projects;
