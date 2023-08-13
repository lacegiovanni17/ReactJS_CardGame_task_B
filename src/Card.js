import React from "react";

const Card = ({ color, value, flipped, onClick }) => {
  const iconPath = `/${value}-${color}.svg`;
  const cardClass = `card ${flipped ? "flipped" : ""}`;

  console.log(iconPath);

  return (
    <div className={cardClass} onClick={onClick}>
      <div className={`card-inner ${color}`}>
        <div className="card-front">
          <img
            src={iconPath}
            alt={`${value} of ${color}`}
            width="80"
            height="100"
          />
        </div>
        <div className="card-back">
          <img
            src={iconPath}
            alt={`${value} of ${color}`}
            width="20em"
            height="20em"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
