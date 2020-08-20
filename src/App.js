import React from "react";
import "./styles.css";
import Signin from "./signin";
import Demo from "./demo";
import Load from './load';

export default function App() {
  var name="bhava";
  return (
    <div className="App">
      <Signin/>
      <Load/>
    </div>
  );
}
