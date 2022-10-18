import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [area, setArea] = useState(0);
  return (
    <div className="App">
      <h1>Area Of Square</h1>
      <h5>Enter the side of square -</h5>
      <input onChange={calArea} placeholder="0"></input>
      <h2>Area = {area}</h2>
    </div>
  );
  function calArea(event) {
    var userInput = event.target.value;
    var area = userInput * userInput;
    setArea(area);
  }
}
