import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const CardDetails = () => {
    const { name } = useParams();
    const [cardInfo, setCardInfo] = useState({});
    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setCardInfo(json["data"][0]);
            })
    }, []);



    return (
        <div id="details">
            <h1>{cardInfo["name"]}</h1>
            
            <div className="images">
                {Object.keys(cardInfo).length != 0 && cardInfo["card_images"].map(ci => (
                    <div id="image">
                        <img className="card" src={ci["image_url"]} />
                    </div>
                ))}
            </div>
            <div id="sets">

                {cardInfo["card_sets"] ? cardInfo["card_sets"].map(({ set_name, set_code, set_rarity, set_price }) => (
                    <Link to={`../setDetails/${set_name}`}>
                    <div className="set">
                        <h1>{set_name}</h1>
                        <h2>{set_code}</h2>
                        <h3>{set_rarity}</h3>
                        <h4>{`$${set_price}`}</h4>
                    </div>
                    </Link>
                )) : null }
            </div>


        </div>
    )
}

export default CardDetails;