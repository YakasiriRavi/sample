import { useState } from "react";
import './App.css';
import Parent from "./parentComp/Parent";
function App() {
  // BABEL will convert JSX TO VANILLA JS OR PLAIN JS---> THIS WILL UNDERSTOOD BY THE BROWSER.
  const [initialState, setInitialState] = useState("Seshu")
  const [value, setValue] = useState("")
  return (
    <div className="App">
      <h1>Parent Section</h1>
      <h2>Sreenu</h2>
      <h2>Anil</h2>
      <Parent />
    </div>
  );
}

export default App;
