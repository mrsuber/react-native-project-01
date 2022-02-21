import React from 'react'
import {useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import {title,tableIcons} from '../../../data/data'
import {Sidebar,Topbar} from '../../../components'
import {Delete,Edit,ZoomIn} from '@material-ui/icons';
import {Link} from 'react-router-dom'
import axios from 'axios'

const InfoScreen = ({history}) => {
  const [info, setInfo] = useState([])
  const [tableData,setTableData]=useState(info)
  const [columsData,setColumsData] = useState(info)

  useEffect(()=>{
    const getInfo = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`

        }
      }
      try{
        const res= await axios.get("/api/fileupload/getallMultipleFiles",config);
        setInfo(res.data)
      }catch(error){}
    }


    getInfo()
  },[])


  const actions = [
   { icon: Edit, tooltip: 'Edit', onClick: (event, rowData) => alert('Edit ' + rowData.name + '?')},
   { icon: ZoomIn, tooltip: 'View', onClick: (event, rowData) => alert('View ' + rowData.name + '?')},
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
        <Topbar />
        <div>
          <Link className="add__user" to="/addInfo">Add User</Link>
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
