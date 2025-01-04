import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [displayText, setDisplayText] = useState("");
  const [backgroundColor, setBackGroundColor] = useState('#ffffff');
  

  const sounds = [

    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        id: "Heater-1",
        key: "q",
        color: "#FF6F61", // Coral
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        id: "Heater-2",
        key: "w",
        color: "#FFD166", // Pastel Yellow
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        id: "Heater-3",
        key: "e",
        color: "#06D6A0", // Mint Green
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        id: "Heater-4",
        key: "a",
        color: "#118AB2", // Blue
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        id: "Heater-6",
        key: "s",
        color: "#073B4C", // Dark Blue
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        id: "Dsc_oh",
        key: "d",
        color: "#EF476F", // Pink
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        id: "Kick_n_Hat",
        key: "z",
        color: "#FF9F1C", // Orange
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        id: "RP4_KICK_1",
        key: "x",
        color: "#8338EC", // Purple
    },
    {
        link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        id: "Cev_H2",
        key: "c",
        color: "#3A86FF", // Light Blue
    },
];


  function handleClick(key, id, color) {
    const audioElement = document.getElementById(key.toUpperCase());
    audioElement.play();
    setDisplayText(id);
    setBackGroundColor(color)

  }

  function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const sound = sounds.find((item) => item.key === key);
    if (sound) {
      handleClick(sound.key, sound.id);
    }
  }

  useEffect(()=>{
    document.body.style.backgroundColor = backgroundColor;

  },[backgroundColor])



  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machin">
      
        <div id="display" className="h2 my-5 text-bg-dark">
          {displayText}
        
      </div>
      <div className="drum-buttons">
        {sounds.map((item) => (
          <button
            className="drum-pad"
            id={item.id}
            onClick={() => {handleClick(item.key, item.id, item.color)}}
          >
            <audio
              className="clip"
              src={item.link}
              id={item.key.toUpperCase()}
            ></audio>
            {item.key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;
