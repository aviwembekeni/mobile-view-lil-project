import React from "react";

const Card = ({name, email, id}) => {
    
    return(
        <div className="bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="jon-doe-pic"/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;