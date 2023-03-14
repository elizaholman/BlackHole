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
          <tr className='table'>
            <th className='table'>Name</th>
            <th className='table'>Wins</th>
            <th className='table'>Losses</th>
            <th className='table'>Win Percentage</th>
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
