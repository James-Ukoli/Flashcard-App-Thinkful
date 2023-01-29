import React from "react";
import {Link} from "react-router-dom";
import ListDecks from "../Decks/ListDecks";

function Home() {
return (
<>
    <Link to="/decks/new">+ Create Deck</Link>
    <ListDecks/>
</>
    )
}

export default Home
