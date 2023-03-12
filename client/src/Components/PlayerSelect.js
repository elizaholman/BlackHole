import React, {useState, useEffect} from 'react'
import OptionItem from './OptionItem'
import Game from './Game'

const PlayerSelect = ({  players}) => {

  const [player1, setPlayer1] = useState([]) 
  const [player2, setPlayer2] = useState([])




  const playerSelect_1 = players.map((player,index) => {

    return <OptionItem  key={player._id} player={player}/>
  })

  const playerSelect_2 = players.map((player,index) => {
    return <OptionItem key={player._id} player={player} />
  })

  const handleSelectPlayer1 = (event) => {
    setPlayer1(event.target.value)
  }

  const handleSelectPlayer2 = (event) => {
    setPlayer2(event.target.value)
  }

  return (
    <div className='player-select'>

      <select className="player1-select" onChange={handleSelectPlayer1}>
        <option selected disabled hidden>Select Player 1</option>
        {playerSelect_1}
      </select>

      <Game player1={player1} player2={player2} />

      <select className="player2-select" onChange={handleSelectPlayer2}>
      <option selected disabled hidden>Select Player 2</option>
      {playerSelect_2}
      </select>
    </div>
  )
}

export default PlayerSelect
