import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = React.useState(null);
  const [editText, setEditText] = React.useState("");

  return (
    <>
      <h2 className="text-2xl font-semibold text-white text-center mt-12 mb-4 underline underline-offset-4 decoration-yellow-500">
        Your Todos
      </h2>

      <ul className="max-w-2xl mx-auto space-y-4 px-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-zinc-800 px-5 py-3 rounded-xl shadow-md border border-zinc-700 transition hover:scale-[1.02] duration-150"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
                className="bg-zinc-800 text-white text-lg font-medium tracking-wide px-0 py-0 border-b border-yellow-500 focus:outline-none focus:ring-0 w-full transition-all duration-150"
              />
            ) : (
              <div className="text-white text-lg font-medium tracking-wide">
                {todo.text}
              </div>
            )}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <>
                  <button
                    onClick={() => {
                      dispatch(updateTodo({ id: todo.id, text: editText }));
                      setEditId(null);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                    title="Save"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full"
                    title="Cancel"
                  >
                    ❌
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                  title="Edit"
                >
                  ✏️
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
