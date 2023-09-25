import React, { useState } from "react";
import "../App.css";
function Form() {
  const [inputValue, setInputValue] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(inputValue);
    history.push("/about", { state: data });
  };
  
  return (
    <div className="App">
      <h1>Form </h1>
      <form onChange={handleSubmit}>
        <label>
          Enter some data:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <p>Submitted Data:</p>
          <h1>{submittedData}</h1>
        </div>
      )}
    </div>
  );
}

export default Form;
