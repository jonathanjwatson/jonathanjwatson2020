import React, { useState } from "react";
import PropTypes from "prop-types";

const DevIcon = ({ label, original, slug }) => {
  const [plain, setPlain] = useState(true);
  return (
    <div>
      <i
        class={`devicon-${slug}-${original ? "original" : "plain"} ${
          plain ? null : "colored"
        }`}
        onMouseEnter={() => {
          setPlain(false);
        }}
        onMouseLeave={() => {
          setPlain(true);
        }}
      ></i>
      <p>{label}</p>
    </div>
  );
};

DevIcon.propTypes = {
  label: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default DevIcon;
