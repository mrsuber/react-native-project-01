import {useState,useEffect} from 'react'
import axios from 'axios'
import img1 from '../../images/me.webp'
import {Sidebar,Topbar,Card,RecentUsers,RecentInfoInput} from '../../components'

import './PrivateScreen.css'



const PrivateScreen = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get("/api/private",config)

        setPrivateData(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])


  return (
    error? <span className="error-message">{error}</span>
    :
    <>
    <Sidebar  />
    <div className="admin__main">
        <Topbar />

        <Card/>
          <div className="admin__details">
            <RecentInfoInput />
            <RecentUsers img1={img1} />

          </div>
        </div>
    {/*<div style={{background:"green", color:"white"}}>PrivateData:{privateData}</div>
    <button onClick={logoutHandler}>Logout</button>*/}

    </>

  )
}

export default PrivateScreen
