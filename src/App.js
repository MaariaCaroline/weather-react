import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Search Engine</h1>
      <Weather defaultCity="New York"/>
      <footer>
      <a href="https://github.com/MaariaCaroline/weather-react">Open-source code</a>
      </footer>
    </div>
    </div>
  );
}
