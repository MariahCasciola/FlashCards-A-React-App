import React from "react";
import Header from "./Header";
import CreateDeckButton from "./Home/CreateDeckButton";
import DeckList from "./Home/DeckList";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import Decks from "./Decks/index";

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

          {/* Decks view */}
          <Route path="/decks">
            <Decks />
          </Route>

          {/* NotFound view */}
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
