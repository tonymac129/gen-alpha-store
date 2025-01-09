import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img" />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
    </div>
  );
}

export default Card;
