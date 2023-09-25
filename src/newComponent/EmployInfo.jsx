import React from "react";

export default function Info(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h2>Someone out there</h2>
    </>
  );
}
