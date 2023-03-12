import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = ({players}) => {

  return (
    <div className='game-container'>
      <h1 className='title'>Blackhole</h1>
      <PlayerSelect players={players} />
    </div>
  )
}

export default GameContainer
