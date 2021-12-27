import React from "react";
import "../styles.css";

function Menu(props) {
  return (
    <div className="menu-div">
      {props.isPlayed ? <h1>{props.isWinner ? "Winner" : "Loser"}</h1> : null}
      <button className="menu-btn" onClick={props.click}>
        NEW GAME
      </button>
    </div>
  );
}

export default Menu;
