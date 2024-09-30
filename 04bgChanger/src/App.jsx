import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightPink");
  let changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
    <div className="flex justify-center px-3 py-3  text-white " style={{backgroundColor: "black"}}>Change Color Project</div>
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "violet" }}
            onClick={() => changeColor("violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "indigo" }}
            onClick={()=> changeColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={()=> changeColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
            onClick={()=> changeColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={()=> changeColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Orange" }}
            onClick={()=> changeColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=> changeColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
