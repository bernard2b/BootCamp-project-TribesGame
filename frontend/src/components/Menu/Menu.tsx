import React from 'react'
import {Link, Route, redirect, Routes, BrowserRouter} from 'react-router-dom'
import './Menu.scss'
import Buildings from '../pages/Buildings'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
        <div className="menuComponent"><Link to='/kingdom/buildings'><h4>Buildings</h4></Link></div>
        <div className="menuComponent"><Link to='/kingdom/battle'><h4>Battle</h4></Link></div>
        <div className="menuComponent"><Link to='/kingdom/leaderboard'><h4>Leaderboard</h4></Link></div>
        <div className="menuComponent"><Link to='/kingdom/troops'><h4>Troops</h4></Link></div>
        </div>
    </div>
  )
}

export default Menu