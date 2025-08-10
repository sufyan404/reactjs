import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (num) {
      str += '0123456789';
    }
    if (char) {
      str += '[]{}:/<>!@#$%^&*()?';
    }

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 4)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, num, char, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-800 bg-gray-900'>
        <h1 className='text-white text-center pt-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mx-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-3 bg-white my-4 rounded-2xl'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className='outline-none py-2 px-3 bg-blue-700 my-4 rounded-r-2xl ml-[-45px] text-white'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 m-4'>
            <input
              type='range'
              min={8}
              max={14}
              value={length}
              className='cursor-pointer'
              onChange={e => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={num}
              id='numberInput'
              onChange={() => {
                setNum(prev => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={char}
              id='numberInput'
              onChange={() => {
                setChar(prev => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
