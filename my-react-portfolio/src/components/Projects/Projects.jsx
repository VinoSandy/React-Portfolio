import React from "react";
import projects from "../../data/ProjectData.json";
import styles from  "./Projects.module.css";



function Projects(){

    return ( 
        <section className={styles.container}>
        
         {projects.map((project) => (
          <div className={styles.card} key={project.id}>
          <img src={project.imgUrl} alt={project.title} className={styles.projectImage} />
          <div className={styles.content}>
           <h4 className={styles.projectTitle}>{project.title}</h4>
            <div className={styles.projectLinks}>
            <a href={project.appLink } target="_blank">App</a>
            <span className={styles.linkSpacer}></span>
            <a href={project.Repo} target="_blank">Git-Repo</a>
            </div>
          </div>
        </div>
        
      ))}
      
    </section>             
    )
}

export default Projects;