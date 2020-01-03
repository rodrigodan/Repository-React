import React from 'react';

import './card.styles.css';



export const Card = (props) => (
    console.log(props.monster.skillname),
    <div className = "card-container">
        {/* <img alt = "monster" src = {`https://robohash.org/1?set=set2`} */}
        <img className = {`image${props.monster.id}`} alt = "monster" src = {`images/${props.monster.id}.png`} />
        <h2> {props.monster.skillname} </h2>
        <p>{props.monster.id}</p>
    </div>
)