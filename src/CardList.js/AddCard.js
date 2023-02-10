import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCard () {
const params = useParams()
const [deck, setDeck] = useState([]); // 1/28 empty array for now, but initial value is actually deck data from api call.
const deckId = params.deckId

    
const initialFormState = {
        front: "",
        back: "",
        deckId
    }
// let formData = initialFormState
const [formData, setFormData] = useState({...initialFormState})

const changeHandler = ({target}) => {
const value = target.value
setFormData({
    ...formData,
    [target.name]: value, /// updating the intial form state key with new input valyes
})

///bracket notation to access keys to add input values to initialFormState
}

useEffect(()=>{
    async function loadData () {
        try {
        const response = await readDeck(deckId)
        setDeck(response)
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Aborted")
            } else {
                throw error;
            }
        }
    }
    loadData()
},[deckId])



const submitHandler = async (event) => {
event.preventDefault();

    const abortcontroller = new AbortController();
    try {
        const response = await createCard(deckId, {...formData}, abortcontroller.signal) //add card as second argument
        console.log("Response is", response)
        setFormData({...initialFormState})
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Aborted")
        } else {
            throw error;
        }
    }
 return () => {
 abortcontroller.abort();
 }

}

if (deck) {
    return (
        <div>
             <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" key="0"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item" key="1"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page" key="2">Add Card</li>
                    </ol>
                </nav>
                <br />
        <h2>{deck.name}: Add Card</h2>
    <form onSubmit={submitHandler}>
            <CardForm changeHandler={changeHandler} formData={formData}/>
            <Link to={`/decks/${deckId}`} className="btn btn-secondary">Done</Link> &nbsp;
            <button type="submit" className="btn btn-primary">Save</button>
    </form>
        </div>
    )
} else {
    return "Loading..."
}
}

export default AddCard;