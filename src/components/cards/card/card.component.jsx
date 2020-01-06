import React from 'react';

import './card.styles.css';

// import '../bootstrap-4.4.1-dist/css/bootstrap-grid.min.css';


export const Card = (props) => (
    // console.log(props.monster.skillname)
    <div className = {`card-container card${props.monster.id}`}>
        {/* <img alt = "monster" src = {`https://robohash.org/1?set=set2`} */}
        <img className = {`image${props.monster.id}`} alt = "monster" src = {`images/${props.monster.id}.png`} />
        <h2> {props.monster.skillname} </h2>
        {/* <p>{props.monster.id}</p> */}
    </div>
)