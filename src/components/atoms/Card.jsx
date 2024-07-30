import React, { useState } from "react";

const Card = ({ children, onClick, className }) => {
  const [isSelected, setIsSelecet] = useState(false);

  const handleClick = () => {
    setIsSelecet(!isSelected);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${className || ""} ${isSelected ? "selected" : null}`}
    >
      {children}
    </button>
  );
};

export default Card;
