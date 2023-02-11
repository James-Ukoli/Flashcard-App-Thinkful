import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import { createDeck } from "../utils/api";

function DeckCreate () {
    const history = useHistory();
    const initialFormState = {
        name: "",
        description: "",
    }
    // const [formData, setFormData] = useState({...initialFormState})
    const [deck, setDeck] = useState({name: "", description: ""})

    const changeHandler = ({target}) => {
    setDeck({
        ...deck,
    [target.name]: target.value
    })
    }

    // const submitHandler = (event) => {
    // event.preventDefault();
    // const abortController = new AbortController();
    // async function updateData () {
    //     try {
    //         const additionalDecks = await createDeck(formData, abortController.signal)
    //         history.push(`/decks/${additionalDecks.id}`)
       
    //         setFormData({...initialFormState})
        
    //     } catch (error) {
    //         if (error.name === "AbortError") {
    //             console.log("Aborted")
    //         } else {
    //             throw error
    //         }
    //     }
    // }
    // updateData();
    // return () => abortController.abort()
    // }

    async function submitHandler (event) {
        event.preventDefault();
        const response = await createDeck(deck);
        history.push(`/decks/${response.id}`)
    }
    
 const cancelHandler = (event) => {
    event.preventDefault();
    setDeck({...initialFormState})
    }


    return (
        <div>
             <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item" key="0"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page" key="1">Create Deck</li>
                </ol>
            </nav>
        <h1>Create Deck</h1>
    <form>
        <div>
            <label>Name</label>
            <br/>
            <input type="name" name="name" onChange={changeHandler} placeholder="Deck Name" value={deck.name}></input>
            <br/>
            <br/>
            <label>Description</label>
            <br/>
            <textarea type="text" name="description" onChange={changeHandler} placeholder="Brief description of the deck" value={deck.description}></textarea>
            <br/>
            <button className="btn btn-primary" onClick={cancelHandler}>Cancel</button>
            <button onClick={submitHandler}className="btn btn-secondary" type="submit">Submit</button>
        </div>
    </form>
        </div>
    )
}

export default DeckCreate;