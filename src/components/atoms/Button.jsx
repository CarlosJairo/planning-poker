import React from "react";
import "../../styles/atoms/Button.css";

const Button = ({ className, children, ...props }) => (
  <button className={className || ""} {...props}>
    {children}
  </button>
);

export default Button;
