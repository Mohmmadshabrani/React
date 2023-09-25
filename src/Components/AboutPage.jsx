import React from "react";
import "../App.css";
import {useLocation} from 'react-router-dom';


export default function AboutPage(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <h1>AboutPage</h1>
      <h2>
        {location.state.username}
      </h2>
      <h2>
        {location.state.email}
      </h2>
    </div>
  );
}
