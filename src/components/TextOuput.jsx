// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const TextOuput = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      {props.response ? (
        <div className="item">
          <label style={{ fontSize: "20px" }}>{props.response}</label>
          <div className="ui teal tag label" style={{ marginLeft: "30px" }}>
            Translation
          </div>
        </div>
      ) : null}
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default TextOuput;
