import React from 'react'

const PlayerDetails = ({player, deletePlayer, index}) => {

  const handleDeletePlayer = () => {
    deletePlayer(player._id)
  }

  return (
    <div>
      <li key={index}>
        {player.name}
      </li>
      <button onClick={handleDeletePlayer}>Delete</button>
    </div>
  )
}

export default PlayerDetails
