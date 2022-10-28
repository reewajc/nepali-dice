import React from 'react'
import Dice from './Dice'
import CLUB from '../assets/CLUB.png'
import KING from '../assets/KING.png'
import QUEEN from '../assets/QUEEN.png'
import HEART from '../assets/HEART.png'
import DIAMOND from '../assets/DIAMOND.png'
import SPADE from '../assets/SPADE.png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

import Pdf from '../assets/board.pdf';
import Card from 'react-bootstrap/Card';
import {Puff} from "react-loader-spinner";

function DiceList(){
  const [diceData, setDiceData] = useState([]);
  const [loading, setLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const baseURL = '/roll-dice';
  const rollDice = async () => {
    const resp = await fetch(baseURL)
    const data = await resp.json();
    setDiceData(data)
    setLoading(false)
  }

  const diceMap = {
      "SPADE": "सुरथ",
      "KING":"बुर्जा",
      "QUEEN":"लंगुर",
      "DIAMOND":"इट",
    "CLUB":"चिडी",
    "HEART":"पान"
  };


  useEffect(() => {
    rollDice()
  }, [baseURL]);


  const rollAgain = async () => {
    return(
      await rollDice()
    )
      setIsActive(current => !current);
  }


  //const {KING, QUEEN, CLUB, HEART, DIAMOND, SPADE} = diceData
  return (
    <div className='container'>
         <div className='row'> 
         {
          loading?

              <Puff
                  height="500"
                  width=""
                  radisu={1}
                  color="#4fa94d"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
              />


              : diceData.map(dice => (
          
            <Dice  key={dice.diceId} name={diceMap[dice.face]} image = {require(`../assets/${dice.face}.png`)} />
            

          ))
         }
          </div>
          <pre/>
          <button onClick={rollAgain} id="rollButton"

                  style={{
                      backgroundColor: isActive ? 'salmon' : '',
                      color: isActive ? 'white' : '',
                  }}

                  className="btn btn-success btn-lg col-lg-10">Roll Again</button>

          <pre/>
        <div>
            <a  className="btn btn-success" href = {Pdf} target = "_blank">Download Board</a>
        </div>

    </div>
  )
}

export default DiceList