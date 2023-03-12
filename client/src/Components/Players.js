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
    <div className='players'>
    <h1 className='title'>Blackhole</h1>

    <div className='form-div'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>New Player:</h2>
        <div className='new-player'>
          <input className='input' onChange={handleNameChange} type='text' name="name" value={name} placeholder="Name:"></input>
          <input className='input'type="submit" name="submit" value="Add Player"/>
        </div>
      </form>
    </div>

    <div className='existing-players-div-div'>
      <div className='existing-players-div'>
        <h2>Existing Players:</h2>
        <ul className='existing-players-list'>
          {allPlayers}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Players
