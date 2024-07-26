import React from "react";

const InputRadio = ({ name, value, checked, onChange }) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      id={value}
    />
  );
};

export default InputRadio;
