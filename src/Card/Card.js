import React from "react";
import "../styles.css";
import CardBack from "../images/Back.png";

function Card(props) {
  return (
    <div className="card-div" onClick={props.click}>
      <img
        className={props.flip ? "card front front-flip" : "card front"}
        alt={props.card.name}
        src={props.card.card_images[0].image_url}
      />
      <img
        alt="test"
        className={props.flip ? "card back back-flip" : "card back"}
        src={CardBack}
      />
    </div>
  );
}

export default Card;
