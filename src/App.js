import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button className="btn" onClick={handlerOnClick}>
        Нажми меня
      </button>
    </div>
  );
  function handlerOnClick() {
    alert("Нажата кнопка");
  }
}
