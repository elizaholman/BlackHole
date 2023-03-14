import React, {useState} from 'react'
import DiceRollSound1 from '../AudioFiles/DiceRoll1.mp3'
import DiceRollSound2 from '../AudioFiles/DiceRoll2.mp3'

const Dice = ({diceRoll1, diceRoll2, position1, position2, player1, player2, selectPlayer, selectPlayer2}) => {

  const [roll, setRoll] = useState('DICE')


  const portals = [
    {entrance:93,exit:59},
    {entrance:76,exit:83},
    {entrance:52,exit:40},
    {entrance:25,exit:30},
    {entrance:6,exit:18},
    {entrance:420,exit:75}
]

  const blackhole = [
    {entrance:56, exit: portals[blackHoleRoll()].exit},
    {entrance:55, exit: portals[blackHoleRoll()].exit},
    {entrance:45, exit: portals[blackHoleRoll()].exit},
    {entrance:46, exit: portals[blackHoleRoll()].exit},
  ]

function blackHoleRoll(){
  const randomNumber = Math.floor(Math.random()* 6);
  return randomNumber
}

  const handleDiceRoll= () => {
    if(selectPlayer && selectPlayer2 === true){

    if (player1.active === true){
    diceRoll1(position1, portals, blackhole, rollNumber())
  }
  else if (player2.active === true){
    diceRoll2(position2, portals, blackhole, rollNumber())
}
}
}


function rollNumber(){
  const randomNumber = Math.floor(Math.random()* 6)+1;

  if(randomNumber %2 === 1){
    new Audio(DiceRollSound1).play()}
else{new Audio(DiceRollSound2).play()}
  setRoll(randomNumber)
  return randomNumber
}

  return (
    <div className="dice-wrap">
      <button className='dice' onClick={handleDiceRoll}>{roll}</button>
  
    </div>
  )
}

export default Dice
