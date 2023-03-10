import './App.css';
import GameContainer from './Containers/GameContainer';
import Rules from './Components/Rules';
import Players from './Components/Players';
import Scoreboard from './Components/Scoreboard';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GameContainer/>
      <NavBar/>
    </div>
  );
}

export default App;
