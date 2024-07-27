import React from "react";

const ButtonSubmit = ({ disabled, children }) => {
  return (
    <button type="submit" disabled={disabled || false}>
      {children}
    </button>
  );
};

export default ButtonSubmit;
