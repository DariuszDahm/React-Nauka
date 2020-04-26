import React from 'react';
import './Header.css';

function Header({ nazwa }) {
  return (
    <>
    <header className="header-app">
       <h1>{ nazwa }</h1> 
       </header>  
    </>
  );
}

export default Header;
