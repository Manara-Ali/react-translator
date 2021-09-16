// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const Dropdown = (props) => {
  console.log(props);
  // Create a list of all the languages in your dropdown
  const listOfLanguages = props.options.map((element, index) => {
    return (
      <div key={index} className="item">
        {element.languageName}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select Translation Language</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{props.language.languageName}</div>
          <div className="menu visible transition">{listOfLanguages}</div>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Dropdown;
