import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="Button">
      load more
    </button>
  );
};

export default Button;
