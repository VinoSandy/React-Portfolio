import React from "react";
import ProjectData from "../../data/ProjectData.json";
import Projects from "./Projects";
import quizImg from "../../assets/quizJs.png";
import cityImage from "../../assets/CityExplorer.png";
import weather from "../../assets/Weather.png";
import workday from "../../assets/WorkDay.png";
import ReadMe from "../../assets/ReadMeGenerator.png";
import Team from "../../assets/TeamProfile.png";

const imageMap={"JavaScript Quiz App":quizImg,
                "Weather Forecaster":weather,
                "WorkDay Scheduler":workday,
                 "City Explorer":cityImage,
                 "Team Profile Generator":Team,                 
                 "ReadMe Generator":ReadMe,
                  }



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