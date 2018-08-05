import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import "./app.sass";

const el = document.getElementById("react-app");
if (!el) {
    throw new Error("react-app not defined");
}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    el
);