import React from "react";
import "./About.css";
import Jwatson from "../../images/jwatson.jpg";
import Skills from "../../components/Skills/Skills";
import Resume from "../../components/Resume/Resume";
import Footer from "../../components/Footer/Footer";
import NavBarBright from "../../components/NavBarBright/NavBarBright";

const About = () => {
  return (
    <>
      <NavBarBright />
      <div id="about-page" className="valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">About Me</h1>
            </div>
          </div>
          <div className="row">
            <div className="col s4"></div>
            <div className="col s8">
              <h4>Engineer | Entrepreneur | Educator</h4>
            </div>
          </div>
          <div className="row">
            <div
              className="col m4"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <img
                src={Jwatson}
                alt="Jonathan J. Watson headshot"
                id="about-photo"
              />
            </div>
            <div className="col m8">
              <p>
                I'm Jonathan J. Watson, a detail-oriented Senior Software
                Engineer with over five years of work experience in the
                information technology industry.
              </p>
              <p>
                I am a full-stack web developer with strengths in React and
                RESTful API architecture. I am passionate about helping others,
                clean code, and UX/UI.
              </p>
              <p>
                For me, the next step in helping others was to share this
                passion officially as an Adjunct Instructor for Georgia Tech's
                Professional Education program. I taught students as
                part of the Fullstack Flex program, which encompasses MERN stack
                applications, Progressive Web Apps, Object Oriented Programming
                design patterns, and more.
              </p>
              <p>
                Now, I help aspiring developers all over the world take their
                next step with Jonathan Watson Web Development, my online
                learning platform.
              </p>
              <p>
                I live in the greater Atlanta area near the beautiful
                Chattahoochee river. I enjoy traveling and speak conversational
                Spanish and French.
              </p>
              <p>
                I'm always looking to{" "}
                <a
                  href="http://linkedin.com/in/jonathanjwatson"
                  target="__blank"
                >
                  meet and connect with like-minded individuals and companies
                </a>
                !
              </p>
            </div>
          </div>
          <Skills />
          <Resume />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
