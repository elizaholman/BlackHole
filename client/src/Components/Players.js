import React from 'react';
import PlayerDetails from './PlayerDetails';

const Players = ({players, deletePlayer}) => {

  const allPlayers = players.map((player, index) => {
    return <PlayerDetails key={index} player={player} deletePlayer={deletePlayer}/>
  });
  
  return (
    <div>
    <form>
      <h2>Add New Player:</h2>
    </form>
        <h2>Existing Players:</h2>
        <ul>
          {allPlayers}
        </ul>
    </div>
  )
}

export default Players
