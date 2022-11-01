import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(99);

  const handleClick = async () => {
    const { data } = await axios("http://localhost:3000/api/region");
    console.log(data);
  };

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleClick}>teman saya {count}</button>
      </div>
    </div>
  );
}

export default App;
