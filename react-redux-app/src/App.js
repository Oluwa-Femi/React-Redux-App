import React from "react";
import axios from "axios";

import './App.css';

function App() {

  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;