import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

function UserGreeting(props) {
  return (
    <div className="greetingDiv">
      <div className="greetingText">
        <h1>{props.greeting}</h1>
      </div>
      <div className="productOne">
        <ItemCount stock={5} initial={1} />
      </div>
      <div className="productTwo"></div>
    </div>
  );
}

export default UserGreeting;
