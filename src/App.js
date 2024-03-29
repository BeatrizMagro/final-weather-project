import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/BeatrizMagro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beatriz Magro
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/BeatrizMagro/final-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://regal-rolypoly-b0e507.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
