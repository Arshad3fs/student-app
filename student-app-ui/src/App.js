//Routers  App.js

import './App.css';
import React from "react"
import DisplayShools from './components/DisplaySchools';
import DisplayStudents from './components/DisplayStudents';
 import Singin from './components/Signin';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';


function App() {

  return (
    <>
       <Router> 
         <Routes>
         <Route path='/signin' element={ <DisplayStudents/>} />
          <Route path='/school' element={<DisplayShools />} />
          <Route path='/student' element={<DisplayStudents />} />
          <Route path='/signin' element={<Singin />} />
          <Route path='/signup' element={<Signup />} />
           <Route path='/' element={<Singin />} />
           <Route path='/*' element={<Singin />} />
        </Routes>
      </Router> 
    </>
  );
}

export default App;
