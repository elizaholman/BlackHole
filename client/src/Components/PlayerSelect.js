import React, {useState, useEffect} from 'react'
import OptionItem from './OptionItem'
import Game from './Game'

const PlayerSelect = ({ players, updateScore }) => {

  const [playerOneId, setPlayerOneId] = useState([]) 
  const [playerTwoId, setPlayerTwoId] = useState([])


  const playerSelect_1 = players.map((player,index) => {

    return <OptionItem  key={player._id} player={player}/>
  })

  const playerSelect_2 = players.map((player,index) => {
    return <OptionItem key={player._id} player={player} />
  })

  const handleSelectPlayer1 = (event) => {
    setPlayerOneId(event.target.value)
  }

  const handleSelectPlayer2 = (event) => {
    setPlayerTwoId(event.target.value)
  }


  return (
    <div className='player-select'>

      <select className="player1-select" onChange={handleSelectPlayer1}>
        <option selected disabled hidden>Select Player 1</option>
        {playerSelect_1}
      </select>

      <Game updateScore={updateScore} playerOneId={playerOneId} playerTwoId={playerTwoId} players={players}/>

      <select className="player2-select" onChange={handleSelectPlayer2}>
      <option selected disabled hidden>Select Player 2</option>
      {playerSelect_2}
      </select>
    </div>
  )
}

export default PlayerSelect
