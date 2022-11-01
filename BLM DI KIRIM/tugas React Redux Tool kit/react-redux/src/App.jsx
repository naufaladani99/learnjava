import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Employee from "./Employee/Employee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Employee />
    </div>
  );
}

export default App;
