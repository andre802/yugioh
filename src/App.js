import React from 'react';
import {render} from 'react-dom';
import {useState} from 'react';
import Card from './Card';
const App = () => {
    const [cards, setCards] = useState([]);
    const [text, setText] = useState("");
    function getCards() {
        setCards([]);
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${text}`)
            .then(data => data.json())
            .then(json => {
                console.log(json);
                json["data"].map(d => {
                    setCards(cards => [...cards, d]);
                })
            })
    }
    return (
        <div>
            <header>
            <form 
                onSubmit={e => {
                    e.preventDefault();
                    getCards();
                }}
            >
            
                <label htmlFor="textSearch">Search card(s) by name</label>
                <input
                    id="textSearch" 
                    onChange={e => setText(e.target.value)}
                    type="text"
                />
                <button id="textSearch">Search</button>
            </form>
            </header>
            <div id="cards">
                {cards.map(c => (
                    <Card image={c["card_images"][0]["image_url"]} />
                ))}
            </div>
            
        </div>
    )
}

render(<App />, document.getElementById("root"));