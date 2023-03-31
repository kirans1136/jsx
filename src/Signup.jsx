import React from 'react'
const Signup = () => {
  let [username,setusername]=React.useState("")
  let[password,setpassword]=React.useState("")
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log({username,password});
    let a= localStorage.setItem("username",username)
    let b= localStorage.setItem("password",password)
    window.location.assign('/Login')
  
}
  return (
    <div >
      <form action="">
        <label htmlFor="username">FirstName</label>
        <br />
        <input type="text" id="username" onChange={(e)=>{
          e.preventDefault()
          let a=e.target.value
          setusername(a)
        }}/>
        <br />
        <label htmlFor="last">LastName</label>
        <br />
        <input type="text" id="LastName" />
        <br />
        <label htmlFor="password">SetPassword</label>
        <br />
        <input type="password" id='password' onChange={(e)=>{
        e.preventDefault()
        let b=e.target.value
        setpassword(b)
        }}/>
        <br /><br />
        <button onClick={handleSubmit}>SIGNUP</button>
      </form>
    </div>
   
  )
}

export default Signup