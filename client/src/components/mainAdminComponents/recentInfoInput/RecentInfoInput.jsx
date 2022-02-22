import React,{useEffect,useState} from 'react'
import axios from 'axios'
const RecentInfoInput = () => {
  const [info, setInfo] = useState([])
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
        {
          info.slice(0, 10).reverse().map((item,index)=>(
            <tr key={index}>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{item.Region}</td>
              <td>{item.Residence}</td>
            </tr>

          ))
        }

        </tbody>
      </table>
    </div>
  )
}

export default RecentInfoInput
