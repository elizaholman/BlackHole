import React from 'react'

const ScoreboardDetails = ({player}) => {

  const wins = (player.wins / 2)
  const losses = (player.losses / 2)

  let winPercentage;   
  if (wins === 0){
    winPercentage = 0
  }
  else {winPercentage = Math.floor(wins/(wins+losses)*100)}


  return (
    <tr className='table-row'>
        <td className='table-item'>{player.name}</td>
        <td className='table-item'>{wins}</td>
        <td className='table-item'>{losses}</td>
        <td className='table-item'>{winPercentage}%</td>
    </tr>
  )
}

export default ScoreboardDetails
