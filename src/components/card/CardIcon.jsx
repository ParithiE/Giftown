import React from "react";
import { Link } from "react-router-dom";
const CardIcon = (props) => {
  return (
    <Link to={`/category/${props.categoryId}`} className="text-decoration-none">
      <div className="card border-0 text-center">
        <div className="card-body">
          {props.children}
          <h6 className="card-title text-capitalize">{props.title}</h6>
          <div className="card-text text-success">{props.text}</div>
          <small className="text-muted">{props.tips}</small>
        </div>
      </div>
    </Link>
  );
};

export default CardIcon;
