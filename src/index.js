import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import KtmBlog from './Components/topAttraction';
import DayBlog from './Components/dayBlog'
import Footer from './Components/footer';
import reportWebVitals from './reportWebVitals';
import CultureNav from './Components/CultureNav';
import CultureBlog from './Components/cultureBlog'
import ReligionBlog from './Components/religionBlog'
import {BrowserRouter as Router,Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/culture' exact component={CultureNav}/>
      <Route path='/blogs/culture' exact component={CultureBlog}/>
      <Route path='/blogs/religion' exact component={ReligionBlog}/>
      <Route path='/blogs/ktm' exact component={KtmBlog}/>
      <Route path='/blogs/day' exact component={DayBlog}/>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
