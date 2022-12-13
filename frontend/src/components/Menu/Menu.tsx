import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
          <div className="menuComponent"><Link to='/kingdom/buildings'><img src={require('./menu-pictures/buildings.jpg')} /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/battle'><img src={require('./menu-pictures/attack.jpg')} /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/leaderboard'><img src={require('./menu-pictures/leaderboard.jpg')} /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/troops'><img src={require('./menu-pictures/troops.jpg')} /></Link></div>
        </div>
    </div>
  )
}

export default Menu