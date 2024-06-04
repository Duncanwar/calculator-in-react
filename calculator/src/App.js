import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setpreviousInput] = useState("");
  const [operation, setOperation] = useState("");

  const handleNumber = (value) => {
    setCurrentInput(currentInput + value);
  };
  const handleOperator = (op) => {
    setOperation(op);
    setpreviousInput(currentInput);
    setCurrentInput("");
  };
  const handleCalculate = () => {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    // eslint-disable-next-line default-case
    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        if (curr === 0) result = "Error: Division by zero";
        else result = prev / curr;
        break;
      default:
        result = "Error";
    }
    setCurrentInput(result.toString());
    setpreviousInput("");
    setOperation(null);
  };
  const handleClear = () => {
    setCurrentInput("");
    setpreviousInput("");
    setOperation(null);
  };
  return (
    <div className="App">
      <div className="calculator-display">{currentInput || "0"}</div>
      <div className="button-container">
        <Button handleClick={handleNumber} value="7" />
        <Button handleClick={handleNumber} value="8" />
        <Button handleClick={handleNumber} value="9" />
        <Button handleClick={handleOperator} value="/" orange />
        <Button handleClick={handleNumber} value="4" />
        <Button handleClick={handleNumber} value="5" />
        <Button handleClick={handleNumber} value="6" />
        <Button handleClick={handleOperator} value="*" orange />
        <Button handleClick={handleNumber} value="1" />
        <Button handleClick={handleNumber} value="2" />
        <Button handleClick={handleNumber} value="3" />
        <Button handleClick={handleOperator} value="-" orange />
        <Button handleClick={handleClear} value="C" red />
        <Button handleClick={handleNumber} value="0" />
        {/* <Button handleClick={handleDecimal} value="." /> */}
        <Button handleClick={handleOperator} value="+" orange />
        <Button handleClick={handleCalculate} value="=" green />
      </div>
    </div>
  );
}

export default App;
