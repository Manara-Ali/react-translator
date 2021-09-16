// 1. IMPORT REACT
import React, { useState } from "react";

// 2. ADDITIONAL IMPORTS
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import TextOuput from "./TextOuput";

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
    languageName: "Yoruba",
    code: "yo",
  },
  {
    languageName: "Igbo",
    code: "ig",
  },
  {
    languageName: "Arabic",
    code: "ar",
  },
  {
    languageName: "Hindi",
    code: "hi",
  },
  {
    languageName: "Russian",
    code: "ru",
  },
  {
    languageName: "Turkish",
    code: "tr",
  },
  {
    languageName: "French",
    code: "fr",
  },
];

// 3. CREATE A FUNCTION BASED COMPONENT
const App = () => {
  // Create an initial state for our language option
  const [language, setLanguage] = useState(options[0]);

  // Create a variable to keep track of the response body
  const [response, setResponse] = useState("");

  return (
    <div className="ui container" style={{ marginTop: "30px", width: "720px" }}>
      <Dropdown
        options={options}
        language={language}
        setLanguage={setLanguage}
      />
      <TextInput selectedLanguage={language} setResponse={setResponse} />
      <TextOuput response={response} />
    </div>
  );
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default App;
