import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Main /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
