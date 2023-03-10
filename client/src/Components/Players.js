import React, {useState, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';


const Players = ({players, deletePlayer}) => {

  const [newPlayer, setNewPlayer] = useState(  {
    name: "",
    active: false,
    wins: 0,
    losses: 0
  })

  const onChange = (event) => {
    const formData = Object.assign({}, newPlayer);
    formData[event.target.name] = event.target.value;
    setNewPlayer(formData);
    };

  const allPlayers = players.map((player, index) => {
    return <PlayerDetails key={index} player={player} deletePlayer={deletePlayer}/>
  });
  
  return (
    <div>
    <form>
      <h2>Add New Player:</h2>
      <input type='text' name="name" value={newPlayer.name}></input>
      <button>Add Player</button>
    </form>
        <h2>Existing Players:</h2>
        <ul>
          {allPlayers}
        </ul>
    </div>
  )
}

export default Players
