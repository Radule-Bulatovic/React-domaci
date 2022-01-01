import React from "react";
import styles from "./menu.module.css";

function Menu(props) {
  return (
    <div className={styles.container}>
      {<h1>{props.isWinner === null ? null : props.isWinner ? "Winner" : "Loser"}</h1>}
      <button className={styles.btn} onClick={props.click}>
        NEW GAME
      </button>
    </div>
  );
}

export default Menu;
