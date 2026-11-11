import { useState } from "react";
//useState is a React hook that allows you to add state to functional components.
//useEffect is a React hook that allows you to perform side effects in functional components.
//useContext is a React hook that allows you to access the context value in functional components.
//useRef is a React hook that allows you to create a mutable reference that persists across renders.

function App() {
  const [bgColor, setBgColor] = useState("red");
  const handleBlue = () => setBgColor("blue");
  const handleGreen = () => setBgColor("green");
  const handleYellow = () => setBgColor("yellow");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        textAlign: "center",
      }}>
      <h1> React State and Events</h1>
      <button type="button" onClick={handleBlue}>
        Blue
      </button>
      <button type="button" onClick={handleGreen}>
        Green
      </button>
      <button type="button" onClick={handleYellow}>
        Yellow
      </button>
    </div>
  );
}

export default App;
