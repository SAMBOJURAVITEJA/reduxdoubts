import React from "react";
import ReactDOM from "react-dom";
import Count from "./App.js"; // Correct import path
import { Provider } from "react-redux";
import store from "./Components/Store.js"; // Correct import path


ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById("root")
);
