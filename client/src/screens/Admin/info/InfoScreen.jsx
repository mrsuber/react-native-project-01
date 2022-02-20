import React from 'react'
import {useState} from 'react'
import MaterialTable from 'material-table'
import {title, data, columns,tableIcons} from '../../../data/data'
import {Sidebar,Topbar} from '../../../components'
import {Delete,Edit,ZoomIn} from '@material-ui/icons';
import {Link} from 'react-router-dom'

const InfoScreen = () => {
  const [tableData,setTableData]=useState(data)
  const actions = [
   { icon: Edit, tooltip: 'Edit', onClick: (event, rowData) => alert('Edit ' + rowData.name + '?')},
   { icon: ZoomIn, tooltip: 'View', onClick: (event, rowData) => alert('View ' + rowData.name + '?')},
   { icon: Delete, tooltip: 'Delete', onClick: (event, rowData) => alert('Delete ' + rowData.name + '?')}
]
  return (
    <>
    <Sidebar  />
    <div className="admin__main">
        <Topbar />
        <div>
          <Link className="add__user">Add User</Link>
        </div>

          <div className="material__table_container">

          <MaterialTable
          icons={tableIcons}
          columns={columns}
          data={tableData}
          title="Information list"
          actions={actions}
          />
          </div>

        </div>
        </>
  )
}

export default InfoScreen
