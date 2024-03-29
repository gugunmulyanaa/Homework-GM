import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./data/store.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);