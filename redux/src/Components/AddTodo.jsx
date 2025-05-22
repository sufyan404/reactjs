import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 px-4"
    >
      <input
        type="text"
        className="w-full sm:w-80 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-yellow-500 focus:ring-2 focus:ring-green-500 rounded-xl px-4 py-3 text-base shadow-inner transition duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-green-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:from-green-600 hover:to-yellow-600 transition duration-200 text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
