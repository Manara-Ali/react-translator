// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import Dropdown from "./Dropdown";

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Dropdown />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
