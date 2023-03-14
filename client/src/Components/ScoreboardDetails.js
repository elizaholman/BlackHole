import React from 'react'

const ScoreboardDetails = ({player}) => {

  const wins = player.wins
  const losses = player.losses

  let winPercentage;   
  if (wins === 0){
    winPercentage = 0
  }
  else {winPercentage = Math.floor(wins/(wins+losses)*100)}


  return (
    <tr className='table-row'>
        <td className='table-item'>{player.name}</td>
        <td className='table-item'>{player.wins}</td>
        <td className='table-item'>{player.losses}</td>
        <td className='table-item'>{winPercentage}%</td>
    </tr>
  )
}

export default ScoreboardDetails
