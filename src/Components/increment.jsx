import React, { useState } from "react";

export default function Increment() {
  let [count, setCount] = useState(0);
  function handleInc() {
    setCount(count++);
  }
  function handleDec() {
    setCount(count--);
  }
  return (
    <>
      <div>increment</div>
      <h1>{count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </>
  );
}