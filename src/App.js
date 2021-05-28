import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Card from './Card';
import CardDetails from './CardDetails';
import SetDetails from './SetDetails';
import Sets from './Sets';
const App = () => {
    const [cards, setCards] = useState([]);
    const [text, setText] = useState("");
    function getCards() {
        setCards([]);
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${text}`)
            .then(data => data.json())
            .then(json => {
                json["data"].map(d => {
                    setCards(cards => [...cards, d]);
                })
            })
    }
    return (
        <div>
            <Router>
                <header>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/cardSets">
                        Sets
                    </Link>
                </header>
                <Switch>
                    <Route exact path="/">
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
                                <Card name={c["name"]} key={c["id"]} id={c["id"]} image={c["card_images"][0]["image_url"]} />
                            ))}
                        </div>
                    </Route>
                    <Route exact path="/details/:name">
                        <CardDetails />
                    </Route>
                    <Route exact path="/setDetails/:name">
                        <SetDetails />
                    </Route>
                    <Route exact path = '/cardSets'>
                        <Sets />
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"));