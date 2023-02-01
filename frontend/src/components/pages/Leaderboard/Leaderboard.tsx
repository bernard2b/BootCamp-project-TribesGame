import React, {useEffect, useState} from 'react'
import "./Leaderboard.scss";
import fetchUserDetails from "./../../../api/userDetails";
import userImg from "./img/astronaut.png"
import enemyImg1 from "./img/astronaut2.png"
import enemyImg2 from "./img/astronaut3.png"
import enemyImg3 from "./img/astronaut4.png"

function Leaderboard() {
  const [imperiumName, setImperiumName] = useState("My Kingdom");
  const [username, setUsername] = useState("user")
  const [loggedIn, setLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUserDetails().then((user) => {
      setImperiumName(user.imperium.name)
      setUsername(user.name)
      setLoggedIn(true)
  })
}, [])

  return (
<div className="card one">
  <div className="leaderboardHeader">
    <i className="arrow fas fa-chevron-left"></i>
    <h3 className="title">Leaderboard</h3>
    <div></div>
  </div>
  <div className="sort">
    <div className="day">Today</div>
    <div className="day active">Week</div>
    <div className="day">Month</div>
  </div>
  <div className="profile">
    <div className="person second">
      <div className="num">2</div>
      <i className="fas fa-caret-up"></i>
      <img src={userImg} alt="" className="photo"/>
      <p className="link">{username}</p>
      <p className="points">8023</p>
    </div>
    <div className="person first">
      <div className="num">1</div>
      <i className="fas fa-crown"></i>
      <img src={enemyImg3} alt="" className="photo"/>
      <p className="link">@masterMentor234</p>
      <p className="points">8122</p>
    </div>
    <div className="person third">
      <div className="num">3</div>
      <i className="fas fa-caret-up"></i>
      <img src={enemyImg1} alt="" className="photo"/>
      <p className="link">@you_die</p>
      <p className="points">7884</p>
    </div>
  </div>
  <div className="rest">
    <div className="others flex">
      <div className="rank">
        <i className="fas fa-caret-up"></i>
        <p className="num">4</p>
      </div>
      <div className="info flex">
        <img src={enemyImg2} alt="" className="p_img"/>
        <p className="link">@adam56</p>
        <p className="points">7861</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Leaderboard