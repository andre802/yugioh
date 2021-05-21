import React from 'react';
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image}/>
        </div>
    )

}

export default Card;