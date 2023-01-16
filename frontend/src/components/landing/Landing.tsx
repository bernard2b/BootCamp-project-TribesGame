import React, {Component} from 'react';
import './Landing.scss';
import Header from '../header/Header';
import Menu from '../Menu/Menu';
import Resources from '../Resources/Resources';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import Buildings from '../pages/Buildings';

export default function Landing() {

  return (
    <div className="Landing">
      <Header />
      <Resources />
      <Main />
        <div className="leftMenu">
            <Header />
          <div className="container">
          {/* 
          <Menu />
          */} 
          {/*
          <div className="resources">
            Resources
          </div>
          */}
        </div>
          <Main />
        </div> 
    </div>
  );
}
