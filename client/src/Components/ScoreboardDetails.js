import React from 'react'

const ScoreboardDetails = ({player}) => {

  return (
    <div>
      <tr>
        <td className='table-item'>{player.name}</td>
        <td className='table-item'>{player.wins}</td>
        <td className='table-item'>{player.losses}</td>
      </tr>
    </div>
  )
}

export default ScoreboardDetails
