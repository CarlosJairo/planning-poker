import React, { useState } from "react";

const Card = ({ children, onClick, className, card }) => {
  const [isSelected, setIsSelecet] = useState(false);

  const handleClick = () => {
    // Controlar el estilo de la card
    setIsSelecet(!isSelected);
    onClick(card);
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
