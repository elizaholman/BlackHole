import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = () => {
   
  const [position, setPosition] = useState(1)

  useEffect(() => {
    setPosition()
  }, [])
  const portals = [
    {entrance:25,exit:9},
    {entrance:76,exit:46},
    {entrance:93,exit:75},
    {entrance:6,exit:40},
    {entrance:12,exit:30},
    {entrance:50,exit:74}
]

function diceRoll(diceSize){
  const randomNumber = Math.floor(Math.random()* diceSize)+1;
  return randomNumber
}
function portal_test(position, portal){
  position += diceRoll(6)
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
      <PlayerSelect/>
    </div>
  )
}

export default GameContainer
