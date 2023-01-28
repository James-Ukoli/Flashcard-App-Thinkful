function EditDeck () {
    return (
        <>
        <h1>Edit Deck</h1>
    <form>
        <div>
            <label>Name</label>
            <input type="name" name="name" placeholder="Rendering in React"></input>
            <label>Description</label>
            <textarea type="text" name="description" placeholder="React's component structure allows for quickly building a complex web application that relies on DOM Manipulation."></textarea>
        </div>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
        </>
    )
}

export default EditDeck