import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
// import App from './components/AppWHooks';
// import App from './components/Assignment1';
import LikeDislike from './components/LikeDislike';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LikeDislike />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
