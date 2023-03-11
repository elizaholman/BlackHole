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

  const deletePlayer = playerToDelete => {
    PlayerService.deletePlayer(playerToDelete);
    setPlayers(players.filter(player => player._id !== playerToDelete))
  }

  const addPlayer = newPlayer => {
    PlayerService.addPlayer(newPlayer)
      .then(savedPlayer => setPlayers([ ...players, savedPlayer ]));
  };

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players players={players} deletePlayer={deletePlayer} addPlayer={addPlayer}/>} />
          <Route path="/game" element={<GameContainer players={players}/>} />
          <Route path="/scoreboard" element={<Scoreboard players={players} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
