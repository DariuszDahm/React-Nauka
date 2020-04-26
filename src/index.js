import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Header';
import Add from './Add'
import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header nazwa="What is Lorem Ipsum?" />
    {/* <App /> */}
    <Add />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
