import React from 'react'
import "./Leaderboard.scss";
import fetchUserDetails from "../../api/userDetails";

function Leaderboard() {
  return (
<div className="card one">
  <div className="header">
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
      <img src="./../header/images/astronaut.png" alt="" className="photo"/>
      <p className="link">@i_am_ai</p>
      <p className="points">8023</p>
    </div>
    <div className="person first">
      <div className="num">1</div>
      <i className="fas fa-crown"></i>
      <img src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" alt="" className="photo main"/>
      <p className="link">@masterMentor234</p>
      <p className="points">8122</p>
    </div>
    <div className="person third">
      <div className="num">3</div>
      <i className="fas fa-caret-up"></i>
      <img src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png" alt="" className="photo"/>
      <p className="link">@lord_0980</p>
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
        <img src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png" alt="" className="p_img"/>
        <p className="link">@adam56</p>
        <p className="points">7861</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Leaderboard