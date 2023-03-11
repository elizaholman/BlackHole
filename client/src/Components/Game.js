import React from 'react'
import Dice from './Dice' 
import "./Game.css"

const Game = ({diceRoll, position, positionRender, tile, player1, player2}) => {

 
  
  let divs = document.getElementsByClassName("tile");

      for (let div of divs){ 
    if (div.id == (`_${position}`)){
          div.className = "playerOne"
  } 
  }

  // console.log(player1.wins)




  return (
    <div>
    <h2>You Lost The Game</h2>
    <div className="tiles">
      
      <div className={tile} id="_100"></div>
      <div className={tile} id="_99"></div>
      <div className={tile} id="_98"></div>
      <div className={tile} id="_97"></div>
      <div className={tile} id="_96"></div>
      <div className={tile} id="_95"></div>
      <div className={tile} id="_94"></div>
      <div className={tile} id="_93"></div>
      <div className={tile} id="_92"></div>
      <div className={tile} id="_91"></div>
      <div className={tile} id="_81"></div>
      <div className={tile} id="_82"></div>
      <div className={tile} id="_83"></div>
      <div className={tile} id="_84"></div>
      <div className={tile} id="_85"></div>
      <div className={tile} id="_86"></div>
      <div className={tile} id="_87"></div>
      <div className={tile} id="_88"></div>
      <div className={tile} id="_89"></div>
      <div className={tile} id="_90"></div>
      <div className={tile} id="_80"></div>
      <div className={tile} id="_79"></div>
      <div className={tile} id="_78"></div>
      <div className={tile} id="_77"></div>
      <div className={tile} id="_76"></div>
      <div className={tile} id="_75"></div>
      <div className={tile} id="_74"></div>
      <div className={tile} id="_73"></div>
      <div className={tile} id="_72"></div>
      <div className={tile} id="_71"></div>
      <div className={tile} id="_61"></div>
      <div className={tile} id="_62"></div>
      <div className={tile} id="_63"></div>
      <div className={tile} id="_64"></div>
      <div className={tile} id="_65"></div>
      <div className={tile} id="_66"></div>
      <div className={tile} id="_67"></div>
      <div className={tile} id="_68"></div>
      <div className={tile} id="_69"></div>
      <div className={tile} id="_70"></div>
      <div className={tile} id="_60"></div>
      <div className={tile} id="_59"></div>
      <div className={tile} id="_58"></div>
      <div className={tile} id="_57"></div>
      <div className={tile} id="_56"></div>
      <div className={tile} id="_55"></div>
      <div className={tile} id="_54"></div>
      <div className={tile} id="_53"></div>
      <div className={tile} id="_52"></div>
      <div className={tile} id="_51"></div>
      <div className={tile} id="_41"></div>
      <div className={tile} id="_42"></div>
      <div className={tile} id="_43"></div>
      <div className={tile} id="_44"></div>
      <div className={tile} id="_45"></div>
      <div className={tile} id="_46"></div>
      <div className={tile} id="_47"></div>
      <div className={tile} id="_48"></div>
      <div className={tile} id="_49"></div>
      <div className={tile} id="_50"></div>
      <div className={tile} id="_40"></div>
      <div className={tile} id="_39"></div>
      <div className={tile} id="_38"></div>
      <div className={tile} id="_37"></div>
      <div className={tile} id="_36"></div>
      <div className={tile} id="_35"></div>
      <div className={tile} id="_34"></div>
      <div className={tile} id="_33"></div>
      <div className={tile} id="_32"></div>
      <div className={tile} id="_31"></div>
      <div className={tile} id="_21"></div>
      <div className={tile} id="_22"></div>
      <div className={tile} id="_23"></div>
      <div className={tile} id="_24"></div>
      <div className={tile} id="_25"></div>
      <div className={tile} id="_26"></div>
      <div className={tile} id="_27"></div>
      <div className={tile} id="_28"></div>
      <div className={tile} id="_29"></div>
      <div className={tile} id="_30"></div>
      <div className={tile} id="_20"></div>
      <div className={tile} id="_19"></div>
      <div className={tile} id="_18"></div>
      <div className={tile} id="_17"></div>
      <div className={tile} id="_16"></div>
      <div className={tile} id="_15"></div>
      <div className={tile} id="_14"></div>
      <div className={tile} id="_13"></div>
      <div className={tile} id="_12"></div>
      <div className={tile} id="_11"></div>
      <div className={tile} id="_1"></div>
      <div className={tile} id="_2"></div>
      <div className={tile} id="_3"></div>
      <div className={tile} id="_4"></div>
      <div className={tile} id="_5"></div>
      <div className={tile} id="_6"></div>
      <div className={tile} id="_7"></div>
      <div className={tile} id="_8"></div>
      <div className={tile} id="_9"></div>
      <div className={tile} id="_10"></div>

     
    </div>
    <Dice diceRoll={diceRoll} position={position}/>
    </div>
  )
}

export default Game
