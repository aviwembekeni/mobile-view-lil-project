import React from "react";
import { Grid, Cell } from "react-mdl";

const Card = ({ name, email, id }) => {
  return (
    <div className=" user-row">
      <img src={`https://robohash.org/${id}`} alt="jon-doe-pic" />
      <div className="user-info-container">
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
