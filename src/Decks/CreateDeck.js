function CreateDeck () {
    return (
        <>
        <h1>Create Deck</h1>
    <form>
        <div>
            <label>Name</label>
            <input type="name" name="name" placeholder="Deck Name"></input>
            <label>Description</label>
            <textarea type="text" name="description" placeholder="Bried description of the deck"></textarea>
        </div>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
        </>
    )
}

export default CreateDeck;