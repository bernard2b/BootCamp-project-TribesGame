import React from 'react';
import './Landing.scss';
import Header from '../header/Header';
import Menu from '../Menu/Menu';
import Resources from '../Resources/Resources';
import Main from '../Main/Main';

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
