import React from 'react'

const Players = ({players}) => {

  const allPlayers = players.map((player, index) => {
    return <li key={index}>{player.name}</li>
  })
  
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
