// 1. IMPORT REACT
import React, { useState } from "react";

// 2. ADDITIONAL IMPORTS
import Dropdown from "./Dropdown";

// Static Data
const options = [
  {
    languageName: "Swahili",
    code: "sw",
  },
  {
    languageName: "Kinyarwanda",
    code: "rw",
  },
  {
    languageName: "Afrikaanas",
    code: "af",
  },
  {
    languageName: "French",
    code: "fr",
  },
  {
    languageName: "Spanish",
    code: "es",
  },
  {
    languageName: "Mongolian",
    code: "mn",
  },
];

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  // Create an initial state for our language option
  const [language, setLanguage] = useState(options[0]);

  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Dropdown
        options={options}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
