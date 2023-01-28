import {useState, useEffect} from "react";

function Home() {
const [decks, setDecks] = useState([])

useEffect(()=>{
    const abortController = new AbortController();
    async function loadDeck() {

try {
    const response = await fetch("http://localhost:8080/decks", {signal: abortController.signal})
    const decksfromApi = await response.json();
    console.log(decksfromApi)
    setDecks(decksfromApi)
} catch (error) {
    if (error.name === "AbortError") {
    console.log(error)
} else {
    throw error;
} 
    }
 }
    loadDeck();
    return () => {
        abortController.abort();
    }
},[])






    return (
    <>
    <button>+ Create Deck</button>
    <hr></hr>
    <div>
        {decks.map((deck)=>{
       return <div key={deck.id}>
        <div>
            <h2>
            {deck.name}
            </h2>
            <p>Cards.map into  cards.length?</p> 
        </div>
        <p>{deck.description}</p>
        <div>
            <div>
                <button>View</button>
                <button>Study</button>
            </div>
            <div> 
                <button>Delete</button>
            </div>
        </div>
        </div>
        })}
    </div>
    </>
    )
}

export default Home
