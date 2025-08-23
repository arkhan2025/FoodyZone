import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
import Searchresults from "./Components/Searchresults/Searchresults.jsx";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

  body{
    font-family: "Outfit", sans-serif;
    background-color: #323334;
    color: white;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }
  `;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />

  </React.StrictMode>
);
