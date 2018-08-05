import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import "./App.sass";

import Portfolio from "./Portfolio";
import Timeline from "./Timeline";
import Profile from "./Profile";

export const App = () =>
    <div className="app">
        <Profile />
        <div className="auxillary-view">
            <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/timeline" component={Timeline} />
                {/* Catch-all route */}
                <Redirect to="/" />
            </Switch>
        </div>
    </div>;

export default App;