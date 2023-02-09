import React, {useState, useEffect} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {readDeck, readCard, updateCard} from "../utils/api/index"

function EditCard(){
    const params = useParams();
    const deckId = params.deckId;
    const cardId = params.cardId;
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    useEffect(() => {
        setDeck( {} );
        async function loadData() {
           try {
           const dataFromAPI = await readDeck(deckId);
           setDeck(dataFromAPI);
           const datafromApie2 = await readCard(cardId);
           setCard(datafromApie2);              
          } catch (error) {
            if (error.name === "AbortError") {
              // Ignore `AbortError`
              console.log("Aborted");
          } else {
              throw error;
          }
        }
      }
      loadData();
    }, [deckId, cardId]);


    const handleChange = ({ target }) => {
        const value = target.value;
       setCard({
       ...card,
       [target.name]: value,
     });
    };
    const history = useHistory();
    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log("Submitted:", card);
        async function updateData() {
           try {
            await updateCard(card);
           history.push(`/decks/${deckId}`);
          } catch (error) {
            if (error.name === "AbortError") {
              // Ignore `AbortError`
              console.log("Aborted");
          } else {
              throw error;
          }
        }
      }
      updateData(); 
      };
    if (deck) {

        return (
            <>
        <h1>Edit Card</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Front</label>
            <br></br>
            <textarea type="text" name="front" placeholder="What path will match the follow Route?" onChange={handleChange}></textarea>
            <br></br>
            <label>Back</label>
            <br></br>
            <textarea type="text" name="back" placeholder="All paths. A route with no path matches all URL's" onChange={handleChange}></textarea>
        </div>
        <div>
            <Link to={`/decks/${deckId}`}>Cancel</Link>
            <button type="submit">Submit</button>
        </div>
    </form>
        </>
    )
} else {
    return "Loading..."
}
}

export default EditCard;