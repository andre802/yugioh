import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Card from './Card';
const SetDetails = () => {
    const {name} = useParams();
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${name}`)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                setCards(json["data"]);
            })
    }, [])
    return (
        <div id="details">
            <h1>{name}</h1>
            <div id="cards">
                {cards ? cards.map(card => (
                    <Card key={card.id} name={card.name} image={card["card_images"][0]["image_url"]} id={card.id}/>
                )) : "Loading..."}
            </div>
        </div>
    )
}
export default SetDetails;