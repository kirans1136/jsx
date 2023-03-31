import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  let [username,setusername]=React.useState("")
  let[password,setpassword]=React.useState("")
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log({username,password});
    let a= localStorage.getItem("username",username)
    let b= localStorage.getItem("password",password)
    if(a===username && b===password){
      toast.success("logged in successfully")
    }
  else{
    toast.warn("invalid")
  }
  }
  return (
    <div>
    <h2 style={{marginRight:"350px",marginLeft:"400px",backgroundColor:'saddlebrown',color:'whitesmoke',paddingBottom:'0px'}}>Login page</h2>
    <ToastContainer/>
    <div style={{backgroundColor:"bisque",marginRight:"350px",marginLeft:"400px"}}>
      <form action="" style={{padding:'20px'}}>
     <label htmlFor="username">USERNAME</label>
     <br />
     <input type="text" id="username" style={{backgroundColor:"ghostwhite"}} onChange={(e)=>{
      e.preventDefault()
      let a=e.target.value
      setusername(a)
     }}/>
     <br />
     <label htmlFor="password">PASSWORD</label>
     <br />
     <input type="password"id="password" style={{backgroundColor:"ghostwhite"}} onChange={(e)=>{
     e.preventDefault()
     let b=e.target.value
     setpassword(b)
     }} />
     <br />
     <br />
     <button style={{marginInlineStart:"60px",marginBottom:"20px",color:"ThreeDFace",backgroundColor:"chocolate",borderRadius:'5px',fontFamily:'serif'}} onClick={handleSubmit}>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login