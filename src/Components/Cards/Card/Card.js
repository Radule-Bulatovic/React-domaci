import React from "react";
import styles from "./card.module.css";
import CardBack from "../../../images/Back.png";

function Card(props) {
  return (
    <div className={styles.cardDiv} onClick={props.click}>
      <img
        className={props.flip ? `${styles.card} ${styles.front} ${styles.frontFlip}` : `${styles.card} ${styles.front}`}
        alt={props.card.name}
        src={props.card.card_images[0].image_url}
      />
      <img
        alt="test"
        className={props.flip ? `${styles.card} ${styles.back} ${styles.backFlip}` : `${styles.card} ${styles.back}`}
        src={CardBack}
      />
    </div>
  );
}

export default Card;
