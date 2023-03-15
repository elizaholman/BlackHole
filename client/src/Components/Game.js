import React, { useState, useEffect } from "react";
import Dice from "./Dice";
import "./Game.css";
import PortalSound from "../AudioFiles/PortalSound.mp3";
import BlackholeSound from "../AudioFiles/SpaceWarp1.mp3";
import flicker from "./Game.css"

const Game = ({ playerOneId, playerTwoId, players, updateScore, selectPlayer, selectPlayer2, setPlayerTurn1 , setPlayerTurn2 }) => {
  const [position1, setPosition1] = useState(1);
  const [position2, setPosition2] = useState(1);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const [showPopup1, setShowPopup1] = useState(true);
  const [showPopup2, setShowPopup2] = useState(true);
  

  const getPlayerOne = () => {
    for (const player of players) {
      if (player._id === playerOneId) {
        player.active = true;
        setPlayer1(player);
      }
    }
  };

  const getPlayerTwo = () => {
    for (const player of players) {
      if (player._id === playerTwoId) {
        setPlayer2(player);
      }
    }
  };

  useEffect(() => {
    getPlayerOne();
    positionRender1(1);
  }, [playerOneId]);

  useEffect(() => {
    getPlayerTwo();
    positionRender2(1);
  }, [playerTwoId]);

  useEffect(() => {
    oldPositionRender1();
    positionRender1(position1);
  }, [diceRoll1]);

  useEffect(() => {
    oldPositionRender2();
    positionRender2(position2);
  }, [diceRoll2]);

  let divs = document.getElementsByClassName("tile");

  let div1 = document.getElementsByClassName("playerOne");

  // let div2 = document.getElementsByClassName("PlayerTwo");

  let div3 = document.getElementsByClassName("bothInSquare");



  function diceRoll1(position, portals, blackhole, roll) {
    const portalFlicker = document.getElementsByClassName("flicker");
    for (let div of portalFlicker) {
      div.className = "tile";
    }
    const blackholes = document.getElementsByClassName("blackhole");
    for (let div of blackholes) {
      div.className = "tile";
    }
    position += roll;
    if (position > 100) {
      position -= roll;
    }

    for (const portal of portals) {
      if (position === portal.entrance) {
        new Audio(PortalSound).play();
        for (let div of divs) {
          if (div.id === `_${position}`) {
            div.className= "flicker"
          }}
        position = portal.exit;
      }
    }

    for (const hole of blackhole) {
      if (position === hole.entrance) {
        new Audio(BlackholeSound).play();
        for (let div of divs) {
          if (div.id === `_${position}`) {
            div.className= "blackhole"
          }}
        position = hole.exit;
      }
    }
    setPosition1(position);
    setPlayerTurn1("player2-select-red") 
    setPlayerTurn2("player2-select-green") 
    player1.active = false;
    player2.active = true;
    // oldPositionRender1();
    // positionRender1(position1);
    return position;
  }

  function diceRoll2(position, portals, blackhole, roll) {
    const portalFlicker = document.getElementsByClassName("flicker");
    for (let div of portalFlicker) {
      div.className = "tile";
    }
    const blackholes = document.getElementsByClassName("blackhole");
    for (let div of blackholes) {
      div.className = "tile";
    }
    position += roll;
    if (position > 100) {
      position -= roll;
    }
    for (const portal of portals) {
      if (position === portal.entrance) {
        new Audio(PortalSound).play();
        for (let div of divs) {
          if (div.id === `_${position}`) {
            div.className= "flicker"
          }}
        position = portal.exit;
      }
    }
    for (const hole of blackhole) {
      if (position === hole.entrance) {
        new Audio(BlackholeSound).play();
        for (let div of divs) {
          if (div.id === `_${position}`) {
            div.className= "blackhole"
          }}
        position = hole.exit;
      }
    }
    setPosition2(position);
    setPlayerTurn2("player2-select-red")
    setPlayerTurn1("player2-select-green")
    player1.active = true;
    player2.active = false;
    // oldPositionRender2();
    // positionRender2(position2);
    return position;
  }

  const winScreen1 = () => {
    updateScore(player1, player2);
    if (showPopup1) {
      return setShowPopup1(!showPopup1);
    }
  };

  const winScreen2 = () => {
    updateScore(player2, player1);
    if (showPopup2) {
      return setShowPopup2(!showPopup2);
    }
  };

  const positionRender1 = (position) => {
    for (let div of divs) {
      if (div.id === `_${position}`) {
        div.className = "playerOne";
      }
    }
    const div2 = document.getElementsByClassName("playerTwo");
    for (let div of div2) {
      if (div.id === `_${position}`) {
        if (div.className === "playerTwo") {
          div.className = "bothInSquare";
        }
      }
    }
    if (position === 100) {
      console.log(player1.wins)
      player1.wins += 1;
      player2.losses += 1;
      // setPlayer1(player1);
      // setPlayer2(player2);
      console.log(player1.wins)
       return winScreen1();
    }
  };

  const positionRender2 = (position) => {
    for (let div of divs) {
      if (div.id === `_${position}`) {
        div.className = "playerTwo";
      }
    }
    for (let div of div1) {
      if (div.id === `_${position}`) {
        if (div.className === "playerOne") {
          div.className = "bothInSquare";
        }
      }
    }
    if (position === 100) {
      console.log(player2.wins)
      player2.wins += 1;
      player1.losses += 1;
      // setPlayer1(player1);
      // setPlayer2(player2);
      console.log(player2.wins)
      return winScreen2();
    }
  };

  const oldPositionRender1 = () => {
    const test = document.getElementsByClassName("playerOne");
    for (let div of test) {
      div.className = "tile";
    }
    for (let div of div3) {
      div.className = "playerTwo";
    }
  };
  const oldPositionRender2 = () => {
    const test = document.getElementsByClassName("playerTwo");
    for (let div of test) {
      div.className = "tile";
    }
    for (let div of div3) {
      div.className = "playerOne";
    }
  };

  return (
    <div className="gameboard">
      <div className="select-prompt-div">
      {!selectPlayer ? <div className="select-prompt">Select Player 1
          </div> : null}
          {!selectPlayer2 ? <div className="select-prompt">Select Player 2
          </div> : null}
          </div>
      <div className="dice-div">
        <Dice
        selectPlayer2={selectPlayer2}
          selectPlayer={selectPlayer}
          diceRoll1={diceRoll1}
          diceRoll2={diceRoll2}
          position1={position1}
          position2={position2}
          player1={player1}
          player2={player2}
        />
      </div>
      <div className="tiles">
        <div className="tile" id="_100"></div>
        <div className="tile" id="_99"></div>
        <div className="tile" id="_98"></div>
        <div className="tile" id="_97"></div>
        <div className="tile" id="_96"></div>
        <div className="tile" id="_95"></div>
        <div className="tile" id="_94"></div>
        <div className="tile" id="_93"></div>
        <div className="tile" id="_92"></div>
        <div className="tile" id="_91"></div>
        <div className="tile" id="_81"></div>
        <div className="tile" id="_82"></div>
        <div className="tile" id="_83"></div>
        <div className="tile" id="_84"></div>
        <div className="tile" id="_85"></div>
        <div className="tile" id="_86"></div>
        <div className="tile" id="_87"></div>
        <div className="tile" id="_88"></div>
        <div className="tile" id="_89"></div>
        <div className="tile" id="_90"></div>
        <div className="tile" id="_80"></div>
        <div className="tile" id="_79"></div>
        <div className="tile" id="_78"></div>
        <div className="tile" id="_77"></div>
        <div className="tile" id="_76"></div>
        <div className="tile" id="_75"></div>
        <div className="tile" id="_74"></div>
        <div className="tile" id="_73"></div>
        <div className="tile" id="_72"></div>
        <div className="tile" id="_71"></div>
        <div className="tile" id="_61"></div>
        <div className="tile" id="_62"></div>
        <div className="tile" id="_63"></div>
        <div className="tile" id="_64"></div>
        <div className="tile" id="_65"></div>
        <div className="tile" id="_66"></div>
        <div className="tile" id="_67"></div>
        <div className="tile" id="_68"></div>
        <div className="tile" id="_69"></div>
        <div className="tile" id="_70"></div>
        <div className="tile" id="_60"></div>
        <div className="tile" id="_59"></div>
        <div className="tile" id="_58"></div>
        <div className="tile" id="_57"></div>
        <div className="tile" id="_56"></div>
        <div className="tile" id="_55"></div>
        <div className="tile" id="_54"></div>
        <div className="tile" id="_53"></div>
        <div className="tile" id="_52"></div>
        <div className="tile" id="_51"></div>
        <div className="tile" id="_41"></div>
        <div className="tile" id="_42"></div>
        <div className="tile" id="_43"></div>
        <div className="tile" id="_44"></div>
        <div className="tile" id="_45"></div>
        <div className="tile" id="_46"></div>
        <div className="tile" id="_47"></div>
        <div className="tile" id="_48"></div>
        <div className="tile" id="_49"></div>
        <div className="tile" id="_50"></div>
        <div className="tile" id="_40"></div>
        <div className="tile" id="_39"></div>
        <div className="tile" id="_38"></div>
        <div className="tile" id="_37"></div>
        <div className="tile" id="_36"></div>
        <div className="tile" id="_35"></div>
        <div className="tile" id="_34"></div>
        <div className="tile" id="_33"></div>
        <div className="tile" id="_32"></div>
        <div className="tile" id="_31"></div>
        <div className="tile" id="_21"></div>
        <div className="tile" id="_22"></div>
        <div className="tile" id="_23"></div>
        <div className="tile" id="_24"></div>
        <div className="tile" id="_25"></div>
        <div className="tile" id="_26"></div>
        <div className="tile" id="_27"></div>
        <div className="tile" id="_28"></div>
        <div className="tile" id="_29"></div>
        <div className="tile" id="_30"></div>
        <div className="tile" id="_20"></div>
        <div className="tile" id="_19"></div>
        <div className="tile" id="_18"></div>
        <div className="tile" id="_17"></div>
        <div className="tile" id="_16"></div>
        <div className="tile" id="_15"></div>
        <div className="tile" id="_14"></div>
        <div className="tile" id="_13"></div>
        <div className="tile" id="_12"></div>
        <div className="tile" id="_11"></div>
        <div className="tile" id="_1"></div>
        <div className="tile" id="_2"></div>
        <div className="tile" id="_3"></div>
        <div className="tile" id="_4"></div>
        <div className="tile" id="_5"></div>
        <div className="tile" id="_6"></div>
        <div className="tile" id="_7"></div>
        <div className="tile" id="_8"></div>
        <div className="tile" id="_9"></div>
        <div className="tile" id="_10"></div>
      </div>
        <div className="player-wins">
          {!showPopup1 ? <div className="win-name"><h1 >{player1.name} Wins!</h1>
            <a className="link" href="/game">
              <button className="replay-button">Play Again</button>
            </a>
          </div> : null}
          {!showPopup2 ? <div className="win-name"><h1 >{player2.name} Wins!</h1>
            <a href="/game">
              <button className="replay-button">Play Again</button>
            </a>
          </div> : null}
        </div>
    </div>
  );
};

export default Game;
