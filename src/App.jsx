import { useState } from "react";

function App() {
  const [buttonData, setButtonData] = useState([
    {
      color: "#dc2626",
      text: "Red",
      textColor: "#27272a",
    },
    {
      color: "#2563eb",
      text: "Blue",
      textColor: "#27272a",
    },
    {
      color: "#9333ea",
      text: "Purple",
      textColor: "#27272a",
    },
    {
      color: "lavender",
      text: "Lavender",
      textColor: "#27272a",
    },
    {
      color: "yellow",
      text: "Yellow",
      textColor: "#27272a",
    },
    {
      color: "white",
      text: "Light",
      textColor: "#27272a",
    },
    {
      color: "#27272a",
      text: "Dark",
      textColor: "#f4f4f5",
    },
  ]);

  const [bgColor, setBgColor] = useState("#27272a");

  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center justify-center max-w-4/5 h-16 bg-zinc-100 absolute top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full px-5">
        {buttonData.map((obj, index) => (
          <button
            onClick={() => setBgColor(obj.color)}
            key={index}
            className="px-8 py-2 rounded-full font-bold text-sm mx-2"
            style={{ backgroundColor: obj.color, color: obj.textColor }}
          >
            {obj.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
