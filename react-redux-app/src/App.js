import React from "react";
import axios from "axios";
import DataList from "./components/DataList"

import './App.css';

function App() {

  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })

  return (
    <div className="App">
      <DataList />
    </div>
  );
}



export default App;