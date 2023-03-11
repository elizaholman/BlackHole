import React from 'react'
import Game from './Game'

const PlayerSelect = ({diceRoll, position}) => {
  return (
    <div>
      <h2>Select a Player</h2>
      <Game diceRoll={diceRoll} position={position}/>
    </div>
  )
}

export default PlayerSelect
