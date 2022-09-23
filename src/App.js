import "./App.css";
import Boton from "./components/Boton.jsx";
import Input from "./components/Input.jsx";
import BtnClear from "./components/BtnClear";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (value) => {
    setInput(input + value);
  };

  return (
    <div className="App">
      <div className="titulo-contenedor">
        <h1 className="titulo">Calculadora</h1>
      </div>
      <div className="contenedor-calculadora">
        <Input input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BtnClear manejarClear={() => setInput("")}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
