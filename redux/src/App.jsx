import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <h1 className="mx-6 mt-6 text-4xl font-extrabold text-white bg-gradient-to-r from-yellow-600 to-green-600 py-4 px-6 rounded-lg shadow-lg text-center">
        Learn about Redux Toolkit
      </h1>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
