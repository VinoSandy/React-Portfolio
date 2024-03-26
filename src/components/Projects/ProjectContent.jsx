import React from "react";
import ProjectData from "../../data/ProjectData.json";
import Projects from "./Projects";
import edicatation from "../../assets/Edicatation.png";
import quizImg from "../../assets/quizJs.png";
import cityImage from "../../assets/CityExplorer.png";
import weather from "../../assets/Weather.png";
import workday from "../../assets/WorkDay.png";
import ReadMe from "../../assets/ReadMeGenerator.png";





const imageMap={ "Edicatation":edicatation,
                 "JavaScript Quiz App":quizImg,
                 "Weather Forecaster":weather,
                 "WorkDay Scheduler":workday,
                 "City Explorer":cityImage,                               
                 "ReadMe Generator":ReadMe,
               }


/*Dynamically renderes card element from Projects and 
generates projectcard using data from projectdata json file */
function ProjectContent() {
  return (
    <div>
      {ProjectData.map((project) => (
        <Projects
          key={project.id}
          title={project.title}
          appLink={project.appLink}
          repo={project.Repo}
          image={imageMap[project.title]}
        />
      ))}
    </div>
  )
}

export default ProjectContent;