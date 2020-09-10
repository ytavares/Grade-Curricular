import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

function createMateria() {
  const data = {
    name: "Programação",
    nota: 7,
  };
  firebase.database().ref("materias/").set(data);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={(e) => createMateria()}>ENVIAR</button>
      </header>
    </div>
  );
}

export default App;
