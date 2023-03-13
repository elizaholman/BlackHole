import React from 'react'

const Dice = ({diceRoll1, diceRoll2, position1, position2, test1, test2}) => {

  const portals = [
    {entrance:25,exit:9},
    {entrance:76,exit:46},
    {entrance:93,exit:75},
    {entrance:6,exit:40},
    {entrance:12,exit:30},
    {entrance:50,exit:74}
]
  const handleDiceRoll= () => {
    if (test1.active === true){
    diceRoll1(position1, portals)}
  else if (test2.active === true){
    diceRoll2(position2, portals)
  }
}
  return (
    <div>
      <button className='dice' onClick={handleDiceRoll}> Dice</button>
    </div>
  )
}

export default Dice
