import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
// import Login from './components/login/login'
// import Home from './components/mainPage/home'
// import SignUp from './components/SignUp/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import MainComponent from './components/mainComponent'

import MovieDetail from './components/MovieComponent/MovieDetail'

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
