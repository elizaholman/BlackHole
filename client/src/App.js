import './App.css';
import GameContainer from './Containers/GameContainer';
import Players from './Components/Players';
import Scoreboard from './Components/Scoreboard';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/game" element={<GameContainer />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
