import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hello from "./Hello";
import Helo from "./Helo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* fragment içi */}
      <div>Alper</div>
      <div>JS ve JSX farkı?</div>
      <Hello />
      <Helo />
    </>
  );
}

export default App;
