<<<<<<< HEAD
import React from "react";
import Img from "./images.jpeg"

const App =()=>{
    return(
        <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3STpHoQ2-Uq34usz_4--FbOVvbsgGy9iCEQ&usqp=CAU" alt="" />
        <img src={Img} alt="" />
        </>
    )
}
=======
import React from "react";
import { Component } from "react";
import Cbc from './Props/Cbc';

class App extends Component{
    render()
    {
        return(
            <Cbc data="hello"/>
        )
    }
}
>>>>>>> 20c447bd892be069b4eccf44e79842410bb2a067
export default App