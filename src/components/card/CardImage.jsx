import React from "react";
import { Link } from "react-router-dom";

const CardImage = (props) => {
  return (
    <Link to={props.to}>
      <div className={`card shadow-sm `} style={{backgroundColor: "linear-gradient(90deg, #101010, #ffc200);"}}>
        <div className={`card-body p-0 d-flex`}>
          <img
            src={props.src}
            className={`animated-image ${true ? 'fade-in shake' : ''}  ${props.className}`}
            alt="..."
          />
          <h5>Unlock Your Mystery Discount</h5>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
