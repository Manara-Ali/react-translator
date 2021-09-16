// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS

// 3. CREATE FUNCTION BASED COMPONENT
const TextOuput = (props) => {
  return (
    <div style={{ marginTop: "50px" }}>
      {props.response ? (
        <div className="item">
          <hr
            style={{
              height: "1px",
              border: "0",
              marginBottom: "40px",
              backgroundImage:
                "-webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0)",
            }}
          />
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
