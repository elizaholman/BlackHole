import React, {useState, useEffect} from 'react'
import Dice from './Dice' 
import "./Game.css"

const Game = ({ player1, player2}) => {

  const [position1, setPosition1] = useState()
  const [position2, setPosition2] = useState()
  const[test1, setTest1] = useState(null)
  const[test2, setTest2] = useState(null)

  const Player1 = {
    "_id": "1",
    "name": "test-name",
    "active": true,
    "wins": 0,
    "losses": 0
    }

    const Player2 = {
      "_id": "2",
      "name": "test-name-2",
      "active": false,
      "wins": 0,
      "losses": 0
      }

  useEffect(() => {
    setPosition1(1)
    setPosition2(1)
    positionRender1(1)
    positionRender2(1)
    setTest1(Player1)
    setTest2(Player2)
  }, [])

  useEffect(() => {
    oldPositionRender1()
    positionRender1(position1)
  },[diceRoll1])

  useEffect(() => {
    oldPositionRender2()
    positionRender2(position2)
  },[diceRoll2])

  let divs = document.getElementsByClassName("tile");

  let div1 = document.getElementsByClassName("playerOne");

  let div2 = document.getElementsByClassName("PlayerTwo");

  let div3 = document.getElementsByClassName("bothInSquare");



function dice(diceSize){
  const randomNumber = Math.floor(Math.random()* diceSize)+1;
  return randomNumber
}

function diceRoll1(position, portals){

  position += dice(6)
  for (const portal of portals){
      if(position === portal.entrance){
          position = portal.exit}
  } 
  setPosition1(position)
  test1.active = false
  test2.active = true
  return position
}
function diceRoll2(position, portals){
  
  position += dice(6)
  for (const portal of portals){
      if(position === portal.entrance){
          position = portal.exit}
  } 
  setPosition2(position)
  test1.active = true
  test2.active = false
  return position
}

const positionRender1 =((position) => {
  for (let div of divs){ 
    if (div.id === (`_${position}`)){
          div.className = "playerOne"}
  }
  const test =document.getElementsByClassName("playerTwo")
  for (let div of test){ 
    if (div.id === (`_${position}`)){
          if(div.className === "playerTwo"){
            div.className = "bothInSquare"}
          }
}
})


const positionRender2 =((position) => {
      for (let div of divs){ 
    if (div.id === (`_${position}`)){
          div.className = "playerTwo"}
  }
  for (let div of div1){ 
    if (div.id === (`_${position}`)){
          if(div.className === "playerOne"){
            div.className = "bothInSquare"}
          }
}
})


  const oldPositionRender1 = () => {

    const test =document.getElementsByClassName("playerOne")
    for ( let div of test){
      div.className="tile"
    }
    for ( let div of div3){
      div.className="playerTwo"
    }
    }
    const oldPositionRender2 = () => {

      const test =document.getElementsByClassName("playerTwo")
      for ( let div of test){
        div.className="tile"
      }
      for ( let div of div3){
        div.className="playerOne"
      }   
      }


  return (
    <div className="gameboard">
      <div className="tiles">
        <div className="tile" id="_100"></div>
        <div className="tile" id="_99"></div>
        <div className="tile" id="_98"></div>
        <div className="tile" id="_97"></div>
        <div className="tile" id="_96"></div>
        <div className="tile" id="_95"></div>
        <div className="tile" id="_94"></div>
        <div className="tile" id="_93">ENTRANCE</div>
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
        <div className="tile" id="_76">ENTRANCE</div>
        <div className="tile" id="_75">EXIT</div>
        <div className="tile" id="_74">EXIT</div>
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
        <div className="tile" id="_46">EXIT</div>
        <div className="tile" id="_47"></div>
        <div className="tile" id="_48"></div>
        <div className="tile" id="_49"></div>
        <div className="tile" id="_50">ENTRANCE</div>
        <div className="tile" id="_40">EXIT</div>
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
        <div className="tile" id="_25">ENTRANCE</div>
        <div className="tile" id="_26"></div>
        <div className="tile" id="_27"></div>
        <div className="tile" id="_28"></div>
        <div className="tile" id="_29"></div>
        <div className="tile" id="_30">EXIT</div>
        <div className="tile" id="_20"></div>
        <div className="tile" id="_19"></div>
        <div className="tile" id="_18"></div>
        <div className="tile" id="_17"></div>
        <div className="tile" id="_16"></div>
        <div className="tile" id="_15"></div>
        <div className="tile" id="_14"></div>
        <div className="tile" id="_13"></div>
        <div className="tile" id="_12">ENTRANCE</div>
        <div className="tile" id="_11"></div>
        <div className="tile" id="_1"></div>
        <div className="tile" id="_2"></div>
        <div className="tile" id="_3"></div>
        <div className="tile" id="_4"></div>
        <div className="tile" id="_5"></div>
        <div className="tile" id="_6">ENTRANCE</div>
        <div className="tile" id="_7"></div>
        <div className="tile" id="_8"></div>
        <div className="tile" id="_9">EXIT</div>
        <div className="tile" id="_10"></div>
      </div>
    <Dice diceRoll1={diceRoll1} diceRoll2={diceRoll2} position1={position1} position2={position2} test1={test1} test2={test2}/>
    </div>
  )
}

export default Game
