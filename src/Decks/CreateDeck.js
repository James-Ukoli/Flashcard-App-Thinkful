import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { createDeck, } from "../utils/api";

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
    async function updateData () {
        try {
            const additionalDecks = await createDeck(formData)
            history.push(`/decks/${additionalDecks.id}`)
            setFormData({...initialFormState})
        } catch (error) {
            if (error.name === "AbortError") {
                console.log("Aborted")
            } else {
                throw error
            }
        }
    }
    updateData();
    }
    
 const cancelHandler = (event) => {
    event.preventDefault();
    setFormData({...initialFormState})
    }


    return (
        <>
        <h1>Create Deck</h1>
    <form onSubmit={submitHandler}>
        <div>
            <label>Name</label>
            <br/>
            <input type="name" name="name" onChange={changeHandler} placeholder="Deck Name" value={formData.name}></input>
            <br/>
            <br/>
            <label>Description</label>
            <br/>
            <textarea type="text" name="description" onChange={changeHandler} placeholder="Brief description of the deck" value={formData.description}></textarea>
            <br/>
            <button className="btn btn-primary" onClick={cancelHandler}>Cancel</button>
            <button className="btn btn-secondary" type="submit">Submit</button>
        </div>
    </form>
        </>
    )
}

export default CreateDeck;