import { userInfo } from '../../storage'
import './Table.css'
import { FaEye } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";

const Table = ({data}:{data:any}) => {
  return (
    <table>
    <caption>
      Front-end web developer course 2021
    </caption>
    <thead>
      <tr>
        <th scope="col">name</th>
        <th scope="col">age </th>
        <th scope="col">moblie</th>

        <th scope="col">gander</th>
        <th scope="col">date</th>
        <th scope="col">time</th>

        {userInfo.role==='doctor'?<>
 <th>view</th>
    <th>edit</th></>:null}
      </tr>
    </thead>
    <tbody>
    {data.map((item:any)=> <tr>
      <th scope="row">{item.fullName}</th>
      <td>{item.age}</td>
      <td>{item.moblieNumber}</td>
      <td>{item.gander}</td>

      <td>{item.date}</td>
      <td>{item.time}</td>
{userInfo.role==='doctor'?<>
 <td><FaEye  color='blue' size={20}/>
 </td>
    <td><MdGppGood color='green' size={20} />
    </td></>:null}
     
    </tr>
    )}
    </tbody>
 
    
    </table>
  )
}

export default Table
