import React from 'react'
import {useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {title,tableIcons} from '../../../data/data'
import {Sidebar,Topbar,ViewPopUp} from '../../../components'
import {Delete,Edit,ZoomIn} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import axios from 'axios'

const InfoScreen = ({history}) => {
  const [info, setInfo] = useState([])
  const [tableData,setTableData]=useState(info)
  const [columsData,setColumsData] = useState(info)
const [error,setError] =useState("")
  const [userInfo,setUserInfo]=useState([]);

  const [allUsers, setAllUsers] = useState([])
  const [popup, setPopup] = useState(false)
  const [data, setData] = useState('')


  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }

    const fetchUserInfo = async () =>{
      const id = localStorage.getItem("someRandomNumber")
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get(`/api/private/finduser/${id}`,config)

        setUserInfo(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }
    const fectchAllUsers = async () =>{
      const id = localStorage.getItem("someRandomNumber")
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get(`/api/private/getallusers`,config)

        setAllUsers(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }
    if(userInfo.isAdmin===true){
      fectchAllUsers()
    }


    fetchUserInfo()
  },[history,userInfo.isAdmin])

  useEffect(()=>{
    const getInfo = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`

        }
      }
      try{
        const res= await axios.get("/api/private/getallprodject",config);
        setInfo(res.data.data)
      }catch(error){}
    }


    getInfo()
  },[])


  const userPopup =(item)=>{
    setPopup(true)
    setData(item)
  }

  const actions = [
   { icon: Edit, tooltip: 'Edit', onClick: (event, rowData) => alert('Edit ' + rowData.Images + '?')},
   { icon: ZoomIn, tooltip: 'View', onClick: (event, rowData) => userPopup(rowData)},
   { icon: Delete, tooltip: 'Delete', onClick: (event, rowData) => alert('Delete ' + rowData.name + '?')}
]

let columns = [

      {title:"FirstName",field:"FirstName"},
      {title:"LastName",field:"LastName"},
      {title:"DateOfBirth",field:"DateOfBirth", align:"center"},
      {title:"IdCardNumber",field:"IdCardNumber",emptyValue:()=><em>null</em>},
      {title:"MotherName",field:"MotherName"},
      {title:"PhoneNumber",field:"PhoneNumber"},
      {title:"PlaceOfBirth",field:"PlaceOfBirth"},

      {title:"Region",field:"Region"},
      {title:"Residence",field:"Residence"}

    ]


  return (
    <>
    <Sidebar history={history} />
    <div className="admin__main">
    {popup?<ViewPopUp setPopup={setPopup} info={data}/>:''}
      {userInfo
        ?<Topbar avatar={userInfo.profilePic} loading={false}/>
        :<Topbar avatar={userInfo.profilePic} loading={true}/>
      }
        <div>
          <Link className="add__user" to="/addInfo">Add Info</Link>
        </div>

          <div className="material__table_container">

          <MaterialTable
          icons={tableIcons}
          columns={columns}
          data={info}
          title="Information list"
          actions={actions}
          />
          </div>

        </div>
        </>
  )
}

export default InfoScreen
