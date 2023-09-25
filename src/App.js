import React, { useState } from "react";
import DateComponent from "./Components/Date";
import "./App.css";
import Welcome from "./Components/Welcome";

let App = () => {
  // return (
  //   <div className="App">
  //     <Welcome name='ahmed' age='51' phoneNumber = '324234'/>
  //   </div>
  // );
  let [count, setCount] = useState(0);
  // same as
  // count  = usestate[0]
  // setCount  = usestate[1]
  let increment = () => {
    setCount(count + 1);
  };6

  let decrement = () => {
    setCount(count - 1);
  };
زز
  return (
    <div className="App">
      <h1>Change Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1> {count}</h1>
    </div>
  );
};

export default App;
