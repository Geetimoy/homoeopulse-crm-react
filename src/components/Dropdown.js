import React, { useState } from 'react';


export default function Dropdown() {
  const [characters, setCharacters] = useState([
    {
      label: "Select ...",
      value: "Select ..."
    },
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker"
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);

  // set dropdown value and have initial of none
  const [value, setValue] = useState("Select ...");
	
	const test = () => console.log("select value", value);

  return (
    <div className="">
      <h1>Select Character</h1>
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {characters.map((character) => (
          <option key={character.value} value={character.value}>
            {character.label}
          </option>
        ))}
      </select>
      <button onClick={(e) => test()}>submit</button>
    </div>
  );
}