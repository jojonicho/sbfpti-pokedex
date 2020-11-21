import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LandingPage } from "../containers/LandingPage";
import { PokemonPage } from "../containers/PokemonPage";
import { SbfSeru } from "../containers/SbfSeru";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/sbfseru" exact component={SbfSeru} />
        <Route path="/pokemon" exact component={PokemonPage} />
      </Switch>
    </BrowserRouter>
  );
};
