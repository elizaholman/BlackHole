import React from 'react'

const Rules = () => {
  return (
        <div className='rules-page'>
        <h1 className='title'>Black hole</h1>
        <div className='rules-full'>
          <div className='rules-page-top'>
            <div className='player1'>Player 1</div>
            <h1><u>Game Rules</u></h1>
            <div className='player2'>Player 2</div>
          </div>
            <div className='rules-list-div'>
              <ul className='rules-list'>
                <li>
                  Orange portals are entrances (insert image)
                </li>
                <li>
                  Blue portals are exits (insert image)
                </li>
                <li>
                  Black hole is an entrance which takes you to a random exit
                </li>
                <li>
                  First to 100 wins
                </li>
                <li>
                  Must roll exactly 100 to win
                </li>
              </ul>
            </div>
            </div>
          </div>
  )
}

export default Rules
