import React from 'react'
import Nav from './Nav';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App