import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "[]{}:'/<>!@#$%^&*()?";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 12);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-xl rounded-2xl px-6 py-6 my-12 bg-gray-800 text-white">
        <h1 className="mb-6 text-center font-extrabold text-3xl tracking-wide text-amber-400">
          Password Generator
        </h1>
        <div className="flex rounded-xl overflow-hidden mb-6 border-2 border-gray-600">
          <input
            type="text"
            value={password}
            className="text-gray-900 outline-none w-full py-3 px-4 bg-white font-semibold text-lg tracking-wide"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-5 py-2 text-base font-semibold transition-all duration-200"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={10}
              max={50}
              value={length}
              className="cursor-pointer w-40 accent-amber-400"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-gray-300 font-medium">Length:{length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((pre) => !pre);
              }}
              className="accent-amber-500 w-4 h-4"
            />
            <label htmlFor="numberInput" className="text-gray-200 font-medium">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="accent-amber-500 w-4 h-4"
            />
            <label
              htmlFor="characterInput"
              className="text-gray-200 font-medium"
            >
              Symbols
            </label>
          </div>

          <button
            onClick={passwordGenerator}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2 rounded-xl text-base font-bold transition-all duration-200"
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
