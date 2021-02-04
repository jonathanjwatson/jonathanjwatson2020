import React from "react";
import "./Skills.css";
import DevIcon from "../../components/DevIcon/DevIcon";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col s12">
          <h3 className="center-align">Skills</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s1"></div>
        <div className="col s10  center-align development-icons">
          <DevIcon slug="bootstrap" label="Bootstrap" />
          <DevIcon slug="css3" label="CSS 3" />
          <DevIcon slug="docker" label="Docker" />
          <DevIcon slug="express" label="Express" original />
          <DevIcon slug="handlebars" label="Handlebars" />
          <DevIcon slug="heroku" label="Heroku" original />
          <DevIcon slug="html5" label="HTML 5" />
          <DevIcon slug="java" label="Java" />

          <DevIcon slug="javascript" label="JavaScript" />
          <DevIcon slug="jquery" label="jQuery" />
          <DevIcon slug="mongodb" label="Mongo DB" />
          <DevIcon slug="mysql" label="MySQL" />
          <DevIcon slug="nodejs" label="Node JS" />
          <DevIcon slug="postgresql" label="PostgreSQL" />
          <DevIcon slug="react" label="React" original />
          <DevIcon slug="sequelize" label="Sequelize" />
          <DevIcon slug="typescript" label="TypeScript" />
        </div>
        <div className="col s1"></div>
      </div>
    </>
  );
};

export default Skills;
