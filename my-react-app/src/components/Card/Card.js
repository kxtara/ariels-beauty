import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className="card bg-black">
      <img className="card-img" src={props.image} alt={props.imageAlt} />
      <h4 className="card-title font-bold">{props.title}</h4>
      <p className="card-description">{props.description}</p>
      <Link className="more-link" to="/more">
        More
      </Link>
    </div>
  );
}
export default Card;
