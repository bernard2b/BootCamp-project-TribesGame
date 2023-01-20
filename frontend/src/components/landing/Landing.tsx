import React, {Component} from 'react';
import './Landing.scss';
import Header from '../header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import { BrowserRouter } from 'react-router-dom';
import Buildings from '../pages/Buildings';

export default function Landing() {

  return (
    <div className="Landing">
      <Header />
      <Main />
    </div>
  );
}
