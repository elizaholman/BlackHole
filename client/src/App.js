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
      .then(players => setPlayers(players.sort( (a, b) => {
        return b.wins - a.wins 
      })));
  }, []);

  const deletePlayer = playerToDelete => {
    PlayerService.deletePlayer(playerToDelete);
    setPlayers(players.filter(player => player._id !== playerToDelete))
  }

  const addPlayer = newPlayer => {
    PlayerService.addPlayer(newPlayer)
      .then(savedPlayer => setPlayers([ ...players, savedPlayer ]));
  }
    
  const updateScore = (playerWin, playerLose) => {
      PlayerService.updatePlayer(playerWin)
      PlayerService.updatePlayer(playerLose)
  }



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players players={players} deletePlayer={deletePlayer} addPlayer={addPlayer}/>} />
          <Route path="/game" element={<GameContainer players={players} updateScore={updateScore}/>} />
          <Route path="/scoreboard" element={<Scoreboard players={players} />} />
        </Routes>
        <NavBar/>
      </Router>
    </div>
  );
}

export default App;
