import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import "./App.sass";

import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Profile from "./Profile";

export const App = () =>
    <div className="app">
        <Switch>
            <Route exact path="/" component={Profile} />
            <Redirect to="/" />
        </Switch>
    </div>;

export default App;