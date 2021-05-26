import React from "react";
import "./Portfolio.css";
import SingleProject from "../../components/SingleProject/SingleProject";
import SkyRetro from "../../images/project-sky-retro.png";
import HaulMi from "../../images/project-haul-mi.jpg";
import Deluxe from "../../images/project-deluxe.png";
import HomeDepot from "../../images/project-home-depot.png";
import HomeschoolHub from "../../images/project-homeschool-hub.png";
import NavBarBright from "../../components/NavBarBright/NavBarBright";
import Footer from "../../components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <NavBarBright />
      <div id="portfolio-page" className="valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">Portfolio</h1>
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
              "Heroku",
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
              "Nginx",
            ]}
          />
          <SingleProject
            image={HomeschoolHub}
            title="Homeschool Hub"
            description="Homeschool Hub is an online Learning Management System designed for parents and children. This is specifically designed for homeschoolers looking to track progress through courses, see assignments by category, and review grades."
            technologies={["React", "Express", "JavaScript", "GraphQL"]}
          />
          <SingleProject
            image={HomeDepot}
            title="The Home Depot"
            description="As a member of the Transportation team, part of the Supply Chain division at The Home Depot Marietta Technology Center, I built and maintained numerous internal applications. Our biggest 'built-from-scratch' application, VendorPlanEx was responsible for cutting transportation costs on bulk items by nearly 30%, a savings of millions of dollars per year."
            technologies={[
              "React",
              "Express",
              "JavaScript",
              "Java",
              "SpringBoot",
              "PubSub",
              "Google Cloud Platform",
            ]}
          />
          <SingleProject
            image={HaulMi}
            title="HaulMi"
            description="HaulMi is your friendly and trustworthy moving, delivery, and disposal company. I worked as one of the primary software engineers during the company's startup phase."
            technologies={["React", "Express", "MongoDB", "Heroku"]}
            liveSiteUrl="https://haulmi.com/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
