import React, { useEffect, useState } from 'react';
import "./Battle.scss";
import fetchUserDetails from "../../api/userDetails";
import Win from './resultScreen/Win';
import Loose from './resultScreen/Loose';

function Battle() {
  const [username, setUsername] = useState("username")
  const [isopen, setIsopen] = useState(false);
  const [selectedOpponent, setSelectedOpponent] = useState("");
  const [isBattleStarted, setIsBattleStarted] = useState(false)
  const [error, setError] = useState("");
  const [win, setWin] = useState(false);
  const [loose, setLoose] = useState(false);

  useEffect(() => {
    fetchUserDetails().then((user) => {
      setUsername(user.name)
    })
  }, [])

  const handleFunction = () => {
    if (isopen || selectedOpponent) {
      setSelectedOpponent("");
      setIsopen(false);
    } else {
      setIsopen(true)
    }
  }

  const handleBattleEvent = async () => {
    if (!isBattleStarted) {
      setIsBattleStarted(true)

    }
  }
  
  useEffect(() => {
    if (isBattleStarted) {
      setTimeout(() => {
        if (selectedOpponent === "low") {
          setLoose(false)
          setWin(true);
          <Win win={true} />
          setIsBattleStarted(false)
          setIsopen(false)
        } else {
          setWin(false);
          setLoose(true);
          <Loose loose={true} />
          setIsBattleStarted(false)
          setIsopen(false)
        }
        
      }, 4000)
    }
  }, [isBattleStarted])

  return (
    <div className='Battle'>
      {
        win && <Win win={win} />
      }
      {
        loose && <Loose loose={loose} />
      }
      {
        !isBattleStarted && !win && <div>
          <div className='container'>
            <div className="userSide">
              {username}
            </div>
            <div className="vs">
              VS
            </div>
            <div className="opponentSide">
              {selectedOpponent}  AI
            </div>
          </div>

          {
            !isopen && !win&&
            <button className='select' onClick={handleFunction}>choose difficulty</button>
          }
          
          {
            isopen &&
            <div className="pop">
              <h5 className='close' onClick={handleFunction}>X</h5>
              <p>choose difficulty</p>
              <div className="buttonsss">
                <p className='difficult' onClick={() => setSelectedOpponent("low")}>Easy</p>
                <p className='difficult' onClick={() => setSelectedOpponent("medium")}>Medium</p>
                <p className='difficult' onClick={() => setSelectedOpponent("high")}>Hard</p>
              </div>
              <div className="startBattleButton" onClick={() => handleBattleEvent()}>
                <p className="start">Start Battle</p>
              </div>
            </div>
          }
        </div>
      }
      {
        isBattleStarted &&
        <div className='BattleScreen'></div>
      }
    

    </div>
  )
}

export default Battle