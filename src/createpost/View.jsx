import React from 'react'
import { useState ,useEffect } from 'react';
import axiosInstence from './helper/axios';

const View = () => {
    let [data,setData]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let{data}= await axiosInstence.get("/posts")
            setData(data)
             data =window.location.fetch("http://localhost:4000/posts")
        }
        fetchdata()
    },[])
  return (
    <div style={{display:"flex"}}>
{data.map((x)=>{
    return(
        <div style={{border:"2px solid aqua",width:"40%",
        display:"flex",flexDirection:"column",justifyContent:"center",
        alignItems:"center"}}>
            <h1>{x.courcename}</h1>
            <h2>{x.authorname}</h2>
        </div>
    )})}
    </div>
  )
}

export default View