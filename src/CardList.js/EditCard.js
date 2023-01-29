function EditCard () {
    return (
        <>
        <h1>Edit Card</h1>
    <form>
        <div>
            <label>Front</label>
            <br></br>
            <textarea type="text" name="front" placeholder="What path will match the follow Route?"></textarea>
            <br></br>
            <label>Back</label>
            <br></br>
            <textarea type="text" name="back" placeholder="All paths. A route with no path matches all URL's"></textarea>
        </div>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
    </form>
        </>
    )
}

export default EditCard;