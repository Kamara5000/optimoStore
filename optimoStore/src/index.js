import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
//import About from './interface/about';
import * as serviceWorker from './serviceWorker';
import {createStore}  from 'redux';
import myReducer from './interface/reducers/index';
import allReducers from './interface/reducers/index'
import { Provider } from 'react-redux';

let myStore = createStore(allReducers)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <App/>
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
