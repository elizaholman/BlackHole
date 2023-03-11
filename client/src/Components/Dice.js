import React from 'react'

const Dice = ({diceRoll}) => {
  const handleDiceRoll= () => {
    diceRoll()
  }
  return (
    <div>
      <button onClick={handleDiceRoll}> Dice</button>
    </div>
  )
}

export default Dice
