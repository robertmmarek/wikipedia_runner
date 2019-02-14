import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

ReactDOM.render(<App />, document.getElementById("root"));