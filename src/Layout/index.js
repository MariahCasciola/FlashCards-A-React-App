import React from "react";
import Header from "./Header";
import CreateDeckButton from "./Home/CreateDeckButton";
import DeckList from "./Home/DeckList";
import NotFound from "./NotFound";
import { Route, Switch} from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* DONE: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <CreateDeckButton />
            <DeckList />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
