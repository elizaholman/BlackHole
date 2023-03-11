import React, {useState , useEffect} from 'react'
import PlayerSelect from '../Components/PlayerSelect'


const GameContainer = () => {
   
  const [position, setPosition] = useState()
  const [tile , setTile] = useState()

  useEffect(() => {
    setPosition(1)
    setTile("tile")
  }, [])

  // useEffect(() => {
  //   setTile("tile")
  // },[diceRoll])


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
  setTile("tile")
  setPosition(position)
  //player 1 turn = false/ player 2 turn true

  return position
}

const positionRender =((position, divs) => {

  for (let div of divs){
    if (div.className === "playerOne"){
      div.className = "tile"}}
  
      for (let div of divs){ 
    if (div.id == (`_${position}`)){
          div.className = "playerOne"
  }
  }})


  return (
    <div>
      <h1>Portals</h1>
      <PlayerSelect diceRoll={diceRoll} position={position} positionRender={positionRender} tile={tile}/>
    </div>
  )
}

export default GameContainer
