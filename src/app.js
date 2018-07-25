import React from "react";
import ReactDOM from "react-dom";

import styles from "./app.sass";

const App = () => <span>This site is <i>in progress</i></span>;

const el = document.getElementById("react-app");
if (!el) {
    // TODO make more user-friendly
    throw new Error();
}
ReactDOM.render(<App />, el);