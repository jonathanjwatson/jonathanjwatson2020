import React from "react";
import "./Projects.css";
import SingleProject from "../../components/SingleProject/SingleProject";
import SkyRetro from "../../images/project-sky-retro.png";
import HaulMi from "../../images/project-haul-mi.jpg";
import Deluxe from "../../images/project-deluxe.png";

const Projects = () => {
  return (
    <div id="about-page" className="valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="center-align">Projects</h3>
          </div>
        </div>
        <SingleProject
          image={SkyRetro}
          title="Sky Retro"
          description="Sky Retro is a customizable retrospective tool for developers, by
            developers."
          technologies={[
            "React",
            "JavaScript",
            "WebSockets",
            "Express",
            "MongoDB",
          ]}
          liveSiteUrl="https://www.skyretro.com"
        />
        <SingleProject
          image={Deluxe}
          title="Deluxe Rewards"
          description="Deluxe Rewards is a white-label application that allows companies to offer loyalty programs to their customers. I worked on updating existing site features and creating new functionality based on business requests."
          technologies={[
            "React",
            "JavaScript",
            "SCSS",
            "Java",
            "SpringBoot",
            "SQL",
          ]}
        />
        <SingleProject
          image={HaulMi}
          title="HaulMi"
          description="HaulMi is your friendly and trustworthy moving, delivery, and disposal company. I worked as one of the primary software engineers during the company's startup phase."
          technologies={["React", "Express", "MongoDB"]}
          liveSiteUrl="https://haulmi.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
