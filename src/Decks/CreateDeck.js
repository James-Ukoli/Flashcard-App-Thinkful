import {useState} from "react-router-dom";

function CreateDeck () {
    const initialFormState = {
        name: "",
        description: "",
    }

const [formData, setFormData] = useState(initialFormState)

    const changeHandler = (event) => {
        // bracket notation 
    }

    const submitHandler = () => {
        // clear
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