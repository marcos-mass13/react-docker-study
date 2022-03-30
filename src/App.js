// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
// import Time from "./components/Time/Time";
// import Input from "./core/Input/Input";
import components from "./components/index";
import core from "./core/index";
import { NavBar } from "./core/NavBar";

function App() {
  const [value, setValue] = useState([]);
  const data = [];
  return (
    <div className="App">
      <h1>teste </h1>
      {/* <Time setValue={setValue} /> */}
      {/* <Input />       */}
      <NavBar />
    </div>
  );
}

export default App;
