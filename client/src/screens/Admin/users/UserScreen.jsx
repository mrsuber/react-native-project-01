import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

import MaterialTable from 'material-table'
import {title,tableIcons} from '../../../data/data'
import {Sidebar,Topbar} from '../../../components'
import {Delete,Edit,ZoomIn} from '@material-ui/icons';
import {Link} from 'react-router-dom'

const UserScreen = ({history}) => {

  const [users, setUsers] = useState([])
  useEffect(()=>{
    const getInfo = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const res= await axios.get("/api/private/getallusers",config);
        setUsers(res.data.data)
      }catch(error){}
    }


    getInfo()
  },[])
  let columns = [

        {title:"UserName",field:"username"},
        {title:"Email",field:"email"},


      ]
  console.log(users)
  const actions = [
   { icon: Edit, tooltip: 'Edit', onClick: (event, rowData) => alert('Edit ' + rowData.name + '?')},
   { icon: ZoomIn, tooltip: 'View', onClick: (event, rowData) => alert('View ' + rowData.name + '?')},
   { icon: Delete, tooltip: 'Delete', onClick: (event, rowData) => alert('Delete ' + rowData.name + '?')}
]
  return (

    <>
    <Sidebar history={history} />
    <div className="admin__main">
        <Topbar />

            <div>
              <Link className="add__user" to="/register">Add User</Link>
            </div>
          <div className="material__table_container">

          <MaterialTable
           icons={tableIcons}
           columns={columns}
           data={users}
           title="Users List"
           actions = {actions}
           />
          </div>

        </div>
        </>
  )
}

export default UserScreen
