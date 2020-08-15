import React from "react";
import { Link } from "react-router-dom";
import NavBarBright from "../../components/NavBarBright/NavBarBright";

const NoMatch = () => {
  return (
    <>
      <NavBarBright />
      <div id="about-page" className="valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3 className="center-align">THANK YOU MARIO!</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p className="center-align">
                BUT OUR PRINCESS IS IN ANOTHER CASTLE
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <Link to="/about">
                <button className="btn waves-effect waves-light" type="submit">
                  Try the About page instead
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
