import React from "react";
import logo from "./logo.svg";
import firebase from "./firebase";
import Header from "./components/Header";
import { RadioGroup, RadioButton } from "react-radio-buttons";

function createMateria() {
  const data = {
    name: "Matematica",
    nota: 8,
  };
  firebase.database().ref("materias/3").set(data);
}

function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
