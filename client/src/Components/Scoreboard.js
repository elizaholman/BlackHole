import React from 'react'
import ScoreboardDetails from './ScoreboardDetails'

const Scoreboard = ({players}) => {

  const allPlayers = players.map((player, index) => {
    return <ScoreboardDetails player={player} key={index} />
  })

  return (
    <div className='scoreboard'>
      <h1 className='title'>Blackhole</h1>
      <div className='table-div'>
        <table className='table'>
          <tr className='table'>
            <th className='table'>Name</th>
            <th className='table'>Wins</th>
            <th className='table'>Losses</th>
          </tr>
          {allPlayers}
        </table>
      </div>
    </div>
  )
}

export default Scoreboard
