// 1. IMPORT REACT
import React, { useState } from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE A FUNCTION BASED COMPONENT
const TextInput = () => {
  // Create a state variable to store user's inputs
  const [userInput, setUserInput] = useState("");
  // Create a helper function to keep track of what the user is typing
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Enter a Word</label>
          <input
            type="text"
            onChange={(e) => {
              return handleChange(e);
            }}
            value={userInput}
          />
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default TextInput;
