import React, {useState, useEffect} from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import {readDeck, updateDeck} from "../utils/api/index"

function EditDeck(){
  const initialFormState = {
    name: "",
    description: "",
  };
    const params = useParams();
    const deckId = params.deckId
    const [formData, setFormData] = useState({ ...initialFormState });
    useEffect(() => {
        async function loadData() {
           try {
           const dataFromAPI = await readDeck(deckId);
           setFormData(dataFromAPI);           
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
    }, [deckId]);


    const handleChange = ({ target }) => {
        const value = target.value;
       setFormData({
       ...formData,
       [target.name]: value,
     });
    };
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("Submitted:", deck);
        async function updateData() {
           try {
            await updateDeck(formData);
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
    return (
        <div>
        <h1>Edit Deck</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <br/>
            <input type="name" name="name" placeholder="Rendering in React" onChange={handleChange} value={formData.name}></input>
            <br/>
            <label>Description</label>
            <br/>
            <textarea name="description" placeholder="React's component structure allows for quickly building a complex web application that relies on DOM Manipulation." onChange={handleChange} value={formData.description}></textarea>
        </div>
        <br/>
        <div>
            <Link to={`/decks/${deckId}`} className="btn btn-danger">Cancel</Link> &nbsp;
            <button className="btn btn-primary"type="submit">Submit</button>
        </div>
    </form>
        </div>
    )
}

export default EditDeck