import React, { useState } from "react";

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Select an option:</label>
      <select id="options" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select an option--</option>
        <option value="option1">1</option>
        <option value="option2">2</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  );
}

export default DropdownMenu;
