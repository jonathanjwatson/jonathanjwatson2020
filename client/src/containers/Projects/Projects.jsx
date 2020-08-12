import React from "react";
import "./Projects.css";
import SkyRetro from "../../images/project-sky-retro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div id="about-page" className="valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="center-align">Projects</h3>
          </div>
        </div>
        <div className="row single-project">
          <div className="col m4 project-image" style={{ marginTop: "3em" }}>
            <a
              href="http://nasaimages.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={SkyRetro} alt="Sky Retro" style={{ width: "100%" }} />
            </a>
          </div>
          <div className="col m8 single-project-right">
            <div className="project-title">
              <h5>
                <a
                  href="https://www.skyretro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sky Retro
                </a>
              </h5>
            </div>
            <div className="project-description">
              <p>
                Sky Retro is a customizable retrospective tool for developers,
                by developers.
              </p>
              <p>Technologies:</p>
              <button>React</button>
              <button>WebSockets</button>
              <button>Express</button>
              <button>MongoDB</button>
              <div className="project-links">
                <div className="row">
                  <div className="col s12">
                    <FontAwesomeIcon icon={faDesktop} />
                    <span> </span>
                    <a href="https://www.skyretro.com">Live Site</a>
                  </div>
                  <div className="col s12">
                    <FontAwesomeIcon icon={faGithub} />
                    <span> </span>
                    <a href="">Repo Unavailable</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
