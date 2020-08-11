import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const FAIcon = ({ slug }) => {
  const [plain, setPlain] = useState(true);
  return (
    <FontAwesomeIcon
      icon={faFilePdf}
      color={`${plain ? "#5a5a5b" : "#039be5"}`}
      size="6x"
      onMouseEnter={() => {
        setPlain(false);
      }}
      onMouseLeave={() => {
        setPlain(true);
      }}
    />
  );
};

FAIcon.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default FAIcon;
