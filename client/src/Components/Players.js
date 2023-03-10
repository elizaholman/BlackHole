import React, {useState, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';

const Players = ({players, deletePlayer, addPlayer}) => {

  const [name, setName] = useState("");

  const handleNameChange = (event) => setName(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    addPlayer({
      name: name,
      active: false,
      wins: 0,
      losses: 0
    });
    setName("");
  }

  const allPlayers = players.map((player, index) => {
    return <PlayerDetails key={index} player={player} deletePlayer={deletePlayer}/>
  });
  
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Add New Player:</h2>
      <input onChange={handleNameChange} type='text' name="name" value={name}></input>
      <input type="submit" name="submit" value="Add Player"/>
    </form>
        <h2>Existing Players:</h2>
        <ul>
          {allPlayers}
        </ul>
    </div>
  )
}

export default Players
