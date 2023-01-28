import {useState, useEffect} from "react";
import {listDecks} from "../utils/api/index"

function ListDecks() {
const [decks, setDecks] = useState([])

useEffect(()=>{
    const abortController = new AbortController();
    async function loadDeck() {

try {
    const decksData = await listDecks()
    console.log(decksData)
    setDecks(decksData)
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
    <hr></hr>
    <div>
        {decks.map((deck)=>{
       return <div key={deck.id}>
        <div>
            <h2>
            {deck.name}
            </h2>
            <p>{deck.cards.length}</p> 
        </div>
        <p>{deck.description}</p>
        <div>
            <div>
                <button onClick={()=>{}}>View</button>
                <button onClick={()=>{}}>Study</button>
            </div>
            <div> 
                <button>Delete</button>
            </div>
            <hr></hr>
        </div>
        </div>
        })}
    </div>
    </>
    )
}

export default ListDecks;
