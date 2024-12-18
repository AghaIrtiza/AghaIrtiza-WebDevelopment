// App.js
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputString, setInputString] = useState(""); // Stores the user's input string
  const [isEditable, setIsEditable] = useState(false); // Controls whether the input is editable
  const [searchKey, setSearchKey] = useState(""); // Stores the input for searching
  const [prediction, setPrediction] = useState(""); // Stores the predicted next character
  const [charCount, setCharCount] = useState(10); // Stores the number of characters for prediction

  // Load the string from local storage when the component mounts
  useEffect(() => {
    const storedString = localStorage.getItem("userInputString");
    if (storedString) {
      setInputString(storedString); // Load the stored string into state
    }
  }, []);

  // Save the input string to local storage
  const saveString = () => {
    localStorage.setItem("userInputString", inputString);
    setIsEditable(false); // Disable editing after saving
    alert("String saved successfully!");
  };

  // Toggle editing mode
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  // Add character to the input string
  const addCharacter = (char) => {
    setInputString((prev) => prev + char);
  };

  // Handle changes in the input string (validate input)
  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert to uppercase
    if (/^[TDE]*$/.test(value)) {
      setInputString(value); // Update only if valid
    }
  };

  // Handle changes in the search key (validate input)
  const handleSearchChange = (e) => {
    const value = e.target.value.toUpperCase(); // Convert to uppercase
    if (/^[TDE]*$/.test(value)) {
      setSearchKey(value); // Update only if valid
    }
  };

  // Handle changes in the character count
  const handleCharCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCharCount(value); // Update only if valid
    } else {
      alert("Please enter a valid positive number!");
    }
  };

  // Predict the next character
  const predictNextCharacter = () => {
    if (searchKey.length !== charCount) {
      alert(`Please enter exactly ${charCount} characters for the search!`);
      return;
    }

    const index = inputString.indexOf(searchKey); // Find the first occurrence of the searchKey
    if (index === -1 || index + charCount >= inputString.length) {
      setPrediction("No predictions available.");
      return;
    }

    // Get the character that comes immediately after the match
    const nextChar = inputString.charAt(index + charCount);
    setPrediction(`Prediction is: "${nextChar}"`);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ textAlign: "center", padding: "20px", color: "#ffffff" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#4CAF50", marginBottom: "10px" }}>
          Character Prediction App
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#ddd", margin: "20px 20px" }}>
          Enter or update a sequence of characters using <b>T, D,</b> and <b>E</b>.
        </p>
        {/* Input string and Edit/Save button */}
        <div className="input-container">
          <textarea
            placeholder="Enter a string (T, D, E only)..."
            value={inputString}
            onChange={handleInputChange}
            rows={4}
            cols={50}
            disabled={!isEditable}
          ></textarea>
          <button className="edit-button" onClick={toggleEditable}>
            {isEditable ? "Save Correction" : "Make Correction"}
          </button>
        </div>

        {/* Add character buttons */}
        <div className="char-buttons">
          <button style={{ backgroundColor: "purple" }} onClick={() => addCharacter("D")}>D</button>
          <button style={{ backgroundColor: "brown" }} onClick={() => addCharacter("T")}>T</button>
          <button style={{ backgroundColor: "green" }} onClick={() => addCharacter("E")}>E</button>
          <button className="edit-button" onClick={saveString}>
            Save
          </button>
        </div>

        {/* Set character count */}
        <div className="char-count-container">
          <label htmlFor="charCount" style={{ marginRight: "10px", color: "#fff" }}>
            Set number of characters for prediction:
          </label>
          <input
            id="charCount"
            type="number"
            value={charCount}
            onChange={handleCharCountChange}
            min="1"
          />
        </div>

        {/* Search input */}
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder={`Enter ${charCount} characters to search (T, D, E only)...`}
            value={searchKey}
            onChange={handleSearchChange}
          />
          <button onClick={predictNextCharacter}>Predict</button>
        </div>

        {/* Display Prediction */}
        <div className="prediction">
          <p>{prediction}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
