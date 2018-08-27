import React from "react";
import Card from "./Card";
const CardList = ({ users }) => {
  return (
    <div>
      {users.map((user, i) => {
        return (
          <div>
            <Card
              key={i}
              id={users[i].id}
              name={users[i].name}
              email={users[i].email}
            />

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
