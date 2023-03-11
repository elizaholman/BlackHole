import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = ({players}) => {
   
  

  return (
    <div>
      <h1>Portals</h1>
      <PlayerSelect  players={players} />
    </div>
  )
}

export default GameContainer
