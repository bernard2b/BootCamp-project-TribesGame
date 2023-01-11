import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
          <div className="menuComponent"><Link to='/kingdom/buildings'><img title='Buildings' src={require('./menu-pictures/space-station.png')} data-hover="Buildings" /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/battle'><img title='Battle' src={require('./menu-pictures/space-invaders.png')} data-hover="Battle" /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/leaderboard'><img title='Leaderboard' src={require('./menu-pictures/astronaut.png')}  data-hover="Leaderboard" /></Link></div>
          <div className="menuComponent"><Link to='/kingdom/troops'><img title='Troops' src={require('./menu-pictures/alien.png')} data-hover="Troops"/></Link></div>
        </div>
    </div>
  )
}

export default Menu