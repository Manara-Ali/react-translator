// 1. IMPORT REACT
import React, { useState } from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const Dropdown = (props) => {
  // Create a state  variable to keep track of the state of the dropdown
  const [open, setOpen] = useState(false);

  // Create a list of all the languages in your dropdown
  const listOfLanguages = props.options.map((element, index) => {
    return (
      <div
        key={index}
        className="item"
        onClick={() => {
          props.setLanguage(element);
        }}
      >
        {element.languageName}
      </div>
    );
  });
  console.log(open);
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select Translation Language</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.language.languageName}</div>
          <div
            className={`menu ${open ? "visible transition" : ""}`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {listOfLanguages}
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. EXPORT THAT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default Dropdown;
