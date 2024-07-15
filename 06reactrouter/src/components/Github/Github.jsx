import React,{useState,useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'





function Github(){
    // const [data,setData]=useState([])
  
    //     useEffect(()=>{
    //         fetch(`https://api.github.com/users/GangaPawale`)
    //     .then(res=>res.json()).then(data=>{setData(data)})
    
        
    //     },[])
    const data=useLoaderData()
         
        
        
  
    
    return(
        <>Github:{data.followers}</>
    )
}

export default Github;

export const gitHubInfoLoader=async()=>{
   const response=await fetch(`https://api.github.com/users/GangaPawale`)
    
    return response.json()

}
