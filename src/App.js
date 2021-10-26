
import React, { useState } from "react";
import './App.css';

const DEFAULT_COLOR = "#fff";
const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function App() {
  const [color, setColor] = useState(DEFAULT_COLOR);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * HEX.length);
  };

  const handleClick = i => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += HEX[getRandomNumber()];
    }
    setColor(hexColor);
  };

  const FlipperButton = ({onClick, text}) => {
    return <button class="main-btn" onClick={onClick}>{text}</button>;
  };
  const FlipperContainer = () =>{
    return <h1>Background Color:{" "}<span>{color}</span></h1>
  }

  return (
    <div class="app">
      <style>{`body {background-color: ${color}}`}</style>
      <div class="container">
        <FlipperContainer text="background color:"/>
      </div>
      <FlipperButton text="Click Me" onClick={handleClick}/>
    </div>
  );
}

export default App;

