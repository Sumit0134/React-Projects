import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-white">Background Changer</h1>
      <div className="fixed bg-white bottom-12 px-4 py-2 flex flex-wrap justify-center items-center m-4 gap-4 shadow-md">
        <button
          className="bg-red-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-red-600"
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          className="bg-green-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-green-600"
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
          onClick={changeColor}
        >
          blue
        </button>
        <button
          className="bg-purple-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-purple-600"
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-yellow-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-yellow-600"
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          className="bg-black text-white rounded-md px-4 py-2 cursor-pointer hover:bg-black-600"
          onClick={() => setColor("black")}
        >
          black
        </button>
      </div>
    </div>
  );
}

export default App;
