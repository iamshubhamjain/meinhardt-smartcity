import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import Header from "./components/header";
import LeftMenu from "./components/left-menu";
import HomePage from "./components/home-page";

import {Provider} from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <Header/>
      <LeftMenu/>
      <HomePage/>
    </Provider>
   </React.StrictMode>
);

