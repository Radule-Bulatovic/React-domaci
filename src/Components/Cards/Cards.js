import React from "react";
import Card from "./Card/Card";

const Cards = props => {    
    return (
        props.cards.map((e, i) => (
            <Card
                click={() => {
                    props.click(i);
                }}
                flip={props.fliped.includes(i) || props.found.includes(i) ? 1 : 0}
                card={e}
                key={i}
            />
        ))
    )
}

export default Cards;