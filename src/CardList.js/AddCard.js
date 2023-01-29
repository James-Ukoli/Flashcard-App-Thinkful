

function AddCard () {

//const [deck, setDeck] = useState({}) // 1/28 empty array for now, but initial value is actually deck data from api call.

// const initialFormState = {
//      id: "",
//      front: "",
//      back: "",
//      deckId: ""
// }

const changeHandler = () => {
///bracket notation to access keys to add input values to initialFormState
}

const submitHandler = () => {
//clear inputs
}

    return (
        <>
        <h2>React Router: Add Card</h2>
    <form>
        <div>
            <label>Front</label>
            <textarea type="text" name="front" placeholder="Front side of card" onChange={changeHandler}></textarea> 
            <label>Back</label>
            <textarea type="text" name="back" placeholder="Back side of card" onChange={changeHandler}></textarea>
        </div>
        <div>
            <button>Done</button>
            <button type={submitHandler}>Save</button>
        </div>
    </form>
        </>
    )
}

export default AddCard;