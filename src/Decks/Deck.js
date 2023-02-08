import React, {useState, useEffect} from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import {readDeck, deleteDeck} from "../utils/api/index"


function Deck() {
const [deck, setDeck] = useState({})
const [cards, setCards] = useState([])
const params = useParams();
const history = useHistory();
const deckId = params.deckId

useEffect(()=>{
async function loadData() {
    try {
    const response = await readDeck(deckId)
    setDeck(response)
    setCards(response.cards)
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("aborted")
        } else {
            throw error;
        }
    }
}
loadData();

}, [deckId])

const handleCardDelete = () => {
    
}

const handleDeckDelete = () => {
console.log("delete deck function called")
const result = window.confirm("Delete deck?")
if (result) {
    async function deleteData () {
        try {
            await deleteDeck(deckId)
            history.push("/")
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Aborted")
            } else {
                throw error;
            }
        }
    }
    deleteData();
}
}

return (
    <div>
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <div className="row justify-content-between">
            <div className="col-8">
                <Link to="" className="btn btn-secondary">Edit</Link>
                <Link to="" className="btn btn-primary">Study</Link>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
            </div>
            <button onClick={handleDeckDelete}className="btn btn-danger">Delete</button>
        </div>
        <br/>
        <h3>Cards</h3>
        <div>
            {cards.map((card)=>{
                return (
<div className="card">                
                <div className="card-body">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-6">
                                {card.front}
                            </div>
                            <div className="col-6">
                                {card.back}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-9">
                                
                            </div>
                            <div className="col-3">
                                <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary">Edit</Link> &nbsp;
                                <button onClick={handleCardDelete} value={card.id} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
                )
            })}
        </div>
    </div>
    
)

}

export default Deck;