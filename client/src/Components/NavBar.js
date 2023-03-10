import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/game">Play</Link>
        </li>
        <li>
          <Link to="/scoreboard">Scoreboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
