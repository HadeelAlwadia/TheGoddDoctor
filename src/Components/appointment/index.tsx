import { getFromLocalStorage, userInfo } from '../../storage'
import './appointment.css'




interface Iappointment{
  id:string,
  fullName:string,
  mobileNumber:string,
  descraption:string,
  time:string,
  desc:string,age:string,
  date:string,
  status:'panding'|'completed'|'confirmed'

}


const Appointment = ({id,fullName,mobileNumber,descraption,date,time,age,status}:Iappointment) => {
  const handleChangeStatus=(event: React.ChangeEvent<HTMLInputElement>)=>{
       console.log(event.target.value)
       const appointments=getFromLocalStorage('appointments');
  }
  return (
    <section style={{display:'flex',flexDirection:'column'}} >
      <h1>{fullName}</h1>
      <p>{time}</p>
      <p>{mobileNumber}</p>
      <p>{descraption}</p>
      <p>{age}</p>
      <p>
        {date}
      </p>
{    userInfo.role==='doctor' ? 
<select style={{border:'none',outline:'none'}} onChange={handleChangeStatus}>
{['panding','completed','confirmed'].map(value=> <option value={value}>{value}</option>      )       
}
</select>


:<p >{status}</p>
}   
 </section>
  )
}


export default Appointment
