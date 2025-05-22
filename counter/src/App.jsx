import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter == 0 || counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    } else {
      alert("20 se uper ni jye ga");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("0 se nichy ni jye ga");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
