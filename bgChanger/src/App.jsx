// import { useState } from 'react'
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Olive");

  const handlColor = (col) => {
    setColor(col);
  };
  return (
    <div
      className="h-screen w-full duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center top-16 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-amber-50 px-4 py-2 rounded-full">
          <button
            onClick={() => handlColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handlColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
