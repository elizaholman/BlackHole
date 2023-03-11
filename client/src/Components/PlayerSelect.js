import React, {useState, useEffect} from 'react'
import Game from './Game'

const PlayerSelect = ({diceRoll, position, positionRender, tile, players}) => {

  const [player1, setPlayer1] = useState([]) 
  const [player2, setPlayer2] = useState([])




  const playerSelect_1 = players.map((player,index) => {
    return <option key={index}>{player.name}</option>
  })

  const playerSelect_2 = players.map((player,index) => {
    return <option key={index}>{player.name}</option>
  })

  const handleSelectPlayer1 = (event) => {
    setPlayer1(event.target.value)
  }

  const handleSelectPlayer2 = (event) => {
    setPlayer2(event.target.value)
  }






  return (
    <div>
      <h2>Select a Player</h2>


      <select onChange={handleSelectPlayer1}>
        {playerSelect_1}
      </select>

      <select onChange={handleSelectPlayer2}>
      {playerSelect_2}
      </select>

      <Game player1={player1} player2={player2} diceRoll={diceRoll} position={position} positionRender={positionRender} tile={tile}/>
    </div>
  )
}

export default PlayerSelect
