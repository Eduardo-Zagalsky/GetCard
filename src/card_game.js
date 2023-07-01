import axios from "axios";
import Card from "./card";
import { useState, useEffect } from "react";

const BASE_URL = "https://deckofcardsapi.com/api/deck";

const CardGame = () => {
    const [deck, setDeck] = useState(null);
    const [card, setCard] = useState([]);
    const [draw, setDraw] = useState(false);

    useEffect(() => {
        async function getNewDeck() {
            let newDeck = await axios.get(`${BASE_URL}/new/shuffle/`);
            setDeck(newDeck.data.deck_id);
        };
        getNewDeck();
    }, [setDeck]);

    useEffect(() => {
        async function getCard() {
            let res = await axios.get(`${BASE_URL}/${deck}/draw/?count=1`);
            const card = res.data.cards[0];
            setCard(c => [...c, {
                id: card.code,
                name: card.suit + " " + card.value,
                image: card.image
            }]);
        };
        getCard()
    }, [draw]);

    const cards = card.map(c => (<Card key={c.id} img={c.image} alt={c.name} />));

    const handleClick = (e) => {
        setDraw(!draw);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            {deck ? <div>{cards}</div> : "No Cards"}
        </div>
    );
};

export default CardGame;