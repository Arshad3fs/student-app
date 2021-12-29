//Routers  App.js

import './App.css';
import { useEffect, useState } from 'react';
import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Countdown from './components/Countdown.js';
import DisplayShools from './components/DisplaySchools';
import DisplayStudents from './components/DisplayStudents';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Timeout from './components/Timeout';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


function App() {

  // let path = window.location.pathname;  

  // useEffect(()=>{
  //   path = window.location.pathname;
  // })
   

  return (
    <>
      {/* {path !== "/signin" && path !== "/" && } */}
      <Router>
        <Routes>
        <Route path='/school' element={<DisplayShools />} />
          <Route path='/student' element={<DisplayStudents />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signin />} />
          <Route path='/*' element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
