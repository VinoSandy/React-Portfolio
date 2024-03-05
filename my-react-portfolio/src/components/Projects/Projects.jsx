import React from "react";
import projects from "../../data/ProjectData.json"



function Projects(){

    return ( 
             <section className="projects-container">
             {projects.map((project) => (
             <div className="card" key={project.id}>
             <div className="card-content">
             <h4 className="project-title">{project.title}</h4>
             <img src={project.imgUrl} alt={project.title} className="project-image" />
             <div className="project-links">
             <a href={project.appLink}>App Link</a><br/>
             <a href={project.Repo}>Repository Link</a>
             </div>
             </div>
             </div>
    ))}
  </section>

    )
}

export default Projects;