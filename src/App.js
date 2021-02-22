import "./styles.css";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [color, setColor] = useState("blue");
  const colorP = useRef();

  // accepts 2 params, 1 callback function
  // 2 dependencyList
  // replaces componentDidMount, componentDidUpdate
  // componentWillDestroy

  // equivalent to componentDidMount
  useEffect(() => {
    console.log("called when component mounts");
  }, []);

  // equivalent to componentDidUpdate
  useEffect(() => {
    console.count("changes on every update");
  });

  useEffect(() => {
    console.count("called when color changes");
    console.log(colorP.current.value);
  }, [color]);

  // equivalent to componentWillDestroy
  useEffect(() => {
    const instance = setInterval(() => {
      // console.count("called every second");
    }, 5000);
    return () => clearInterval(instance);
  });

  function handleChangeColor() {
    if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }
  }

  function handleColorInput(evt) {
    evt.preventDefault();
    setColor(evt.target.value);
  }

  return (
    <div className="App">
      <p style={{ color: color }}>This color is {color} </p>
      <input
        ref={colorP}
        type="text"
        value={color}
        onChange={handleColorInput}
      />
      <button onClick={handleChangeColor}>Change color</button>
    </div>
  );
}
