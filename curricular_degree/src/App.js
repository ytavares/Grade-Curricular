import React from "react";
import logo from "./logo.svg";

import firebase from "./firebase";
import Header from "./components/Header";

function createMateria() {
  const data = {
    name: "Programação 2",
    nota: 7,
  };
  firebase.database().ref("materias").set(data);
}

function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
