import React from "react";
import Jwatson from "../../images/jwatson.jpg";
import Footer from "../../components/Footer/Footer";
import NavBarBright from "../../components/NavBarBright/NavBarBright";

const Uses = () => {
  return (
    <>
      <NavBarBright />
      <div id="about-page" className="valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">/Uses</h1>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h2 className="center-align">Everything I Use to Code</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col m6"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <img
                src="https://res.cloudinary.com/jonathanwatsonwebdevelopment/image/upload/v1622060144/office.jpg"
                alt="Home Office Setup"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col m6">
              <h3>About /Uses</h3>
              <p>
                Sometimes, you want to know what other software engineers are
                using. Below is a list of everything I use to write code well.
                This list came about over time. And it's certainly not static.
                I'm always looking for tools to improve my coding.
              </p>
              <p>
                Special thanks to Wes Bos for coming up with this idea and
                hosting the{" "}
                <a href="http://uses.tech" target="_blank" rel="noreferrer">
                  uses.tech
                </a>{" "}
                Site!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <h3>Hardware</h3>
              <h4>Home Office Setup</h4>
              <ul>
                <li>MacBook Pro 16"</li>
                <li>iPad Pro 10"</li>
                <li>Dual ViewSonic 27" 4K Monitors</li>
                <li>Vivo Dual Monitor Mount</li>
                <li>Logitech MX Master 3 Wireless Mouse for Mac</li>
                <li>Macally Backlit Mechanical Keyboard for Mac</li>
                <li>Anker USB C 5-in-1 Hub Adapter x 2</li>
                <li>Razor Kiyo 1080p Webcam</li>
                <li>Blue Yeti USB Mic</li>
                <li>ElGato Stream Deck</li>
                <li>Autonomous Smart Desk Pro</li>
                <li>Autonomous ErgoChair 2</li>
                <li>Google Home Audio</li>
                <li>Philips Hue Bloom Table Lamp</li>
              </ul>
              <h4>Portable Setup</h4>
              <ul>
                <li>M1 MacBook Air</li>
                <li>AirPods Pro</li>
                <li>Apple Watch Series 5</li>
                <li>Moleskine Notebook</li>
              </ul>
            </div>
            <div className="col s12">
              <h3>Software</h3>
              <ul>
                <li>iTerm 2 with Oh My Zsh</li>
                <li>Postman</li>
                <li>Google Chrome</li>
                <li>Firefox</li>
                <li>Notion</li>
                <li>Docker</li>
                <li>Bitwarden</li>
                <li>Visual Studio Code</li>
              </ul>
              <h4>Visual Studio Code Extensions</h4>
              <ul>
                <li>Git Extension Pack</li>
                <li>Material Icon Theme</li>
                <li>open in browser</li>
                <li>Prettier - Code formatter</li>
                <li>TODO Highlight</li>
              </ul>
            </div>
            <div className="col s12">
              <h3>Podcasts</h3>
              <ul>
                <li>Syntax FM</li>
                <li>Software Engineering Daily</li>
              </ul>
            </div>
            <div className="col s12">
              <h3>Books</h3>
              <ul>
                <li>Cracking the Coding Interview</li>
                <li>Clean Code</li>
                <li>The Clean Coder</li>
                <li>Clean Architecture</li>
                <li>Site Reliability Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Uses;
