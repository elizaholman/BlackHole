import './App.css';
import GameContainer from './Containers/GameContainer';
import Players from './Components/Players';
import Scoreboard from './Components/Scoreboard';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PlayerService from './services/PlayersService';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    PlayerService.getPlayers()
      .then(players => setPlayers(players));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players players={players}/>} />
          <Route path="/game" element={<GameContainer />} />
          <Route path="/scoreboard" element={<Scoreboard players={players} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
