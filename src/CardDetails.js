import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const CardDetails = () => {
    const { id } = useParams();
    const [cardInfo, setCardInfo] = useState({});
    if (Object.keys(cardInfo).length == 0) {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
            .then(data => data.json())
            .then(json => {
                setCardInfo(json["data"][0]);
            })
    }



    return (
        <div id="details">
            <h1>{cardInfo["name"]}</h1>
            
            <div id="images">
                {Object.keys(cardInfo).length != 0 && cardInfo["card_images"].map(ci => (
                    <div id="images">
                        <img className="card" src={ci["image_url"]} />
                    </div>
                ))}
            </div>
            <div id="sets">

                {Object.keys(cardInfo).length != 0 ? cardInfo["card_sets"].map(({ set_name, set_code, set_rarity, set_price }) => (
                    <div className="set">
                        <h1>{set_name}</h1>
                        <h2>{set_code}</h2>
                        <h3>{set_rarity}</h3>
                        <h4>{`$${set_price}`}</h4>
                    </div>
                )) : 'no'}
            </div>


        </div>
    )
}

export default CardDetails;