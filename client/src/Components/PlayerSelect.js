import React from 'react'
import Game from './Game'

const PlayerSelect = ({diceRoll, position, positionRender, tile}) => {
  return (
    <div>
      <h2>Select a Player</h2>
      <Game diceRoll={diceRoll} position={position} positionRender={positionRender} tile={tile}/>
    </div>
  )
}

export default PlayerSelect
