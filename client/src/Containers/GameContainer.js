import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = () => {
   
  const [position, setPosition] = useState(1)

  useEffect(() => {
    setPosition(1)
  }, [])


function dice(diceSize){
  const randomNumber = Math.floor(Math.random()* diceSize)+1;
  return randomNumber
}
function diceRoll(position, portals){
  position += dice(6)
  for (const portal of portals){
      if(position === portal.entrance){
          position = portal.exit}
  } 

  setPosition(position)
  //player 1 turn = false/ player 2 turn true
  return position
}
  return (
    <div>
      <h1>Portals</h1>
      <PlayerSelect diceRoll={diceRoll} position={position}/>
    </div>
  )
}

export default GameContainer
