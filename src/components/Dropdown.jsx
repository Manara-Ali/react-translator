// 1. IMPORT REACT
import React, { useState, useEffect, useRef } from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const Dropdown = (props) => {
  // Create a state  variable to keep track of the state of the dropdown
  const [open, setOpen] = useState(false);

  // Create an Effect to be able to add an event listener to the body
  useEffect(() => {
    // Create a separate function for our event listener
    const bodyClick = (e) => {
      if (!formRef.current.contains(e.target)) {
        // If user clicked outside of the form then close the dropdown
        setOpen(false);
      }
    };
    document.addEventListener("click", bodyClick, { capture: true });

    // Remove event listener whenever the element stop showing on the screen
    return () => {
      document.removeEventListener("click", bodyClick, { capture: true });
    };
  }, []);

  // Create a reference to the form
  const formRef = useRef();

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

  // Show component to the screen
  return (
    <div
      className="ui form"
      onClick={() => {
        setOpen(!open);
      }}
      ref={formRef}
    >
      <div className="field">
        <label className="label">Select Translation Language</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
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
