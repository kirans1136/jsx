import React,{useState} from "react"
import axiosInstence from "./helper/axios"
const CreatePost=()=>{
    let [courcename,setcourcename]=useState("")
    let[authorname,setauthorname]=useState("")
    let handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            let payload={
                courcename,
                authorname
        }
        let data=await axiosInstence.post("/posts",payload)
        console.log(data);
    }
        catch{
        console.log("unable to connect to server");
        }
    }

    return(
      
        <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="courcename">courcename : </label>
        <input type="text" id="courcename" onChange={(e)=>{
         setcourcename(e.target.value)
        }} /> <br />
        <label htmlFor="authorname">authorname  :  </label>
        <input type="text" id="authorname" onChange={(e)=>{
            setauthorname(e.target.value)
        }} /> <br />
        <button>SUBMIT</button>
        </form>
        </div>
       
    )

}
export default CreatePost