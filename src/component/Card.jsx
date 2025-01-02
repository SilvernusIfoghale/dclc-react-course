import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, text, emoji, color, bgColor, children }) => {
  const colorCode = {
    green: "text-green-500 hover:text-green-400",
    blue: "text-blue-500 hover:text-blue-400",
  };
  return (
    <>
      <div className={`m-3 border-2 p-5 rounded-xl max-w-64 leading-10 `}>
        <h1 className={`text-3xl font-bold ${colorCode["blue"]}`}>{title}</h1>
        <p className={`${colorCode["green"]}`}>{text}</p>
        <div className={`text-4xl `}>{emoji}</div>
        <p className={`${bgColor}`}>sample text-color</p>
        {children}
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.object,
};

export default Card;
