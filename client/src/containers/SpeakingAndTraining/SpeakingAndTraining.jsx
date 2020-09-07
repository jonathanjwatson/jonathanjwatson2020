import React from "react";
import "./SpeakingAndTraining.css";
import NavBarBright from "../../components/NavBarBright/NavBarBright";
import Footer from "../../components/Footer/Footer";

const SpeakingAndTraining = () => {
  return (
    <>
      <NavBarBright />
      <div className="container" id="speaking-and-training">
        <div className="row">
          <div className="col s12 center-align">
            <h1>Speaking and Training</h1>
          </div>
        </div>
        <div className="row">
          <div className="col m8 offset-m2 s12">
            <h5>
              If you'd like to have me speak at your conference or do a private
              workshop at your work, please get in touch with me at{" "}
              <a href="mailto:jonathan@agiledevelopmentconsulting.com">
                jonathan@agiledevelopmentconsulting.com
              </a>
            </h5>
            <h5>
              I like to speak about React.js, Node.js, JavaScript, CSS, clean
              front-end design, RESTful API architecture, and more. I can create
              custom workshops specifically designed to empower your team!
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h4 className="center-align">
              In the meantime, you can find me here:
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col m4">
            <h5 className="center-align">GitHub</h5>
            <a href="https://github.com/jonathanjwatson" target="_blank">
              <img
                src="https://res.cloudinary.com/pictureswarm/image/upload/v1599443828/JonathanJWatson/GitHub.png"
                alt="GitHub Screenshot"
              />
            </a>
          </div>
          <div className="col m4">
            <h5 className="center-align">YouTube</h5>
            <a
              href="https://www.youtube.com/channel/UCCDmcwZ1DBlFzDoRcTnoLDw"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/pictureswarm/image/upload/v1599443828/JonathanJWatson/YouTube.png"
                alt="Youtube Screenshot"
              />
            </a>
          </div>
          <div className="col m4">
            <h5 className="center-align">Medium</h5>
            <a href="https://medium.com/me/stories/public" target="_blank">
              <img
                src="https://res.cloudinary.com/pictureswarm/image/upload/v1599443828/JonathanJWatson/Medium.png"
                alt="Medium Screenshot"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpeakingAndTraining;
