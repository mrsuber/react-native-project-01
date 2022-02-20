import React from 'react'

const RecentInfoInput = () => {
  return (
    <div className="admin__recentOrder">
      <div className="admin__cardHeader">
        <h2>Recent Information</h2>
        <a href="#" className="admin__btn">View all</a>
      </div>
      <table>
        <thead>
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Region</td>
            <td>Residence</td>
            



          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Star Refrigerator</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="admin__status admin__delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Window Coolers</td>
            <td>$120</td>
            <td>Due</td>
            <td><span className="admin__status admin__pending">pending</span></td>
          </tr>
          <tr>
            <td>Speakers</td>
            <td>$600</td>
            <td>Paid</td>
            <td><span className="admin__status admin__return">Return</span></td>
          </tr>
          <tr>
            <td>Hp Laptop</td>
            <td>$6000</td>
            <td>Due</td>
            <td><span className="admin__status admin__inporgress">In Progress</span></td>
          </tr>

          <tr>
            <td>Star Refrigerator</td>
            <td>$1200</td>
            <td>Paid</td>
            <td><span className="admin__status admin__delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Window Coolers</td>
            <td>$120</td>
            <td>Due</td>
            <td><span className="admin__status admin__pending">pending</span></td>
          </tr>
          <tr>
            <td>Speakers</td>
            <td>$600</td>
            <td>Paid</td>
            <td><span className="admin__status admin__return">Return</span></td>
          </tr>
          <tr>
            <td>Hp Laptop</td>
            <td>$6000</td>
            <td>Due</td>
            <td><span className="admin__status admin__inporgress">In Progress</span></td>
          </tr>
          <tr>
            <td>Apple Watch</td>
            <td>$600</td>
            <td>paid</td>
            <td><span className="admin__status admin__delivered">Delivered</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentInfoInput
