import React, { useState } from "react";

export default function Calculator() {
  let [result, setResulta] = useState(0);
  let [FN, setFN] = useState(0);
  let [SN, setSN] = useState(0);
  let [OPa, setOP] = useState(0);
  function Setoperation(e) {
    // console.log("Value",parseInt(e.target.value));
    setOP(parseInt(e.target.value));
  }
  function SetFirstNumber(e) {
    setFN(parseInt(e.target.value));
  }
  function SetSecondNumber(e) {
    setSN(parseInt(e.target.value));
  }
  function SetR(e) {
    console.log("opa", OPa);

    switch (OPa) {
      case 1:
        setResulta(FN + SN);
        return;
      case 2:
        setResulta(FN - SN);
        return;
      case 3:
        setResulta(FN * SN);
        return;
      case 4:
        setResulta(FN / SN);
        return;
    }
  }
  return (
    <>
      <div>calculator</div>
      <hr />
      <input onChange={SetFirstNumber} type="number" name="firstNumebr" />
      <select onChange={Setoperation} name="operatetion">
        <option value="1">+</option>
        <option value="2">-</option>
        <option value="3">*</option>
        <option value="4">/</option>
      </select>
      <input type="number" onChange={SetSecondNumber} name="secondNumber" />
      <button onClick={SetR}>Calculate</button>
      <h2>{result}</h2>
    </>
  );
}
