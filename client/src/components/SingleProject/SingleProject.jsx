import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SingleProject = ({
  description,
  gitHubUrl,
  image,
  liveSiteUrl,
  technologies,
  title,
}) => {
  return (
    <div className="row single-project">
      <div className="col m4 project-image" style={{ marginTop: "3em" }}>
        <a
          href="http://nasaimages.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt="Sky Retro" style={{ width: "100%" }} />
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
              {title}
            </a>
          </h5>
        </div>
        <div className="project-description">
          <p>{description}</p>
          <p>Technologies:</p>
          {technologies.map((technology) => (
            <button>{technology}</button>
          ))}
          <div className="project-links">
            <div className="row">
              {liveSiteUrl && (
                <div className="col s12">
                  <FontAwesomeIcon icon={faDesktop} />
                  <span> </span>
                  <a href={liveSiteUrl}>Live Site</a>
                </div>
              )}
              {gitHubUrl && (
                <div className="col s12">
                  <FontAwesomeIcon icon={faGithub} />
                  <span> </span>
                  <a href={gitHubUrl}>View Repo</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  description: PropTypes.string.isRequired,
  gitHubUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  liveSiteUrl: PropTypes.string,
  technologies: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SingleProject;
