import React from "react";
import "./SingleProject.css";
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
      <div className="col m4 project-image">
        {liveSiteUrl ? (
          <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="Sky Retro" />
          </a>
        ) : (
          <img src={image} alt="Sky Retro" />
        )}
      </div>
      <div className="col m8 single-project-right">
        <div className="project-title">
          <h5>
            {liveSiteUrl ? (
              <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <>{title}</>
            )}
          </h5>
        </div>
        <div className="project-description">
          <p>{description}</p>
          <p>Technologies:</p>
          {technologies.map((technology, index) => (
            <button key={index}>{technology}</button>
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
