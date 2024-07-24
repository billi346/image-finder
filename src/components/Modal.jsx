import React from "react";

const Modal = ({ img, handelClose }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <button onClick={handelClose}>Close</button>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Modal;
