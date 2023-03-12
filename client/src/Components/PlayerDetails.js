import React from 'react'

const PlayerDetails = ({player, deletePlayer, index}) => {

  const handleDeletePlayer = () => {
    deletePlayer(player._id)
  }

  return (
    <div>
      <li className='existing-players' key={index}>
        {player.name}
        <button className='delete-button' onClick={handleDeletePlayer}>Delete</button>
      </li>
    </div>
  )
}

export default PlayerDetails
