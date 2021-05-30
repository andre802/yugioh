import {useState, useEffect} from 'react';
import Card from './Card';
const Attributes = () => {
    const attributes = ["dark", "earth", "fire", "light", "water", "wind", "divine"];
    const [attribute, setAttribute] = useState("");
    const [cards, setCards] = useState([]);
    useEffect(() => {
        if (attribute == "") {
            return
        } else {
            fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${attribute}`)
            .then(data => data.json())
            .then(json => setCards(json["data"]))        }
    }, [attribute])

    return (
        <div id="details">
        <label>
            Attributes
            <select
                onChange={e => setAttribute(e.target.value)}
                value={attribute}
            >
                {attributes.map(attr => (
                    <option value={attr}>{attr}</option>
                ))}
            </select>
        </label>
        <div className="description">
            {`${cards.length} Cards`}
        </div>
        <div id="cards">
            {cards.map(c => (
                <Card name={c["name"]} key={c["id"]} id={c["id"]} image={c["card_images"][0]["image_url"]} />
            ))}
        </div>
        </div>
    )
}
export default Attributes;
