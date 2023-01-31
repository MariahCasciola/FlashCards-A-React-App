import React from "react";
import Header from "./Header";
import CreateDeckButton from "./Home/CreateDeckButton";
import DeckList from "./Home/DeckList";
import NotFound from "./NotFound";
import DeckScreen from "./Decks/DeckScreen";
import CreateDeckScreen from "./Decks/CreateDeckScreen";
import { Route, Switch } from "react-router-dom";
import StudyScreen from "./Decks/Study/StudyScreen";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* DONE: Implement the screen starting here */}
        <Switch>
          {/* Home view */}
          <Route exact path="/">
            <CreateDeckButton />
            <DeckList />
          </Route>

          {/* CreateDeckScreen view */}
          <Route path="/decks/new">
            <CreateDeckScreen />
          </Route>

          {/* DeckScreen view */}
          <Route path="/decks/:deckId">
            <DeckScreen />
          </Route>

          {/* NotFound view */}
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
