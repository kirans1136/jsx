import React from 'react'
import Login from './Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Signup';

const App = () => {
  return (
<Router>
  <Routes>
    <Route path="/Login" element={ <Login/>}/>
     <Route path="Signup" element={ <Signup/>}/>
  </Routes>
</Router>

  )
}

export default App