import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = ({players, updateScore}) => {

  return (
    <div className='game-container'>
      <h1 className='title'>Black hole</h1>
      <PlayerSelect players={players} updateScore={updateScore}/>
    </div>
  )
}

export default GameContainer
