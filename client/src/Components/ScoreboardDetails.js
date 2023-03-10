import React from 'react'

const ScoreboardDetails = ({player}) => {

  return (
    <div>
      <tr>
        <td>{player.name}</td>
        <td>{player.wins}</td>
        <td>{player.losses}</td>
      </tr>
    </div>
  )
}

export default ScoreboardDetails
