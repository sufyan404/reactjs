// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name1, setName] = useState("Sufiyan");
  console.log(name1);

  return (
    <>
      <div className="bg-gray-200 flex justify-center">
        <h1 className="bg-blue-500 p-4 rounded-full text-white text-xl font-bold shadow-2xl w-fit mt-8 mb-8">
          Profile list
        </h1> 
      </div>
      <div className="bg-gray-200 flex flex-wrap gap-14 justify-center min-h-screen pb-10">
        <Card name={name1} setName={setName} btnText="Click me" />
        <Card name={"Ali"} btnText="Visit me" />
        <Card name="Asad" />
        <Card name={"Faiz"} />
      </div>
    </>
  );
}

export default App;
