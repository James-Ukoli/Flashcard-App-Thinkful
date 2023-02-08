import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { readDeck } from "../utils/api";

function AddCard () {
const params = useParams()
const deckId = params.deckId
    //const [deck, setDeck] ()= useState({}) // 1/28 empty array for now, but initial value is actually deck data from api call.
    
const initialFormState = {
        front: "",
        back: "",
        deckId: ""
    }
    
const [formData, setFormData] = useState({...initialFormState})

const changeHandler = ({target}) => {
const value = target.value
setFormData({
    ...initialFormState,
    [target.name]: value, /// updating the intial form state key with new input valyes
})

///bracket notation to access keys to add input values to initialFormState
}

useEffect(()=>{
    async function loadData () {
        try {
        console.log(readDeck(deckId))
           
        } catch (error) {
            
        }
    }
    loadData()
},[deckId])

const submitHandler = () => {
//clear inputs
setFormData({...initialFormState})
}

    return (
        <>
        <h2>React Router: Add Card</h2>
    <form>
        <div>
            <label>Front</label>
            <br/>
            <textarea type="text" name="front" placeholder="Front side of card" onChange={changeHandler} value={formData.front}></textarea> 
            <br/>
            <label>Back</label>
            <br/>
            <textarea type="text" name="back" placeholder="Back side of card" onChange={changeHandler} value={formData.back}></textarea>
            <br/>
            <Link to="">Done</Link>
            <button type={submitHandler}>Save</button>
        </div>
    </form>
        </>
    )
}

export default AddCard;