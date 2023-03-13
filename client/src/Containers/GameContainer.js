import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = ({players, updateScore}) => {

  return (
    <div className='game-container'>
      <h1 className='title'>Blackhole</h1>
      <PlayerSelect players={players} updateScore={updateScore}/>
    </div>
  )
}

export default GameContainer
