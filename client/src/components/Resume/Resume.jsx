import React from "react";
import FAIcon from "../../components/FAIcon/FAIcon";

const Resume = () => {
  return (
    <div className="row">
      <div className="col s12 center-align">
        <h3>Resume</h3>
        <a
          href="https://www.dropbox.com/s/4foxrsnrd0naalj/Jwatson-2020.pdf?dl=0"
          target="__blank"
          download
        >
          <FAIcon slug="faFilePdf" />
        </a>
      </div>
    </div>
  );
};

export default Resume;
