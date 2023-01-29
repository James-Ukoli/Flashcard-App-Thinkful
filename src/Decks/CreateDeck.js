import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck () {
    const history = useHistory();
    const initialFormState = {
        name: "",
        description: "",
    }

const [formData, setFormData] = useState({...initialFormState})

    const changeHandler = ({target}) => {
    setFormData({
        ...formData,
    [target.name]: target.value
    })
        // bracket notation 
    }

    const submitHandler = (event) => {
    event.preventDefault();
        // clear
    const additionalDecks = createDeck(formData)
    history.push(`/decks/${additionalDecks.id}`)
    setFormData({...initialFormState})

    }


    return (
        <>
        <h1>Create Deck</h1>
    <form onSubmit={submitHandler}>
        <div>
            <label>Name</label>
            <input type="name" name="name" onChange={changeHandler} placeholder="Deck Name" value={formData.name}></input>
            <label>Description</label>
            <textarea type="text" name="description" onChange={changeHandler} placeholder="Bried description of the deck" value={formData.description}></textarea>
        </div>
        <div>
            <button>Cancel</button>
            <button type="submit">Submit</button>
        </div>
    </form>
        </>
    )
}

export default CreateDeck;