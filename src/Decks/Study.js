import React, {useState, useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {readDeck} from "../utils/api/index"


function Study() {
const history = useHistory();
const params = useParams();
const deckId = params.deckId;
const [front, setFront] = useState(true);
const [cardNumber, setCardNumber] = useState(0);
const [cards, setCards] = useState({});
const [deck, setDeck] = useState({});

useEffect(()=>{
async function loadData () {
    try {
    const response = await readDeck(deckId)
    setDeck(response)
    setCards(response.cards)
    
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Aborted")
        } else {
            throw error
        }
    }
}
loadData();
}, [deckId])

function flipCard(){
    setFront(!front)
}

function nextCard(){
    if (cardNumber + 1 < cards.length){
        setCardNumber(cardNumber + 1);
        setFront(true);
    } else {
        const result = window.confirm(`Restart cards?
        
        Click 'cancel' to return to the home page.`);
  if (result) {
    setCardNumber(0);
    setFront(true);
    } else {
        history.push("/");
    }
    
    }
}


if (cards.length > 2){
    console.log(cards[0].front);
    return (
        <div>
            
            <h2>Study: {deck.name}</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {cardNumber + 1} of {cards.length}</h5>
                    <p className="card-text">{(front) ? `${cards[cardNumber].front}` : `${cards[cardNumber].back}`}</p>
                    <button className="btn btn-secondary" onClick={flipCard}>Flip</button> &nbsp;
                    {(front) ? " " : <button className="btn btn-primary" onClick={nextCard}>Next</button>}
                </div>
            </div>
        </div>
    );
} else {
    return (
        <div>
            
            <h2>Study: {deck.name}</h2>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Not Enough Cards.</h5>
                    <p className="card-text">You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
                    <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
                </div>
            </div>
        </div>
    );
}



}

export default Study;