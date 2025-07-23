import { useState } from "react";
import './App.css';
import Main from "./components/main";
import Parent from "./parentComp/Parent";
function App() {
  // BABEL will convert JSX TO VANILLA JS OR PLAIN JS---> THIS WILL UNDERSTOOD BY THE BROWSER.
  const [initialState, setInitialState] = useState("Seshu")
  const [value, setValue] = useState("")
  return (
    <div className="App">
     <Main/>
    </div>
  );
}

export default App;
