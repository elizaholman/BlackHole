import React, {useState, useEffect, useTransition} from 'react'
import OptionItem from './OptionItem'
import Game from './Game'

const PlayerSelect = ({ players, updateScore }) => {

  const [playerOneId, setPlayerOneId] = useState([]) 
  const [playerTwoId, setPlayerTwoId] = useState([])
  const [selectPlayer, setSelectPlayer] = useState(false);
  const [selectPlayer2, setSelectPlayer2] = useState(false);
  const [playerTurn1, setPlayerTurn1] = useState("player1-select-green")
  const [playerTurn2, setPlayerTurn2] = useState("player2-select-red")



  const playerSelect_1 = players.map((player,index) => {

    return <OptionItem  key={player._id} player={player}/>
  })

  const playerSelect_2 = players.map((player,index) => {
    return <OptionItem key={player._id} player={player} />
  })

  const handleSelectPlayer1 = (event) => {
    setPlayerOneId(event.target.value)
    setSelectPlayer(true)
  }

  const handleSelectPlayer2 = (event) => {
    setPlayerTwoId(event.target.value)
    setSelectPlayer2(true)
  }


  return (
    <div className='player-select'>

      <select className={playerTurn1} onChange={handleSelectPlayer1}>
        <option selected disabled hidden>Player 1</option>
        {playerSelect_1}
      </select>

      <Game setPlayerTurn1={setPlayerTurn1} setPlayerTurn2={setPlayerTurn2} selectPlayer2={selectPlayer2} selectPlayer={selectPlayer} updateScore={updateScore} playerOneId={playerOneId} playerTwoId={playerTwoId} players={players}/>

      <select className={playerTurn2} onChange={handleSelectPlayer2}>
      <option selected disabled hidden>Player 2</option>
      {playerSelect_2}
      </select>
    </div>
  )
}

export default PlayerSelect
