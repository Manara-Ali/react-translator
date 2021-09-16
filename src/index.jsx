// 1. IMPORT REACT
import React from "react";

// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";

// 3. ADDITIONAL IMPORTS
import "semantic-ui-css/semantic.min.css";
import App from "./components/App";

// 4. AUTO RELOAD
if (module.hot) {
  module.hot.accept();
}

// 5. RENDER COMPONENTS TO THE SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
