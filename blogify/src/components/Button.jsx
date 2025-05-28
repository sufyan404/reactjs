import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "white",
  className = "",
  ...props
}) {
  return (
    <button className={`px-4 py-2 ${type} ${bgColor} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
