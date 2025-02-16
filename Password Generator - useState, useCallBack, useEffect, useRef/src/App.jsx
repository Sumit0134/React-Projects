import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers) str += "0123456789";
    if (characters) str += "[]{}+-()%$&^!@`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbers, characters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="bg-gray-800 max-w-lg w-full p-6 rounded-lg shadow-lg text-white">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Password Generator
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="text"
            value={password}
            className="bg-white text-black w-full rounded-md p-3 outline-none text-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 transition p-3 rounded-md text-white font-semibold w-full sm:w-auto"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="w-full cursor-pointer accent-blue-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="text-lg font-medium">Length: {length}</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numbers}
                onChange={() => setNumbers((prev) => !prev)}
                className="w-4 h-4 accent-blue-500"
              />
              Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={characters}
                onChange={() => setCharacters((prev) => !prev)}
                className="w-4 h-4 accent-blue-500"
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
