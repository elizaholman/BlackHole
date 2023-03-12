import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <ul className='nav-ul'>
        <li>
          <Link className='nav-li' to="/">Home</Link>
        </li>
        <li>
          <Link className='nav-li' to="/players">Players</Link>
        </li>
        <li>
          <Link className='nav-li' to="/game">Play</Link>
        </li>
        <li>
          <Link className='nav-li' to="/scoreboard">Scoreboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
