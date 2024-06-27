"use client";
import React, { useState } from "react";

const Task = () => {
  const [inputValues, setInputValues] = useState(["", ""]);
  let counter = 0;

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleButtonClick = () => {
    inputValues.map((input) => {
      if (input.trim() === "") {
        counter++;
      }
    });

    if (counter === 3) {
      alert("Please complete at least 3 todos before adding more");
    } else if (inputValues.length < 10) {
      setInputValues([...inputValues, ""]);
    } else {
      alert("You can only add up to 10 todos");
    }
  };

  return (
    <div className="tasks">
      <button type="button" onClick={handleButtonClick}>
        Add
      </button>

      <div className="tasks-list">
        <input
          type="text"
          value={inputValues[0]}
          onChange={(event) => handleInputChange(0, event)}
        />
        <input
          type="text"
          value={inputValues[1]}
          onChange={(event) => handleInputChange(1, event)}
        />

        {inputValues.slice(2).map((value, index) => (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleInputChange(index + 2, event)}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;
