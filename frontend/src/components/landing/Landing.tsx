import React from 'react';
import './Landing.scss';
import Header from '../header/Header';
import Menu from '../Menu/Menu';

export default function Landing() {
  return (
    <div className="Landing">
      <Header />
      <Menu />
    </div>
  );
}
