import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import DeckCreate from "../Decks/DeckCreate";
import AddCard from "../CardList.js/AddCard";
import Study from "../Decks/Study";
import EditCard from "../CardList.js/EditCard";
import Deck from "../Decks/Deck";
import EditDeck from "../Decks/EditDeck";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            < Home/>
          </Route>
          <Route path="/decks/new">
            <DeckCreate/>
          </Route>
          <Route exact path={'/decks/:deckId'}>
            <Deck/>
          </Route>
          <Route path={'/decks/:deckId/edit'}>
            <EditDeck/>
          </Route>
          <Route path={'/decks/:deckId/study'}>
            <Study/>
          </Route>
          <Route path={'/decks/:deckId/cards/new'}>
            <AddCard/>
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>
          <Route>
              <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
