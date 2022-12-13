import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
          <div className="menuComponent"><Link to='/kingdom/buildings'>Buildings</Link></div>
          <div className="menuComponent"><Link to='/kingdom/battle'>Battle</Link></div>
          <div className="menuComponent"><Link to='/kingdom/leaderboards'>Leaderboard</Link></div>
          <div className="menuComponent"><Link to='/kingdom/troops'>Troops</Link></div>
        </div>
    </div>
  )
}

export default Menu