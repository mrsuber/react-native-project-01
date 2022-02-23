import React,{useEffect,useState} from 'react'
import './ViewPopUp.css'
import axios from 'axios'




const ViewPopUp = ({setPopup,userInfo,info}) => {
  const [error,setError] =useState("")
  const [infos,setInfos]=useState([]);

useEffect(()=>{
  if(info) { const fetchUserInfo = async () =>{
      const id = info.SubmitedBy
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get(`/api/private/finduser/${id}`,config)

        setInfos(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchUserInfo()
  }
},[info])
console.log(info)

  return (
    <div className="social2__select_family_card_wrapper">

          {userInfo && <div className="social2__select_family_card">
              <h3>Display user info</h3>
              <h6>Username: {userInfo.username}</h6>
              <h6>Email: {userInfo.email}</h6>
              <h6>Admin Status: {userInfo.isAdmin? "True" : "False"}</h6>
              <div className="profilePic">
              <h6>User profile photo</h6>
              <img src={userInfo.profilePic} />
              </div>
              <button className="popup__button" onClick={()=>setPopup(false)}>back</button>
          </div>}

          {info && <div className="social2__select_family_card">
              <h3>Display Information Submited by :{infos.username}</h3>
              <h4>Information Details:</h4>
              <h6>First Name: {info.FirstName}</h6>
              <h6>Last Name: {info.LastName}</h6>
              <h6> Mothers Name: {info.MotherName}</h6>
              <h6> Phone Number: {info.PhoneNumber}</h6>
              <h6> Place Of Birth: {info.PlaceOfBirth}</h6>
              <h6> Region: {info.Region}</h6>
              <h6>Residence: {info.Residence}</h6>
              <div className="profilePic">
              <h6>Front Id Image</h6>
              <img src={info.Images[0].url}/>
              </div>
              <div className="profilePic">
              <h6>Back Id Image</h6>
              <img src={info.Images[1].url}/>
              </div>
              <div className="profilePic">
              <h6>Photo</h6>
              <img src={info.Images[2].url}/>
              </div>
              <div className="popup__button_container">
              <button className="popup__button" onClick={()=>setPopup(false)}>back</button>
              </div>
          </div>}



    </div>
  )
}

export default ViewPopUp
