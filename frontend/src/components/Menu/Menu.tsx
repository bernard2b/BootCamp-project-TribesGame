import React from 'react'
import {Link, Route, redirect, Routes, BrowserRouter, NavLink} from 'react-router-dom'
import './Menu.scss'
import Buildings from '../pages/Buildings'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
        <div className="menuComponent"><NavLink to='/kingdom/buildings'><h4>Buildings</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/kingdom/battle'><h4>Battle</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/kingdom/leaderboard'><h4>Leaderboard</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/kingdom/troops'><h4>Troops</h4></NavLink></div>
        </div>
    </div>
  )
}

export default Menu