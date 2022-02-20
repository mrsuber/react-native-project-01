import React from 'react'

const RecentUsers = ({img1}) => {
  return (
    <div className="admin__recentCustomers">
    <div className="admin__cardHeader">
      <h2>Recent Registered Users</h2>
    </div>
    <table>
      <tbody>
        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>David<br/><span>Italy</span></h4></td>
        </tr>

        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Mohamad<br/><span>Cameroon</span></h4></td>
        </tr>

        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Amelia<br/><span>France</span></h4></td>
        </tr>

        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Olivia<br/><span>USA</span></h4></td>
        </tr>

        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Admit<br/><span>Japan</span></h4></td>
        </tr>
        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Ashraf<br/><span>India</span></h4></td>
        </tr>
        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Dian<br/><span>Malasia</span></h4></td>

        </tr>
        <tr>
          <td className="admin__td"><div className="admin__imgBox"><img src={img1} alt="user" /></div></td>
          <td><h4>Amit<br/><span>India</span></h4></td>
        </tr>
      </tbody>
    </table>

    </div>
  )
}

export default RecentUsers
