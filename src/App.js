import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const logo2 = "Programowanie w React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt={logo} title={logo2} />
        <p>
          Edytuj kod z  <code>src/App.js</code> zapisz go i uruchom ponownie.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dokumentacja React
        </a>
      </header>
    </div>
  );
}

export default App;
