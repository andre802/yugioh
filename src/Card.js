import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card">
            <Link to={`/details/${props.name}`}><img src={props.image}/></Link>
        </div>
    )

}

export default Card;