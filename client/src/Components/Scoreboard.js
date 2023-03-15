import React from 'react'
import ScoreboardDetails from './ScoreboardDetails'

const Scoreboard = ({players}) => {

  const allPlayers = players.map((player, index) => {
    return <ScoreboardDetails player={player} key={index} players={players}/>
  })
  
  return (
    <div className='scoreboard'>
      <h1 className='title'>Black hole</h1>
      <div className='table-div'>
        <table className='table'>
        <thead>
          <tr>
            <th className='table-heading'>Name</th>
            <th className='table-heading'>Wins</th>
            <th className='table-heading'>Losses</th>
            <th className='table-heading'>Win Percentage</th>
          </tr>
          </thead>
          <tbody>
          {allPlayers}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Scoreboard
