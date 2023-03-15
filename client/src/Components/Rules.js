import React from 'react'
import BluePortal from "../images/BluePortal.png"
import OrangePortal from "../images/OrangePortal.png"

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
                  Orange portals are entrances <img className='portal-image' src={OrangePortal}/>
                </li>
                <li>
                  Blue portals are exits <img className='portal-image' src={BluePortal}/>
                </li>
                <li>
                  Landing in the black hole takes you to a random exit 
                </li>
                <li>
                  First to 100 wins
                </li>
                <li>
                  Player must roll exactly 100 to win
                </li>
              </ul>
            </div>
            </div>
          </div>
  )
}

export default Rules
