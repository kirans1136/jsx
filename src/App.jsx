import React from 'react'
import Mobile from './json/mobiledata.json'
import Mobiles from './json/Mobiles';
import "./json/mobile.css"

const App = () => {
  return (
    <div>
        <Mobiles new={Mobile}/>
    </div>
  )
}

export default App