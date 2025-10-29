import React from "react";

const Button = ({ type, onClick, label,disabled  ,className }) => {
  return <button onClick={onClick} type={type} className={className} disabled={disabled} >{label}</button>;
};

export default Button;
