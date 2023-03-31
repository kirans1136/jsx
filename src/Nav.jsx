import React from "react";
import { Link } from "react-router-dom";
const Nav =()=>{
    return(
     <div>
     <ol style={{alignItems:"end", display:"flex" ,listStyleType:"none",justifyContent:"space-between" ,justifyItems:"flex-end" , textDecorationStyle:"none"}}>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/Login">Signup</Link>
      </li>
     </ol>
     </div>
    )
}
export default Nav