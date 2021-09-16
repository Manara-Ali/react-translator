// 1. IMPORT REACT
import React, { useEffect, useState } from "react";

// 2. ADDITIONAL IMPORTS
// import axios from "axios";
import api from "../googleApi/api";

// 3. CREATE A FUNCTION BASED COMPONENT
const TextInput = (props) => {
  // Create a state variable to store user's inputs
  const [userInput, setUserInput] = useState("");

  // Create a variable to store the selected language coming from props
  let languageCode = props.selectedLanguage.code;

  // Create a helper function to keep track of what the user is typing
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Create an Effect to make API calls
  useEffect(() => {
    // Create a helper function to make asynchronous calls
    const helperFunction = async () => {
      try {
        const response = await api.post(
          "/",
          {},
          {
            params: {
              q: `${userInput}`,
              target: `${languageCode}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    // Now I need to invoke the helper function to make the request
    if (userInput) {
      helperFunction();
    }
  }, [languageCode, userInput]);

  // Render component to the screen
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
