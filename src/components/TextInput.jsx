// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A FUNCTION BASED COMPONENT
const TextInput = () => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Enter a Word</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default TextInput;
