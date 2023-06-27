<<<<<<< HEAD
//*import './App.css';*//
import Navigation from "./Navigation/Nav";
import { useState } from "react";
import Home from "./Home/Home";
import Mountains from "./Mountains/Mountains";
import NationalParks from "./NationalParks/NationalParks";

function App() {
  const [page, setPage] = useState("home");
  const pages = { 
    home: <Home page={page} setPage={setPage}/>,
    mountains: <Mountains />,
    nationalParks: <NationalParks />
  };
  
  return (
    <div className="App">
      
      <Navigation page={page} setPage={setPage} />
      {pages[page]}
    </div>
  );
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

>>>>>>> 571f4b7b6df3c1c1fa80768603f16cd77ee7bba1
export default App;
