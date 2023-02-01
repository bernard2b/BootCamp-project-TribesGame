import React from 'react'
import {Link, Route, redirect, Routes, BrowserRouter, NavLink} from 'react-router-dom'
import './Menu.scss'
import Buildings from '../pages/Buildings'

function Menu() {
  return (
    <div className='Menu'>
      <div className="section">
        <div className="menuComponent"><NavLink to='/imperia/buildings'><h4>Buildings</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/imperia/battle'><h4>Battle</h4></NavLink></div>
        <div className="menuComponent"><NavLink to='/imperia/leaderboard'><h4>Leaderboard</h4></NavLink></div>
        <div className="menuComponent" id='last'><NavLink to='/imperia/troops'><h4>Troops</h4></NavLink></div>
        </div>
    </div>
  )
}

export default Menu