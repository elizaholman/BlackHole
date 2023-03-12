import React from 'react'
import ScoreboardDetails from './ScoreboardDetails'

const Scoreboard = ({players}) => {

  const allPlayers = players.map((player, index) => {
    return <ScoreboardDetails player={player} key={index} />
  })

  return (
    <div>
      <h1 className='title'>Blackhole</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Wins</th>
          <th>Losses</th>
        </tr>
        {allPlayers}
      </table>
    </div>
  )
}

export default Scoreboard
