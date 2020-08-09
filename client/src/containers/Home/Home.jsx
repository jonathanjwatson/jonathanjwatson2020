import React from "react";
import "./Home.css";
import Typist from "react-typist";

const Home = () => {
  return (
    <div id="home-page" className="valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align" style={{ letterSpacing: ".6vw" }}>
              JONATHAN J. WATSON
            </h1>
            <Typist
              cursor={{
                show: false,
              }}
              //   onCharacterTyped={function(character, charIdx){
              //       debugger;
              //   }}
            >
              <h3 className="center-align" style={{ letterSpacing: ".6vw" }}>
                ENGINEER | EDUCATOR | ENTREPRENEUR
              </h3>
            </Typist>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
