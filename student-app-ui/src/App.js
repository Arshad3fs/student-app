//Routers  App.js

import './App.css';
import React from "react"
import Countdown from './components/Countdown.js';
import DisplayShools from './components/DisplaySchools';
import DisplayStudents from './components/DisplayStudents';
import Signin from './components/Signin';
import Signup from './components/Signup';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import UserDisplay from './components/UserDisplay';


function App() {
 
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/school' element={<DisplayShools />} />
          <Route path='/student' element={<DisplayStudents />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<UserDisplay />} />
          <Route path='/' element={<Signin />} />
          <Route path='/*' element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
