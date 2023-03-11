import React from 'react'

const Dice = ({diceRoll, position}) => {

  const portals = [
    {entrance:25,exit:9},
    {entrance:76,exit:46},
    {entrance:93,exit:75},
    {entrance:6,exit:40},
    {entrance:12,exit:30},
    {entrance:50,exit:74}
]
  const handleDiceRoll= () => {
    diceRoll(position, portals)
  }
  return (
    <div>
      <button onClick={handleDiceRoll}> Dice</button>
    </div>
  )
}

export default Dice
